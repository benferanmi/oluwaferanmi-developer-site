import { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState(null);
    const [error, setError] = useState(null);
    const [logs, setLogs] = useState([]);

    const BACKEND_URL = 'https://api.staging.pelbliss.com/api/media/signature';
    const IMAGEKIT_URL = 'https://upload.imagekit.io/api/v1/files/upload';
    const IMAGEKIT_PUBLIC_KEY = 'public_gL4X6mYUYCt+PiGKlEigFHzmOHc=';
    const BEARER_TOKEN = localStorage.getItem("authToken") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjU3NGY5N2RkN2E4ZTg2NDE3N2ZjNSIsInVzZXJJZCI6IjY4YjU3NGY5N2RkN2E4ZTg2NDE3N2ZjNSIsImVtYWlsIjoiY2xhc3NpY2ZlcmFubWkxMTIyMDAzQGdtYWlsLmNvbSIsInJvbGUiOiJ2ZW5kb3IiLCJpYXQiOjE3NTY4MDU4NTksImV4cCI6MTc1Njg5MjI1OSwiYXVkIjoicGVsYmxpc3MtbWFya2V0cGxhY2UtY2xpZW50IiwiaXNzIjoicGVsYmxpc3MtbWFya2V0cGxhY2UifQ.7FbOTVdljd1pRu7AyRB8BMVaOVrZVsDK2wnnXO-d1zc";

    const addLog = (message, type = 'info') => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, { message, type, timestamp }]);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setUploadResult(null);
        setError(null);
        setLogs([]);

        if (file) {
            addLog(`File selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
        }
    };

    const getSignature = async () => {
        addLog('Requesting signature from backend...');

        try {
            const response = await fetch(BACKEND_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Backend response: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            addLog(`Signature received: ${JSON.stringify(data, null, 2)}`, 'success');
            return data;
        } catch (err) {
            addLog(`Error getting signature: ${err.message}`, 'error');
            throw err;
        }
    };

    const uploadToImageKit = async (file, signatureData) => {
        addLog('Uploading to ImageKit...');

        // Convert expire from milliseconds to seconds if needed
        const expireInSeconds = signatureData.expire > 9999999999
            ? Math.floor(signatureData.expire / 1000)
            : signatureData.expire;

        // Debug timestamp information
        const currentTime = Math.floor(Date.now() / 1000);
        const timeDiff = expireInSeconds - currentTime;
        const hoursFromNow = timeDiff / 3600;

        addLog(`Current Unix time: ${currentTime}`);
        addLog(`Expire Unix time: ${expireInSeconds}`);
        addLog(`Time difference: ${timeDiff} seconds (${hoursFromNow.toFixed(2)} hours from now)`);

        let finalExpire = expireInSeconds;

        // ImageKit expects expire to be within 1 hour from now
        if (hoursFromNow > 1) {
            addLog(`Warning: Expire time is ${hoursFromNow.toFixed(2)} hours from now, but ImageKit requires < 1 hour`, 'error');
            // Let's try setting it to 30 minutes from now instead
            finalExpire = currentTime + (30 * 60); // 30 minutes from now
            addLog(`Adjusting expire to 30 minutes from now: ${finalExpire}`);
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('publicKey', IMAGEKIT_PUBLIC_KEY);
        formData.append('signature', signatureData.signature);
        formData.append('expire', finalExpire.toString());
        formData.append('token', signatureData.token);
        formData.append('fileName', file.name);

        try {
            const response = await fetch(IMAGEKIT_URL, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`ImageKit upload failed: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            addLog(`Upload successful: ${JSON.stringify(result, null, 2)}`, 'success');
            return result;
        } catch (err) {
            addLog(`ImageKit upload error: ${err.message}`, 'error');
            throw err;
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            setError('Please select a file first');
            addLog('No file selected', 'error');
            return;
        }

        setUploading(true);
        setError(null);
        setUploadResult(null);

        try {
            // Step 1: Get signature from backend
            const signatureData = await getSignature();

            // Step 2: Upload to ImageKit
            const result = await uploadToImageKit(selectedFile, signatureData);

            setUploadResult(result);
            addLog('Upload process completed successfully!', 'success');

        } catch (err) {
            setError(err.message);
            addLog(`Upload failed: ${err.message}`, 'error');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">ImageKit Upload Test</h2>

            <div className="space-y-4">
                <div>
                    <label htmlFor="file-input" className="block text-sm font-medium text-gray-700 mb-2">
                        Select Image File
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={!selectedFile || uploading}
                    className={`w-full py-2 px-4 rounded-md text-white font-medium ${!selectedFile || uploading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
            </div>

            {/* Error Display */}
            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <h3 className="text-red-800 font-medium">Error</h3>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
            )}

            {/* Success Result */}
            {uploadResult && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                    <h3 className="text-green-800 font-medium mb-2">Upload Successful!</h3>
                    <div className="space-y-2">
                        <p className="text-sm text-green-700">
                            <strong>File ID:</strong> {uploadResult.fileId}
                        </p>
                        <p className="text-sm text-green-700">
                            <strong>URL:</strong>
                            <a href={uploadResult.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                                {uploadResult.url}
                            </a>
                        </p>
                        <p className="text-sm text-green-700">
                            <strong>Name:</strong> {uploadResult.name}
                        </p>
                        {uploadResult.url && (
                            <div className="mt-3">
                                <img
                                    src={uploadResult.url}
                                    alt="Uploaded image"
                                    className="max-w-xs h-auto border rounded-md shadow-sm"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Logs */}
            {logs.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                    <h3 className="text-gray-800 font-medium mb-3">Process Logs</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {logs.map((log, index) => (
                            <div key={index} className="text-xs font-mono">
                                <span className="text-gray-500">[{log.timestamp}]</span>
                                <span className={`ml-2 ${log.type === 'error' ? 'text-red-600' :
                                    log.type === 'success' ? 'text-green-600' :
                                        'text-gray-700'
                                    }`}>
                                    {log.message}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Configuration Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <h3 className="text-blue-800 font-medium mb-2">Configuration</h3>
                <div className="text-xs text-blue-700 space-y-1">
                    <p><strong>Backend URL:</strong> {BACKEND_URL}</p>
                    <p><strong>ImageKit URL:</strong> {IMAGEKIT_URL}</p>
                    <p><strong>Public Key:</strong> {IMAGEKIT_PUBLIC_KEY}</p>
                    <p><strong>Bearer Token:</strong> {BEARER_TOKEN.substring(0, 50)}...</p>
                </div>
            </div>
        </div>
    );
};

export default ImageUploadForm;
import { Download } from 'lucide-react';
import { useState } from 'react';

const DownloadCvButton = () => {
    const [isDownloading, setIsDownloading] = useState(false);


    const downloadCv = async () => {
        setIsDownloading(true);

        // Simulate download process
        setTimeout(() => {
            const cvUrl = '/benFeranmiResume.pdf';
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'Benferanmi_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsDownloading(false);
        }, 800);
    };


    return (
        <div>
            <button
            aria-label="Download Cv"
                onClick={downloadCv}
                disabled={isDownloading}
                className="group relative bg-gradient-to-r from-orange-500 to-gl hover:from-orange-600 hover:to-gl text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-orange-500/20 hover:border-orange-400/40"
            >
                <div className="flex items-center space-x-3">
                    {isDownloading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Downloading...</span>
                        </>
                    ) : (
                        <>
                            <Download className="w-5 h-5 group-hover:animate-bounce" />
                            <span>Download CV</span>
                        </>
                    )}
                </div>

                {/* Animated background effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-gl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
        </div>
    )
}

export default DownloadCvButton
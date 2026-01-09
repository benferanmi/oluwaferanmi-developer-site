import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [expanded, setExpanded] = useState(null);

  const layers = [
    {
      id: 'client',
      title: '🖥️ Client Layer',
      items: ['Web App (React/Next.js)', 'Mobile App (React Native)', 'Admin Panel', 'Vendor Portal'],
      color: 'bg-blue-50'
    },
    {
      id: 'edge',
      title: '⚡ Edge Layer',
      items: ['CDN (Cloudflare)', 'Load Balancer (Nginx/HAProxy)', 'DDoS Protection', 'SSL/TLS Termination'],
      color: 'bg-cyan-50'
    },
    {
      id: 'gateway',
      title: '🔌 API Gateway',
      items: ['Express.js Router', 'Request/Response Handling', 'Routing Logic', 'Version Management'],
      color: 'bg-indigo-50'
    },
    {
      id: 'middleware',
      title: '🔐 Middleware & Security',
      items: ['JWT Authentication', 'Rate Limiting (Redis)', 'Input Validation & Sanitization', 'CORS & Helmet', 'Passport OAuth 2.0', 'Winston Logger', 'New Relic APM'],
      color: 'bg-indigo-50'
    },
    {
      id: 'services',
      title: '⚙️ Core Business Services (16+)',
      items: [
        'Auth Service (Login, Register, Token Management)',
        'Vendor Service (Approval, KYC, Subscription)',
        'Listing Service (CRUD, Search, Redis Caching)',
        'Payment Service (Paystack API, Webhooks)',
        'Booking Service (Weddings, Quotes)',
        'Review Service (Ratings, Moderation)',
        'Category Service (Hierarchy Management)',
        'User Service (Profiles, Preferences)',
        'Email Service (Mailgun, Nodemailer)',
        'Dashboard Service (Analytics, Reports)',
        'Audit Service (Action Logging)',
        'Image Service (ImageKit Optimization)',
        'Search Service (Full-text Search)',
        'OTP Service (2FA, SMS Verification)',
        'Admin Service (User/Content Management)',
        'Cron Jobs (Scheduled Tasks)'
      ],
      color: 'bg-indigo-50'
    },
    {
      id: 'data',
      title: '💾 Data Persistence Layer',
      items: ['MongoDB (Primary DB)', 'Redis Cache', 'ImageKit CDN', 'Cloud Storage (Backup)'],
      color: 'bg-amber-50'
    },
    {
      id: 'external',
      title: '🔗 External Integrations',
      items: ['Paystack (Payments)', 'OAuth Providers (Google, etc.)', 'Mailgun/SMTP', 'New Relic (APM)', 'ImageKit (CDN)'],
      color: 'bg-purple-50'
    },
    {
      id: 'cicd',
      title: '🚀 CI/CD Pipeline (GitHub Actions)',
      items: [
        'Code Push to GitHub',
        'Lint & Format (ESLint, Prettier)',
        'Unit Tests (Jest)',
        'Build TypeScript',
        'Docker Build & Push',
        'Security Scan (Snyk)',
        'Deploy to Staging',
        'E2E Tests',
        'Deploy to Production'
      ],
      color: 'bg-green-50'
    },
    {
      id: 'deployment',
      title: '🖲️ Deployment Infrastructure (Ubuntu Server)',
      items: [
        'Reverse Proxy (Nginx)',
        'Process Manager (PM2)',
        'Docker Containerization',
        'Systemd Services',
        'SSL Certificates (Let\'s Encrypt)',
        'Environment Variables (.env)',
        'Log Aggregation',
        'Database Backups',
        'Health Monitoring'
      ],
      color: 'bg-red-50'
    },
    {
      id: 'monitoring',
      title: '📊 Monitoring & Logging',
      items: [
        'New Relic APM',
        'Winston Logs (Daily Rotate)',
        'PM2 Monitoring',
        'MongoDB Atlas Monitoring',
        'Redis Monitoring',
        'Alerting & Notifications',
        'Error Tracking'
      ],
      color: 'bg-orange-50'
    }
  ];

  const techStack = {
    'Backend': 'Node.js, Express.js, TypeScript',
    'Database': 'MongoDB, Redis, MongoDB Atlas (Cloud)',
    'Authentication': 'JWT, Passport.js, OAuth 2.0',
    'Payment': 'Paystack API',
    'Storage': 'ImageKit, Cloud Storage',
    'Email': 'Mailgun, Nodemailer',
    'Monitoring': 'New Relic, Winston Logger',
    'Security': 'Helmet, express-validator, bcryptjs',
    'DevOps': 'Docker, GitHub Actions, Ubuntu Server, Nginx, PM2',
    'Testing': 'Jest, Supertest',
    'Code Quality': 'ESLint, TypeScript, Prettier'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏗️ Pelbliss Architecture</h1>
          <p className="text-gray-600 text-lg">Complete Multi-Vendor Marketplace with CI/CD Pipeline & Production Deployment</p>
        </div>

        {/* Main Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {layers.map((layer) => (
            <div key={layer.id} className={`${layer.color} rounded-lg shadow-md border-l-4 border-blue-600`}>
              <button
                onClick={() => setExpanded(expanded === layer.id ? null : layer.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-opacity-75 transition"
              >
                <h2 className="text-lg font-bold text-gray-900">{layer.title}</h2>
                <ChevronDown 
                  size={20} 
                  className={`transform transition ${expanded === layer.id ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expanded === layer.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {layer.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Data Flow & Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">Request Flow</h3>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>1. Client Request → CDN/LB</li>
                <li>2. API Gateway → Middleware</li>
                <li>3. Service Layer Processing</li>
                <li>4. Database/Cache Query</li>
                <li>5. Response → Client</li>
              </ol>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-2">CI/CD Pipeline</h3>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>1. Git Push → GitHub</li>
                <li>2. Run Tests & Lint</li>
                <li>3. Build Docker Image</li>
                <li>4. Security Scanning</li>
                <li>5. Deploy to Production</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-2">Deployment Setup</h3>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>1. Ubuntu Server (18.04+)</li>
                <li>2. Docker for Containerization</li>
                <li>3. Nginx Reverse Proxy</li>
                <li>4. PM2 Process Manager</li>
                <li>5. Automated Backups</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💻 Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(techStack).map(([category, tech]) => (
              <div key={category} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-700">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Checklist */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Deployment Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Server Setup</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Ubuntu Server (18.04 LTS or later)</li>
                <li>✓ Node.js 18+ & npm/yarn</li>
                <li>✓ MongoDB (Atlas or Self-hosted)</li>
                <li>✓ Redis Server</li>
                <li>✓ Nginx Configured</li>
                <li>✓ PM2 as Process Manager</li>
                <li>✓ SSL Certificate (Let's Encrypt)</li>
                <li>✓ Firewall Rules Configured</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">CI/CD Workflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ GitHub Actions Configured</li>
                <li>✓ Docker Images Building</li>
                <li>✓ Automated Testing on Push</li>
                <li>✓ Staging Environment</li>
                <li>✓ Production Deployment</li>
                <li>✓ Automated Rollback on Failure</li>
                <li>✓ Health Checks Enabled</li>
                <li>✓ Monitoring & Alerts Set</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Missing Components Added */}
        <div className="bg-yellow-50 rounded-lg shadow-lg p-6 mt-8 border-l-4 border-yellow-600">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Key Additions to Original Architecture</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>CDN & Load Balancer:</strong> Cloudflare & Nginx for high availability</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>CI/CD Pipeline:</strong> GitHub Actions automated workflow</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>Deployment Layer:</strong> Ubuntu server with Docker & PM2</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>Monitoring:</strong> New Relic APM + Winston logs</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>SSL/TLS:</strong> Let's Encrypt certificates</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>Backup Strategy:</strong> Automated database & file backups</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>Error Tracking:</strong> Comprehensive logging & alerting</span></li>
            <li className="flex gap-2"><span className="text-yellow-600">→</span> <span className="text-gray-700"><strong>Health Checks:</strong> Automated server & service monitoring</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
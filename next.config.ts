import type { NextConfig } from "next";

const securityHeaders = [
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async headers() {
        return [
            { source: '/(.*)', headers: securityHeaders },
            {
                source: '/:path*\\.(svg|jpg|png|webp|avif)',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
        ];
    },
    poweredByHeader: false,
    typescript: { ignoreBuildErrors: true },
};

export default nextConfig;

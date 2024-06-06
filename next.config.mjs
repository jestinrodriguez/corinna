/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wordpress-1277456-4618438.cloudwaysapps.com'
            }
        ]
    }
};

export default nextConfig;

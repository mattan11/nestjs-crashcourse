/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        PORT: process.env.PORT,
        NEXT_PUBLIC_NESTJS_SERVER_URL: process.env.NEXT_PUBLIC_NESTJS_SERVER_URL
    }
}

module.exports = nextConfig

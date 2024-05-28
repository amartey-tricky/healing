const appId = process.env.UPLOADTHING_APP_ID

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        // pathname: "/a/appId/*"
      }
    ]
  }
};

export default nextConfig;

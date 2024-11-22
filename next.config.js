/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.postimg.cc",
      "blog.gojek.io",
      "127.0.0.1:8000",
      "resource.candidatecollegeind.com",
    ],
    unoptimized: true,
  },
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: "/:slug(api|uploads)/:path*",
        destination: "https://weekly-report.candidatecollege.org/:slug/:path*",
        has: [{ type: "header", key: "x-appname-key", value: "weekly-report" }],
      },
      {
        source: "/:slug(api|uploads)/:path*",
        destination: "https://candidatecollege.org/:slug/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

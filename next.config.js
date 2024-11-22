/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    domains: ["resource.candidatecollegeind.com", "i.postimg.cc"],
=======
    domains: [
      "i.postimg.cc",
      "blog.gojek.io",
      "127.0.0.1:8000",
      "resource.candidatecollegeind.com",
    ],
>>>>>>> 24e0ed8 (mentoring)
    unoptimized: true,
  },
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: "/:slug(api|uploads)/:path*",
<<<<<<< HEAD
        // destination: "https://cors-proxy-infinityfree.vercel.app/:slug/:path*",
        destination: "https://weekly-report.candidatecollege.org/:slug/:path*",
      },
      {
        source: "/:slug(uploads)/:path*",
        destination: "https://cors-proxy-infinityfree.vercel.app/:slug/:path*",
        // destination:
        //   "https://weekly-report-api.candidatecollege.org/:slug/:path*",
=======
        destination: "https://weekly-report.candidatecollege.org/:slug/:path*",
        has: [{ type: "header", key: "x-appname-key", value: "weekly-report" }],
      },
      {
        source: "/:slug(api|uploads)/:path*",
        destination: "https://candidatecollege.org/:slug/:path*",
>>>>>>> 24e0ed8 (mentoring)
      },
    ];
  },
};

module.exports = nextConfig;

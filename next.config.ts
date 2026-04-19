import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/investor-questionnaire",
        destination: "https://portal.rebeldividends.com/apply",
        permanent: false,
      },
      {
        source: "/sophisticated-investor-questionnaire",
        destination: "https://portal.rebeldividends.com/apply",
        permanent: false,
      },
      {
        source: "/update",
        destination: "/updates",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

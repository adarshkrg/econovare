import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rooftop-solar",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-street-lighting",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-water-pump",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-cooking",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-high-mast-light",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-roi-calculator",
        destination: "/geothermal",
        permanent: true,
      },
      {
        source: "/solar-sizing-calculator",
        destination: "/geothermal",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schemes",
        destination: "/offerings",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/offerings",
        permanent: true,
      },
      {
        source: "/pm-surya-ghar-odisha",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/pm-kusum-odisha",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/solar-company-odisha",
        destination: "/",
        permanent: true,
      },
      {
        source: "/rooftop-solar-bhubaneswar",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/rooftop-solar-cuttack",
        destination: "/offerings#renewable-energy",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.ikea.com",
      "picsum.photos",
      "daisyui.com",
      "img.daisyui.com",
      "images.unsplash.com",
      "fastly.picsum.photos",
    ], // Burada kullanacağınız resmin bulunduğu domain'i ekliyoruz
  },
  reactStrictMode: false,
};

export default nextConfig;

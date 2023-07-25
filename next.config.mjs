// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
import million from 'million/compiler';

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  esmExternals: false, // THIS IS THE FLAG THAT MATTERSs

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default million.next(config);

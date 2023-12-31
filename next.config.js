// next.config.js
// const path = require("path")
const withPWAInit = require("next-pwa");

const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
    // your other config...
    dest:"public",
    skipWaiting:true,
    register:true,
    buildExcludes: ["app-build-manifest.json"]
});

/** @type {import("next").NextConfig} */
const nextConfig = {
    // // your other config...
    // experimental: {
    //     appDir: true,             // <---- Comment and Uncomment this
    //   },
    // webpack(config) {
    //     const registerJs = path.join(path.dirname(require.resolve("next-pwa")), "register.js");
    //     const entry = config.entry;

    //     config.entry = () =>
    //         entry().then((entries) => {
    //             // Automatically registers the SW and enables certain `next-pwa` features in 
    //             // App Router (https://github.com/shadowwalker/next-pwa/pull/427)
    //             if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
    //                 if (Array.isArray(entries["main-app"])) {
    //                     entries["main-app"].unshift(registerJs);
    //                 } else if (typeof entries["main-app"] === "string") {
    //                     entries["main-app"] = [registerJs, entries["main-app"]];
    //                 }
    //             }
    //             return entries;
    //         });

    //     return config;
    // },
}

module.exports = withPWA({});
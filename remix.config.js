/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  tailwind: true,
  postcss: true,
  serverDependenciesToBundle: [
    "@shopify/polaris",
    "@shopify/polaris-icons",
    "lucide-react",
    "recharts",
    /^@shopify\/.*/,
    /^\.\.\/src\/components\/.*/,
    /^\.\.\/src\/context\/.*/,
  ],
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  }
};
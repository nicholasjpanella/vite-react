import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const envDir = resolve(__dirname);
  const envPrefix = "REACT_APP_";
  const envRewrite = Object.entries(loadEnv(mode, envDir, envPrefix)).reduce(
    (prev, [key, value]) => ({ ...prev, [key]: value }),
    {}
  );

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@src": resolve(__dirname, "src"),
      },
    },

    root: "src",
    envDir,
    envPrefix,
    define: {
      ...envRewrite,
    },

    build: {
      sourcemap: mode !== "production",
      emptyOutDir: true,
    },

    server: {
      strictPort: true,
      port: 3000,
      open: true,
    },
  };
});

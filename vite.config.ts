import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Due to docker configuration, we need to specify the host
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
} satisfies UserConfig); // Explicitly specify the type of the config, not necessary but good practice

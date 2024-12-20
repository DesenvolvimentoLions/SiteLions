import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    // base: "/newLions/",
    build: {
        rollupOptions: {
            plugins: [visualizer()],
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"], // Divida bibliotecas grandes em chunks separados
                },
            },
        },
    },
});


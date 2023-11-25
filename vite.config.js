/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: '/test/setup.js',
        css: true,
        coverage: {
            reportsDirectory: './test/coverage',
            reporter: ['text', 'html']
        }
    },
    build: {
        outDir: 'dist/app'
    }
});

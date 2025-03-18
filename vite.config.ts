import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPath(), tailwindcss()],
	base: '/neo-todo/',
	build: {
		outDir: 'build',
		emptyOutDir: true,
	},
});

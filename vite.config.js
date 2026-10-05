import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const gridlyLegalRoutes = {
	'/gridly/support': '/gridly/support/index.html',
	'/gridly/support/': '/gridly/support/index.html',
	'/gridly/privacy': '/gridly/privacy/index.html',
	'/gridly/privacy/': '/gridly/privacy/index.html',
	'/gridly/terms': '/gridly/terms/index.html',
	'/gridly/terms/': '/gridly/terms/index.html',
};

export default defineConfig({
	plugins: [
		react(),
		{
			name: 'gridly-legal-pages',
			configureServer(server) {
				server.middlewares.use((req, _res, next) => {
					const url = req.url?.split('?')[0];
					if (url && gridlyLegalRoutes[url]) {
						req.url = gridlyLegalRoutes[url];
					}
					next();
				});
			},
		},
		{
			name: 'spa-github-pages-fallback',
			closeBundle() {
				const indexPath = path.resolve(__dirname, 'dist/index.html');
				const notFoundPath = path.resolve(__dirname, 'dist/404.html');
				if (fs.existsSync(indexPath)) {
					fs.copyFileSync(indexPath, notFoundPath);
				}
			},
		},
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@atoms': path.resolve(__dirname, './src/atoms'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},
	server: {
		port: 3000,
		open: true,
	},
});

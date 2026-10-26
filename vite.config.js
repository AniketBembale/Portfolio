import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites the app is served from
// https://<user>.github.io/<repo>/ so Vite needs the repo name as base.
// If you deploy to a user site (repo named <user>.github.io), set base to '/'.
const repoName = 'Portfolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})

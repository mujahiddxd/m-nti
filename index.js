// Entry point for Hostinger's Node.js hosting.
// Dynamic import so this works even though the root package.json is CommonJS.
import('./backend/dist/index.js').catch((err) => {
  console.error('Failed to start backend:', err);
  process.exit(1);
});

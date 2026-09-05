const fs = require('fs');
const http = require('http');
const path = require('path');

try {
  const dotenv = require('dotenv');
  if (fs.existsSync(path.resolve(__dirname, '.env'))) {
    dotenv.config({ path: path.resolve(__dirname, '.env') });
  } else if (fs.existsSync(path.resolve(__dirname, 'backend/.env'))) {
    dotenv.config({ path: path.resolve(__dirname, 'backend/.env') });
  }
} catch (e) {
  // dotenv might not be available or needed
}

try {
  // Try to load the backend
  import('./backend/dist/index.js').catch((err) => {
    fs.writeFileSync('crash.log', 'Async Import Error: ' + (err.stack || err.toString()));
    process.exit(1);
  });
} catch (err) {
  fs.writeFileSync('crash.log', 'Sync Error: ' + (err.stack || err.toString()));
  process.exit(1);
}

// Write a file so we know this ran at all
fs.writeFileSync('started.log', 'Index.js executed at ' + new Date().toISOString());

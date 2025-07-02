import express from 'express';
import process from 'node:process';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const distDir = path.join(__dirname, 'dist');

app.use(cors());

app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.type('text/javascript');
  }
  next();
});
app.use(express.static(distDir, { dotfiles: 'allow'}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving ${distDir} on http://localhost:${port}`);
}); 
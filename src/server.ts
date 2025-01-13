// src/server.ts
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the parent directory of 'dist' (project root)
app.use(express.static(path.join(__dirname, '..')));

// Optional: Serve index.html explicitly on root route
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

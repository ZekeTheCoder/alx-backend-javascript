import express from 'express';
import controllerRoutes from './routes/index';

const app = express();
const port = 1245;

controllerRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

export default app;

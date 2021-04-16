import express, {Request, Response, NextFunction, response} from 'express';
import todoRoutes from './routes/todos';

const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ message: err.message });
})
app.use('/todos', todoRoutes);
app.listen(3000);

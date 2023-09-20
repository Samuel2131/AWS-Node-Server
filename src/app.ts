
import { config } from 'dotenv-flow';
config({ silent: true });

import express, { Response, json } from 'express';
import v1 from './routers/user';

const app = express()
app.use(json());
app.use(v1);

app.get("/status", (_, res: Response) => res.status(200).json({message: "Server on!"}));

app.listen(5000, () => console.log("Server is runningon port 5000"));

export default app;

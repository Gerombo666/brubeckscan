import express from "express";
import morgan from "morgan";
import { Router } from "./routers";
import { Request, Response, NextFunction } from "express";
import { send } from "./utils/sender";

const app = express();

// Logger
app.use(morgan("dev"));

// Router
app.use("/api", Router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    send(res, null, err);
})

export default app;
import express from "express";
import { caching } from "./middleware/cache.control.middleware.js";
import { middleWares } from "./middleware/index.middleware.js";
import indexRouter from "./index.routes.js";
const app = express();

middleWares(app, [express.json(), caching]);

app.use("/api", indexRouter);

app.listen(3000, () => console.log("Prisma started..."));

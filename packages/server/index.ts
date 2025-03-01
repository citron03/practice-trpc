import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const t = initTRPC.create();
const appRouter = t.router({
  hello: t.procedure.query(() => "Hello, tRPC! 😎"),
});

const app = express();
app.use(cors());
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000"));

export type AppRouter = typeof appRouter;

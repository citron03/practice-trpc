import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { db } from "./db";
import { z } from "zod"; // ✅ Zod 임포트

const t = initTRPC.create();

const appRouter = t.router({
  hello: t.procedure.query(() => "Hello, tRPC! 😎"),

  addMessage: t.procedure
    .input(z.string()) // ✅ Zod 스키마 사용
    .mutation(({ input }) => {
      const stmt = db.prepare("INSERT INTO messages (text) VALUES (?)");
      stmt.run(input);
      return { success: true };
    }),

  getMessages: t.procedure.query(() => {
    const stmt = db.prepare("SELECT * FROM messages");
    return stmt.all();
  }),
});

const app = express();
app.use(cors());
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000"));

export type AppRouter = typeof appRouter;

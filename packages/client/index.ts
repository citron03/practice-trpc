import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({ url: "http://localhost:4000/trpc" }),
  ],
});

async function main() {
  const result = await trpc.hello.query();
  console.log("📡 Server Response:", result);
}

main();

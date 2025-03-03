import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({ url: "http://localhost:4000/trpc" }),
  ],
});

async function main() {
  // 메시지 추가
  await trpc.addMessage.mutate("안녕, SQLite!");

  // 메시지 조회
  const messages = await trpc.getMessages.query();
  console.log("📡 저장된 메시지:", messages);
}

main();

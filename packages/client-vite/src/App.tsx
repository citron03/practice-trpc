import './App.css'
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/index";
import { useEffect, useState } from 'react';

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

  return messages;
}

function App() {
  const [messages, setMessages] = useState<Awaited<ReturnType<typeof main>>>();
  useEffect(() => {
    main().then(() => {
      trpc.getMessages.query().then((messages) => {
        setMessages(messages);
      });
    });
  }, []);
  
  return (
    <div>
      <p>서버 연결 테스트</p>
      {messages?.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  )
}

export default App

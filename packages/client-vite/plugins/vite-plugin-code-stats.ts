import { Plugin } from "vite";

export default function vitePluginCodeStats(): Plugin {
  return {
    name: "vite-plugin-code-stats",

    transform(code, id) {
      if (id.includes("node_modules")) return; // 외부 라이브러리는 분석 X

      // 코드에서 함수 개수, 변수 개수, export 개수 찾기
      const functionCount = (code.match(/\bfunction\b/g) || []).length;
      const constCount = (code.match(/\bconst\b/g) || []).length;
      const letCount = (code.match(/\blet\b/g) || []).length;
      const exportCount = (code.match(/\bexport\s+(const|function|class|let|var|default)\b/g) || []).length;
      const logCount = (code.match(/\bconsole\.log\b/g) || []).length;

      console.log(`%c📊 [Code Stats] ${id}`, "color: cyan; font-weight: bold;");
      console.log(`%c📌 Functions: ${functionCount}`, "color: lightgreen;");
      console.log(`%c📌 const: ${constCount} | let: ${letCount}`, "color: orange;");
      console.log(`%c📌 Exports: ${exportCount}`, "color: yellow;");
      console.log(`%c📌 console.log: ${logCount}`, "color: gray;");
      console.log("%c---------------------------------", "color: cyan;");

      return code;
    },
  };
}

import { Plugin } from "vite";

export default function vitePluginTrolling(): Plugin {
  return {
    name: "vite-plugin-trolling",

    buildStart() {
      const messages = [
        "Unexpected token ';' but it's actually fine.",
        "Vite is now self-aware. Beware.",
        "Your code is perfect... or is it?",
        "Your build is 99% done... oh wait, just kidding.",
        "Everything is working fine... until it's not.",
      ];
      console.log("🤡 " + messages[Math.floor(Math.random() * messages.length)]);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(code, _id) {
      // 가끔 console.log("debug")를 console.warn으로 바꿔버리기
      if (Math.random() < 0.2) {
        return code.replace(/console\.log\(["'`]debug["'`]\)/g, `console.warn("You really need to debug this?")`);
      }
    },

    transformIndexHtml(html) {
      // 5% 확률로 페이지 CSS를 살짝 꼬아버리기
      if (Math.random() < 0.05) {
        return html.replace(
          "</head>",
          `<style>
            body { transform: scaleX(-1); } /* 좌우 반전 */
            * { font-family: "Comic Sans MS", cursive, sans-serif !important; } /* 진정한 공포 */
          </style></head>`
        );
      }
      return html;
    },
  };
}

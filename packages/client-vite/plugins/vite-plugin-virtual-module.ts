import { Plugin } from 'vite';

export default function vitePluginVirtualModule(): Plugin {
  return {
    name: "vite-plugin-virtual-module",
    resolveId(id: string) {
      if (id === "virtual:hello") {
        return id; // 가상 모듈로 처리
      }
    },
    load(id: string) {
      if (id === "virtual:hello") {
        return `export default '이것은 vite에서 처리한 가짜 모듈 String';`;
      }
    },
  };
}
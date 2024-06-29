import { defineLoader } from "vitepress";

export interface Data {
  // data 类型
}

declare const data: Data;
export { data };

export default defineLoader({
  // 类型检查加载器选项
  // watch: ['...'],
  // async load(): Promise<Data> {
  //   // ...
  // }
  load() {
    return {
      hello: "world",
    };
  },
});

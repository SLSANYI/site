import { ReadTimeResults } from "reading-time";

export interface Data {
  // 页面的映射 URL，如 /posts/hello.html（不包括 base）
  // 手动迭代或使用自定义 `transform` 来标准化路径
  url: string;
  // 页面的 frontmatter 数据
  frontmatter: Record<string, any>;

  // 只有启用了相关选项，才会出现以下内容
  // 我们将在下面讨论它们
  src: string | undefined;
  html: string | undefined;
  excerpt: string | undefined;

  readTime?: string;
}

export const config = {
  2024: {},
};

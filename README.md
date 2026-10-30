# Leo 的技术笔记

个人博客：https://myleo-chen.top

使用 Astro 构建，GitHub Pages 自动发布，无需后端和数据库。

## 本地开发

```bash
npm ci
npm run dev
```

## 写文章

在 `src/posts/` 新建 Markdown，例如 `my-first-post.md`：

```yaml
---
title: "文章标题"
description: "一句话介绍"
date: "2026-10-30"
tags: ["后端", "AI"]
draft: false
---
```

下面直接写 Markdown 正文。设置 `draft: true` 可隐藏草稿；公开仓库中的草稿源码仍公开，不要存放私密信息。图片放在 `public/images/`，正文使用 `/images/文件名` 引用。

```bash
npm run build
git add .
git commit -m "新增文章"
git push
```

推送 main 后 GitHub Actions 自动发布。域名在仓库 Settings → Pages 中配置。

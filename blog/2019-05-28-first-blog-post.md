---
slug: ai-core-docs-launch
title: AI Core Docs 文档体系正式上线
authors: [zweixin798]
tags: [changelog]
---

我们正式上线了 **AI Core Docs** —— 一套为大模型 / AI 产品打造的现代化文档体系，包括：

- 用户指南（Docs）
- 开发者 API 参考（API）
- 更新日志与运营内容（Blog）

文档站点基于 **Docusaurus v3 + Tailwind CSS + OpenAPI** 搭建，完全遵循 **Docs-as-Code** 思路，所有内容都通过 Git + Pull Request 管理。

## 为什么要重做文档体系？

- **大模型产品节奏快**：能力更新频繁，传统 wiki 很难保持“最新可信”。
- **开发者期望更高**：需要清晰的 API 参考、示例代码和最佳实践，而不仅是零散说明。
- **团队协作需要审计**：变更记录、评审流程、回滚能力都需要基于代码化管理。

因此我们选择：

- 用 **Docusaurus v3** 做文档框架；
- 用 **Tailwind CSS** 做 UI 组件和布局；
- 用 **OpenAPI** 自动生成 API 参考；
- 用 **GitHub Pages** 做静态部署。

## 文档站点结构一览

- `/docs`：用户指南与产品手册  
  - Quickstart（快速开始）
  - Concepts（核心概念：RAG / Prompt Engineering 等）
  - FAQ（常见问题与排错）
- `/api`：基于 `openapi.yaml` 生成的三栏 API 参考  
  - 左侧导航（按 Tag 分组）
  - 中间参数与响应说明
  - 右侧请求代码示例
- `/blog`：更新日志与运营内容  
  - `Changelog` 标签用于记录版本演进
  - 后续会加入使用案例、最佳实践文章

## Docs-as-Code 工作流

- 文档内容全部存放在仓库中：
  - `docs/`：MDX 文档
  - `blog/`：博客与更新日志
  - `openapi.yaml`：API 描述
- 通过 Pull Request 进行评审：
  - 文档改动与代码改动走同一套流程
  - 支持 review、comment、变更记录与回滚
- 部署自动化：
  - 本地：`npm run start`
  - 预览：`npm run build && npm run serve`
  - 线上：`npm run deploy`

## 接下来我们会做什么？

- 补充完整的 **Quickstart** 与 **RAG / Prompt Engineering 指南**
- 基于真实后端 OpenAPI 替换当前 Mock `openapi.yaml`
- 输出更多贴合业务的 **案例文章** 和 **最佳实践**

欢迎你把任何文档改进建议以 Issue 或 PR 的形式提交给我们。  
这份文档站点本身，也会持续迭代。  
---
slug: gpt-4o-release-notes
title: GPT-4o 模型上线更新日志
authors: [zweixin798]
tags: [changelog]
---

我们已在 **AI Core** 平台正式上线 **GPT-4o** 系列模型，并同步增强了多模态与函数调用体验。

<!-- truncate -->

## 新增能力

- **更强的对话质量**：在长上下文下的指令遵循与表达更稳定。
- **更顺滑的工具调用**：函数调用（tool calls）输出更结构化，更适合与工作流编排结合。
- **更友好的工程集成**：API 兼容 `POST /v1/chat/completions`，更易迁移与替换。

## 兼容性说明

- **API 路径**：保持 `/v1/chat/completions`。
- **参数**：`messages`、`temperature`、`max_tokens` 等保持一致；新增/增强 `tools` 与 `tool_choice` 的使用体验。
- **响应**：在触发工具调用时，`finish_reason` 可能为 `tool_calls`，并返回 `tool_calls` 结构。

## 建议升级方式

1. 先在灰度环境切换 `model` 为 `gpt-4o` 或 `gpt-4o-mini`。
2. 对关键任务启用 **结构化输出**（JSON Schema）并添加校验。
3. 若你使用 RAG，请同时监控“检索命中率”和“引用一致性”，避免高召回但低相关导致误答。

## 下一步

- 我们会在后续版本补齐更多 SDK 示例与最佳实践（Prompt 规范、工具调用模式、RAG 评测方法）。


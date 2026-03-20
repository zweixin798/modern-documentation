import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    "index",
    {
      type: "doc",
      id: "ai-core-api",
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "doc",
          id: "create-chat-completion",
          label: "Create a chat completion",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar;

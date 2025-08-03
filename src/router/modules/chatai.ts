import { chatai } from "@/router/enums";

export default {
  path: "/words",
  redirect: "/chatai/index",
  meta: {
    icon: "streamline-freehand:notes-book",
    title: "Word Book",
    rank: chatai
  },
  children: [
    {
      path: "/chatai/index",
      name: "wordbook",
      component: () => import("@/views/word-book/index.vue"),
      meta: {
        title: "Word Book"
        // extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;

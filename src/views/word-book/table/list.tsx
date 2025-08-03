import MultipleChoice from "./multipleChoice.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/table/base/${val}.vue`;

export const list = [
  {
    key: "multipleChoice",
    content: rendContent("multipleChoice"),
    title: "多选",
    component: MultipleChoice
  }
];

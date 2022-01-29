import { defineStore } from "pinia";
import colors from "tailwindcss/colors";
export const useStore = defineStore("tagColor", {
  state: () => ({
    tagColor: colors.blue[500],
  }),
});

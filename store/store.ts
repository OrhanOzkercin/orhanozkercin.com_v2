import { defineStore } from "pinia";
import colors from "tailwindcss/colors";
export const useStore = defineStore("tagColor", {
  state: () => ({
    tagFontSize: "1.3rem",
    tagColor: colors.zinc[800],
  }),
});

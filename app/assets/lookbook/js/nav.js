import morph from "./utils/morph";

export default function nav() {
  const nav = Alpine.store("nav");
  return {
    clearFilter() {
      nav.filter = "";
    },
    updateMenu(event) {
      const menu = document.getElementById("menu");
      this.$refs.menu.style.height = `${this.$refs.menu.offsetHeight}px`;
      morph(menu, event.detail.doc.querySelector("#menu"));
      Promise.resolve().then(() => {
        this.$refs.menu.style.height = "auto";
      });
    },
  };
}

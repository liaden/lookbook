import morph from "./utils/morph";

export default function nav() {
  return {
    clearFilter() {
      this.$store.nav.filter = "";
    },
    init() {
      this.$watch("$store.nav.filter", (value) => {
        const nav = this.$store.nav;
        nav.filterText = value.replace(/\s/g, "").toLowerCase();
        nav.filtered = nav.filterText.length > 0;
      });
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

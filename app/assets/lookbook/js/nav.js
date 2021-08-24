import morph from "./utils/morph";

export default function () {
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
        this.$dispatch("menu:updated");
      });
      // menu.innerHTML = event.detail.doc.querySelector("#menu").innerHTML;
    },
    // initMenu() {
    //   console.log("init");
    // },
    navigate($event) {
      history.pushState({}, null, $event.currentTarget.href);
      this.$dispatch("popstate");
    },
  };
}

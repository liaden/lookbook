export default function navItem({ matchers }) {
  return {
    path: "",
    hidden: false,
    active: false,
    matchers: matchers || [],
    get id() {
      return this.$el.id;
    },
    updateHidden() {
      const nav = this.$store.nav;
      if (nav.filtered) {
        const matched = this.matchers.filter((m) => m.includes(nav.filterText));
        this.hidden = !matched.length;
      } else {
        this.hidden = false;
      }
      this.$dispatch("nav:filtered");
    },
    navigate() {
      history.pushState({}, null, this.path);
      this.$dispatch("popstate");
    },
    setActive() {
      this.active = window.location.pathname === this.path;
    },
  };
}

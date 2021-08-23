export default function navItem() {
  const nav = Alpine.store("nav");
  return {
    path: "",
    hidden: false,
    get id() {
      return this.$el.id;
    },
    get active() {
      return window.location.pathname === this.path;
    },
    updateHidden(matchString) {
      const cleanFilter = nav.filter.replace(/\s/g, "").toLowerCase();
      if (cleanFilter === "") {
        this.hidden = false;
      } else {
        this.hidden = !matchString.includes(cleanFilter);
      }
      this.$dispatch("nav:filtered");
    },
    navigate() {
      history.pushState({}, null, this.path);
      this.$dispatch("popstate");
    },
  };
}

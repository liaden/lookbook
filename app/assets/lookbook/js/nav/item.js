export default function navItem() {
  const nav = Alpine.store("nav");
  return {
    path: "",
    hidden: false,
    active: false,
    get id() {
      return this.$el.id;
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
    setActive() {
      this.active = window.location.pathname === this.path;
    },
  };
}

export default function navGroup() {
  const nav = Alpine.store("nav");
  return {
    visibleChildren: [],
    get id() {
      return this.$el.id;
    },
    get open() {
      return !!nav.open[this.id];
    },
    get hidden() {
      return this.visibleChildren.length === 0;
    },
    toggle() {
      nav.open[this.id] = !nav.open[this.id];
    },
    updateHidden() {
      setTimeout(() => {
        this.visibleChildren = this.$refs.items.querySelectorAll(
          ":scope > li:not(.hidden)"
        );
      }, 0);
    },
  };
}

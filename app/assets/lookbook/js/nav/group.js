export default function navGroup() {
  return {
    visibleChildren: [],
    get id() {
      return this.$el.id;
    },
    get open() {
      const nav = this.$store.nav;
      if (nav.filtered && nav.open[this.id] === undefined) {
        return true;
      }
      return !!this.$store.nav.open[this.id];
    },
    get hidden() {
      return this.visibleChildren.length === 0;
    },
    toggle() {
      this.$store.nav.open[this.id] = !this.$store.nav.open[this.id];
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

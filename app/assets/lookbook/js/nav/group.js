export default function navGroup() {
  return {
    id: null,
    hidden: true,
    open: true,
    children: [],
    init() {
      this.id = this.$el.id;
      this.open = !!this.$store.nav.open[this.id];
    },
    getChildren() {
      if (this.$refs.items) {
        return Array.from(
          this.$refs.items.querySelectorAll(":scope > ul > li")
        );
      }
      return [];
    },
    filter(text) {
      this.hidden = true;
      this.getChildren().forEach((child) => {
        const data = child._x_dataStack[0];
        data.filter(text);
        if (!data.hidden) {
          this.hidden = false;
        }
      });
    },
    toggle() {
      this.open = !this.open;
    },
  };
}

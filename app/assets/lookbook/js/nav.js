export default function nav() {
  const nav = Alpine.store("nav");
  return {
    setScrollPosition() {
      setTimeout(() => {
        this.$el.scrollTop = nav.scrollTop;
      }, 30);
    },
    saveScrollPosition($event) {
      nav.scrollTop = $event.currentTarget.scrollTop;
    },
    clearFilter() {
      nav.filter = "";
    },
  };
}

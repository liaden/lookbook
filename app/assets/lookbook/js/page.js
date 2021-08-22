export default function page() {
  const page = Alpine.store("page");
  return {
    splitProps: {
      minSize: 200,
      onDrag(splits) {
        this.$store.nav.width = Math.min(splits[0], 500);
      },
    },
    async fetchHTML() {
      const response = await fetch(window.document.location);
      if (!response.ok) return window.location.reload();
      const html = await response.text();
      page.doc = new DOMParser().parseFromString(html, "text/html");
      return page.doc;
    },
    updateTitle() {
      document.title = page.doc.title;
    },
    render() {
      this.$el.innerHTML = page.doc.getElementById(this.$el.id).innerHTML;
    },
  };
}

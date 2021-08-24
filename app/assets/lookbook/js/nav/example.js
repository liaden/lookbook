export default function navExample() {
  return {
    path: null,
    matchers: [],
    active: false,
    hidden: false,
    init() {
      this.root = this.$el;
    },
    // getMatchers(){

    // },
    filter(text) {
      if (text === "") {
        this.hidden = false;
      } else {
        const matched = this.matchers.filter((m) => m.includes(text));
        this.hidden = !matched.length;
      }
    },
  };
}

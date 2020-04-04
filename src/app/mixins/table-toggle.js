export default {
  data: () => ({
    showed: true
  }),
  methods: {
    handleTable(e) {
      let button = e.target.closest('button'),
        th = e.target.closest('th');
      this.showed = !(th && !button);
    }
  }
}
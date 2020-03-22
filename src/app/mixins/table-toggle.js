export default {
  data: () => ({
    showed: true
  }),
  methods: {
    handleTable(e) {
      let button = e.target.closest('button'),
        th = e.target.closest('th');
      if (th && !button) {
        this.hideTable();
      } else {
        this.showTable();
      }
    },
    hideTable() {
      this.showed = false;
    },
    showTable() {
      this.showed = true;
    }
  }
}
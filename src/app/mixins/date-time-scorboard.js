import moment from 'moment'
import { mapState } from 'vuex'
export default {
  computed: {
    startDateFormatted() {
      return moment(this.startDate).format('D/M/YY');
    },
    startTimeFormatted() {
      return moment(this.startDate).format('h:mm A');
    },
    ...mapState('scoreboard', ['startDate'])
  }
}
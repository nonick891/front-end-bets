import { mapState } from 'vuex'
import moment from 'moment'

const getMomentAdd = (startDate, minutes) => {
  return moment.utc(startDate).add(minutes, 'minutes')
};

const getStringTimer = seconds => {
  return moment(moment().format('YYYY-MM-DD'))
    .startOf('day')
    .seconds(seconds)
    .format('mm:ss')
};

export default {
  data: () => ({
    gameTimer: '00:00'
  }),
  computed: {
    ...mapState('scoreboard', ['timer', 'dateTimer']),
  },
  watch: {
    timer(value) {
      if (value.base && value.running && value.visible) {
        let timerId = null;
        timerId = setInterval(() => {
          let current = moment.utc(),
            endFH = getMomentAdd(this.dateTimer.startDate, 45),
            endSH = getMomentAdd(this.dateTimer.startDate, 105),
            endFirstSeconds = current.diff(endFH, 'seconds'),
            endSecondSeconds = current.diff(endSH, 'seconds'),
            finalSeconds = (45*60) + (
                endFirstSeconds < 0
                  ? endFirstSeconds
                  : endSecondSeconds
              );
          this.gameTimer = getStringTimer(finalSeconds);
          if (finalSeconds < 0) {
            this.gameTimer = 'Finished';
            clearInterval(timerId);
          }
        }, 1000);
      }
    }
  }
}
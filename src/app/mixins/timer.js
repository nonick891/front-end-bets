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

const getSeconds = (startDate, offsetMinutes) => {
  let current = moment.utc(),
      end = getMomentAdd(startDate, offsetMinutes);
   return current.diff(end, 'seconds');
};

const isHalfBreak = (startDate) => {
  let endFirst = getMomentAdd(startDate, 45),
      startSecond = getMomentAdd(startDate, 60);
      return moment.utc().isBetween(endFirst, startSecond);
};

export default {
  data: () => ({
    gameTimer: '00:00'
  }),
  computed: {
    ...mapState('scoreboard', ['timer', 'dateTimer', 'period']),
  },
  watch: {
    timer(value) {
      if (value.base && value.running && value.visible) {
        let timerId = null;
        timerId = setInterval(() => {
          if (isHalfBreak(this.dateTimer.startDate)) {
            this.gameTimer = 'Break';
            return false;
          }
          let firstHalfPassed = this.period === '1H' ? 0 : 45,
              endFirstSeconds = getSeconds(this.dateTimer.startDate, 45),
              endSecondSeconds = getSeconds(this.dateTimer.startDate, 105),
              finalSeconds = (45 + firstHalfPassed) * 60 + (
                endFirstSeconds < 0
                  ? endFirstSeconds
                  : endSecondSeconds
              );
          this.gameTimer = getStringTimer(finalSeconds);
          if (endSecondSeconds > 0 && endFirstSeconds > 0) {
            this.gameTimer = 'Finished';
            clearInterval(timerId);
          }
        }, 980);
      }
    }
  }
}
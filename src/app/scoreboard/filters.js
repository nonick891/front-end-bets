import { has, values } from 'lodash'

export const getScores = scoreboard => {
  let result = getScoreboardCounters(scoreboard);
  result.messages = values(scoreboard.messages);
  result.period = scoreboard.period;
  result.timer = scoreboard.timer;
  return result;
};

const getScoreboardCounters = scoreboard => {
  let result = {},
      keys = getKeyPairs();
  for (let key in keys) {
    if (!has(keys, key)) continue;
    let value = keys[key];
    result[key] = getPlayersCounter(scoreboard[value]);
  }
  return result;
};

export const getKeyPairs = () => ({
  corners: 'corners',
  redCards: 'redCards',
  yellowCards: 'yellowCards',
  penalties: 'penalties',
  score: 'scoreDetailed'
});

const getPlayersCounter = counter => ({
  player1: getLastCounter(counter.player1),
  player2: getLastCounter(counter.player2)
});

const getLastCounter = player => {
  let playerValues = values(player);
  return playerValues[playerValues.length - 1];
};
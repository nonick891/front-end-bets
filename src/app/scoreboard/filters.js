import { has, get, values } from 'lodash'

export const getScores = fixture => {
  let scoreboard = fixture.scoreboard,
      result = getScoreboardCounters(scoreboard);
  result.stage = fixture.stage;
  result.startDate = fixture.startDate;
  result.messages = values(get(scoreboard, 'messages', false));
  result.period = get(scoreboard, 'period', '');
  result.timer = get(scoreboard, 'timer', false);
  result.dateTimer = {
    startDate: get(fixture, 'startDate', false),
    cutOffDate: get(fixture, 'cutOffDate', false)
  };
  return result;
};

const getScoreboardCounters = scoreboard => {
  let result = {},
      keys = getKeyPairs();
  for (let key in keys) {
    if (!has(keys, key)) continue;
    let value = keys[key];
    result[key] = get(scoreboard, value, false);
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

/*
const getPlayersCounter = counter => ({
  player1: getLastCounter(counter.player1),
  player2: getLastCounter(counter.player2)
});

const getLastCounter = player => {
  let playerValues = values(player);
  return playerValues[playerValues.length - 1];
};*/

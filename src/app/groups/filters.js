import { set, has, trimEnd } from 'lodash';

export const sortByGroups = (games) => {
  let orderGames = {},
      groupIds = new Set();
  for (let i in games) {
    if (!has(games, i)) continue;
    let game = games[i],
        groups = game.grouping.detailed;
    for (let group of groups) {
      groupIds.add(group.group);
      setGamesStructure(orderGames, game, group);
    }
  }
  return { groupIds, orderGames };
};

const setGamesStructure = (orderGames, game, group) => {
  let chain = '';
  for (let line in group) {
    if (group[line] === 'Match Result') {
      console.log(group.name);
      console.log(game);
    }
    chain += group[line] + '.';
  }
  chain = trimEnd(chain, '.');
  set(orderGames, chain, game);
};
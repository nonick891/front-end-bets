import { has } from 'lodash';

/**
 * Get ordered games by group id
 * @param games
 * @returns {Object} ordered games
 */
export const sortByGroups = (games) => {
  let orderedGames = {};
  for (let i in games) {
    if (!has(games, i)) continue;
    let game = games[i],
        groups = game.grouping.detailed;
    for (let group of groups) {
      if (Array.isArray(orderedGames[group.group])) {
        orderedGames[group.group].push(game);
      } else {
        orderedGames[group.group] = [game];
      }
    }
  }
  return orderedGames;
};

export const getExistsGroups = (groupIds, groups) => {
  groups = groups.reduce(getGroupIdAsKey, {});
  return groupIds.map(id => groups[id]);
};

const getGroupIdAsKey = (array, value) => {
  array[value.id] = value;
  return array;
};
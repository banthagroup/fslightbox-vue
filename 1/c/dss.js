export function dss({loc,sawu,stageIndexes}){if(loc){sawu[stageIndexes.current]();return}for(let i in stageIndexes){var j=stageIndexes[i];if(j!==undefined){sawu[j]()}}}

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return [];
  
  return members
    .filter(member => typeof member === 'string')
    .map(member => {
      const adaptedMember = member.trim().toUpperCase();
      return adaptedMember[0];
    })
    .sort()
    .join('');
};

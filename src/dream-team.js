module.exports = function createDreamTeam(membersNames) {
  //throw 'Not implemented';
  return Array.isArray(membersNames)
    ? membersNames
        .filter(e => (typeof e == "string" ? true : false))
        .map(e => {
          e = e.toUpperCase();
          let i = 0;
          for (i; e[i] == " "; i++);
          return e[i];
        })
        .sort()
        .join("")
    : false;
};

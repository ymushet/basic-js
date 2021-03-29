module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) !== true) return false;
  let team = "";
  members.forEach((e) =>
    typeof e === "string" ? (team += e.replace(/\s/g, "").slice(0, 1)) : team
  );
  return team.toUpperCase().split("").sort().join("");
};

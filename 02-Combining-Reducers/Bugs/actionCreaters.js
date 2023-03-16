// These will help us in creating actions that we have to dispatch
const { bugAdded, bugRemoved, bugResolved } = require("./actionTypes");


// Eac function will return an action object
const addBug = (description) => ({ type: bugAdded, payload: { description } });
const removeBug = (id) => ({ type: bugRemoved, payload: { id } });
const resolveBug = (id) => ({ type: bugResolved, payload: { id } });

module.exports = {
  addBug,
  removeBug,
  resolveBug,
};

// These will help us in creating actions that we have to dispatch
const { featureAdded, featureRemoved} = require("./actionTypes");


// Each function will return an action object
const addFeature = (description) => ({ type: featureAdded, payload: { description } });
const removeFeature = (id) => ({ type: featureRemoved, payload: { id } });

module.exports = {
  addFeature,
  removeFeature,
};

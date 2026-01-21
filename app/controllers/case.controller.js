const Case = require("../models/case.model");

exports.createCase = async (req, res) => {
  res.json(await Case.create(req.body));
};

exports.updateCase = async (req, res) => {
  res.json(await Case.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

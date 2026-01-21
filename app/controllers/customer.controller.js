const Customer = require("../models/customer.model");

exports.getCustomers = async (req, res) => {
  res.json(await Customer.find());
};

exports.createCustomer = async (req, res) => {
  res.json(await Customer.create(req.body));
};

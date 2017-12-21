'use strict';
var url = require('url');
var Employer = require('./EmployerService');

module.exports.getEmployer = function getEmployer (req, res, next) {
    Employer.getEmployer (req.swagger.params, res, next);
};

module.exports.putEmployer = function putEmployer (req, res, next) {
    Employer.putEmployer (req.swagger.params, res, next);
};

module.exports.postEmployer = function postEmployer (req, res, next) {
    Employer.postEmployer (req.swagger.params, res, next);
};

module.exports.patchEmployer = function patchEmployer (req, res, next) {
    Employer.patchEmployer (req.swagger.params, res, next);
};


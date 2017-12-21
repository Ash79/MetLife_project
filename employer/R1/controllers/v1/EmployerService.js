'use strict';
  var EmployerFD = require('../../sampleData/v1/Employer.json');
  var EmployerData = EmployerFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getEmployer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(EmployerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, EmployerData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putEmployer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(EmployerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(EmployerData[Object.keys(EmployerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postEmployer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(EmployerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(EmployerData[Object.keys(EmployerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchEmployer = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(EmployerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(EmployerData[Object.keys(EmployerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



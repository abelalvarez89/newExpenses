'use strict';
var angular = require('angular');
require('angular-ui-bootstrap');
require('firebase');
require('angular-smart-table');


angular.module('Expenses', ['ui.bootstrap', 'smart-table'])
	.directive('myExpenses', require('./myExpenses.directive.js'))
	.directive('expensesHeader', require('./expensesHeader.directive.js'))
	.service('expensesService', require('./expenses.service.js'));
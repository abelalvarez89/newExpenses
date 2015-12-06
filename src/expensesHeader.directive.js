'use strict';

module.exports = function() {
	return {
		restrict: 'EA',
		template: require('./expensesHeader.html'),
		controller: require('./expensesHeader.controller.js'),
		controllerAs: 'vm',
		scope: {
			store: '=',
			date: '=',
			spent: '='
		},
		bindToController: true
	}


}
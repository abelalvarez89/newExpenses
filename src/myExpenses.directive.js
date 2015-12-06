'use strict';

module.exports = function() {
	return {
		restrict: 'EA',
		template: require('./myExpenses.html'),
		controller: require('./myExpenses.controller.js'),
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	}


}
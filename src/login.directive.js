'use strict';

module.exports = function() {
	return {
		restrict: 'EA',
		template: require('./login.html'),
		scope: {
			register: '='
		},
		controller: require('./login.controller.js'),
		controllerAs: 'vm',
		bindToController: true
	}
}
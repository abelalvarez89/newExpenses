module.exports = function() {
	return {
		restrict: 'EA',
		template: require('./test.html'),
		controller: require('./test.controller.js'),
		controllerAs: 'vm'
	}
}
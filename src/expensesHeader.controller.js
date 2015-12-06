'use strict'
// @ngInject
module.exports = function(expensesService, FIREBASE) {
	var vm = this;
	var ref = new Firebase(FIREBASE.serviceUrl);
	expensesService.authenticate(ref);
	getStores();

	function getStores() {
		expensesService.getFirebase(ref)
			.then(resolve, error);
	}

	function resolve(snapshot) {
		vm.storeList = snapshot.val().stores;
	}

	function error(errorObject) {
		console.log("The read failed: " + errorObject.code);
	};


}
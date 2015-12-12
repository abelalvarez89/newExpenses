'use strict';
// @ngInject
module.exports = function(expensesService, FIREBASE) {
	var vm = this;
	vm.submit = submit;
	var ref = new Firebase(FIREBASE.serviceUrl);
	setUp();

	function setUp() {
		vm.header = 'Login';
		if (vm.register) {
			vm.header = 'Register';
		}
	}
	//im here

	function submit(username, password, rememberMe) {
		alert(vm.username + "     " + vm.password);
		var ref2 = new Firebase(FIREBASE.serviceUrl + username);
		if (vm.register) {
			expensesService.getFirebase(ref2)
				.then(resolve, error);
		} else {
			expensesService.getFirebase(ref2)
				.then(loginResolve, loginError);
		}
	}

	function loginResolve(snapshot) {
		console.log("password: ");
		console.log(snapshot.val().password);
		for (var item in snapshot.val().password) {
			console.log('pass: ' + item.password);
			if (item.password === vm.password) {
				console.log("correct username and password");
			}
		}

	}

	function loginError(errorObject) {

	}

	function resolve(snapshot) {
		if (snapshot.val()) {
			vm.registerError = "Username already exists";
			return;
		}
		var postsRef = ref.child(vm.username).child('password');
		var newPostRef = postsRef.push();
		newPostRef.set({'password': vm.password});
	}

	function error(errorObject) {
		console.log(errorObject);
	}
}
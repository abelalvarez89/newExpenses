// @ngInject
module.exports = function($q, expensesService, FIREBASE) {
	var vm = this;
	vm.savePurchase = savePurchase;
	vm.removeItem = removeItem;
	var orignalExpensesList = [];
	var ref = new Firebase(FIREBASE.serviceUrl);

	getExpenses();

	function authenticate() {
		ref.authAnonymously(function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			}
		});
	};

	function removeItem(row) {

		var index = vm.getExpenses.indexOf(row);
		var deleteRow = orignalExpensesList[index];
		vm.totalSpent = vm.totalSpent - vm.getExpenses[index].spent;
		orignalExpensesList.splice(index, 1);
		vm.getExpenses.splice(index, 1);

		var ref2 = new Firebase(FIREBASE.serviceUrl + "expenses/" + deleteRow);
		var onComplete = function(error) {
			if (error) {
				console.log('Synchronization failed');
			}
		};
		ref2.remove(onComplete);
	}

	function savePurchase(store, date, spent) {
		var postsRef = ref.child("expenses");
		var newPostRef = postsRef.push();
		newPostRef.set({
			store: store,
			date: new Date(date).toString(),
			spent: spent
		});
		getExpenses();
	}

	function getExpenses() {
		vm.getExpenses = [];
		expensesService.getFirebase(ref)
			.then(resolveExpenses, errorExpenses);
	}

	function resolveExpenses(snapshot) {
		orignalExpensesList = [];
		var expensesList = snapshot.val().expenses;
		vm.totalSpent = 0;

		for (var row in expensesList) {
			orignalExpensesList.push(row);
			vm.totalSpent += expensesList[row].spent
			expensesList[row].date = new Date(expensesList[row].date)
			vm.getExpenses.push(expensesList[row]);
		}
	}

	function errorExpenses(errorObject) {
		console.log("The read failed: " + errorObject.code);
	};
}
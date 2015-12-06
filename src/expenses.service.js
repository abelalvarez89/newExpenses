'use strict'
// @ngInject
module.exports = function($q) {
	var self = this;
	self.authenticate = authenticate;
	self.getFirebase = getFirebase;

	function authenticate(ref) {
		return ref.authAnonymously(function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			}
		});
	};

	function getFirebase(ref) {
		return $q(function(ok, fail) {
			ref.on("value", ok, fail);
		});
	}
}
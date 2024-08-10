/*global QUnit*/

sap.ui.define([
	"form/project2/controller/simpleform.controller"
], function (Controller) {
	"use strict";

	QUnit.module("simpleform Controller");

	QUnit.test("I should test the simpleform controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

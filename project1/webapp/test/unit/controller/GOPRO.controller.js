/*global QUnit*/

sap.ui.define([
	"gopro_1/project1/controller/GOPRO.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GOPRO Controller");

	QUnit.test("I should test the GOPRO controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'router'], 
    
    function($, _, Backbone, Bootstrap, Router) {
		console.log('initialized');
		var initialize = function () {
			Router.initialize();
		};
		
		return {
			initialize: initialize
		};
	}
);
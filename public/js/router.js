/**
 * New node file
 */

define([
	'jquery',
    'underscore',
    'backbone',
    'models/Nodes'],
    function($, _, Backbone, Nodes) {
		
		var VisOrgRouter = Backbone.Router.extend({
		
			routes: {
				"newnode":	"new_node",
				"newedge":	"new_edge"
			},
	
			new_node: function() {
				console.log('you are trying to create a new node');
				$('#dialog').dialog('open');
			},
			
			new_edge: function() {
				console.log('you are trying to create a new edge');
			}
		});
		
		var initialize = function() {
			var visorg_router = new VisOrgRouter();
			console.log('initializing router');
			Backbone.history.start();
		};
		
		return {
			initialize: initialize
		};
	}
);


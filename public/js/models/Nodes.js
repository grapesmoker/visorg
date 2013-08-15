/**
 * New node file
 */

define([
    'jquery',
    'underscore', 
    'backbone'], 
    function($, _, Backbone) {
	
		console.log(_.range(10));
		
		var Node = Backbone.Model.extend({
			initialize: function() {
				console.log('Node initialized');
			},
			defaults: {
				name: 'Empty node',
				type: 'empty',
				edges: []
			}
		});
	
		var NodeSet = Backbone.Collection.extend({
			model: Node
		});
	
		var NodeView = Backbone.View.extend({
			render: function () {
				console.log(this);
			}
		});
	
		var Menu = Backbone.View.extend({
			el: '#new-node',
			
			events: {
				'click a#new-node': 'new_node'
			},
			
			new_node: function(e) {
				console.log(e);
			}
		});
	}
);


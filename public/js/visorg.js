/**
 * New node file
 */

window.VisOrg = Ember.Application.create();

VisOrg.Router.map(function() {
	this.resource('visorg', {path: '/'});
});

VisOrg.NodeRoute = Ember.Route.extend({
	model: function() {
		return VisOrg.Node.find();
	}
});
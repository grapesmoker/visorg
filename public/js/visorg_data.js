/**
 * New node file
 */

VisOrg.Node = DS.Model.extend({
	name: DS.attr('string'),
	type: DS.attr('string')
});

VisOrg.Store = DS.Store.extend({
	revision: 1,
	adapter: 'DS.FixtureAdapter'
});


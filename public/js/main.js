/**
 * New node file
 */

require.config({
	paths: {
		jquery: 'libs/jquery-2.0.2',
		jqueryui: 'libs/jquery-ui-1.10.0.custom',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		bootstrap: 'libs/bootstrap',
		sigma: 'libs/sigma.min'
	},

	shim: {
		/*'jqueryui': {
			export: '$.ui',
			deps: ['jquery']
		},*/
		'bootstrap': {
			deps: ['jquery']
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		
		'sigma': {
			exports: 'sigma'
		}
	}
});

require(['visorg', 'jquery', 'bootstrap', 'sigma', 'jqueryui'], function(visorg, $, Bootstrap, sigma) {
	console.log('visorg loaded');
	visorg.initialize();
	var sigRoot = document.getElementById('vis-canvas');
	var sigInst = sigma.init(sigRoot).drawingProperties({
		defaultLabelColor: '#fff',
	    defaultLabelSize: 14,
	    defaultLabelBGColor: '#fff',
	    defaultLabelHoverColor: '#000',
	    labelThreshold: 6,
	    defaultEdgeType: 'curve'
	  }).graphProperties({
	    minNodeSize: 0.5,
	    maxNodeSize: 5,
	    minEdgeSize: 1,
	    maxEdgeSize: 1
	  }).mouseProperties({
	    maxRatio: 4
	  });
	
	sigInst.addNode('hello', {
		label: 'Hello',
		color: '#0ff000'
	}).addNode('world', {
		label: 'World',
		color: '#00ff00'
	}).draw();
	
	$("#dialog").dialog({
		autoOpen: false
	});
});
network_story = {}; 

network_story.network = [ 
	{ 
		date: '1990', 
		title: "Build up to a murder", 
		text: "Southern Investigations, a detective agency, a theft, etc", 
		addNodes: [
			{ 
				title: "Southern Investigations", 
				name: 'southern_investigations',
				x: 100,
				y: 100
			},
			{ 
				title: "Daniel Morgan", 
				name: 'daniel_morgan',
				x: 300,
				y: 400
			}
		],
		addEdges: [
			{ 
				source: 'southern_investigations', 
				target: 'daniel_morgan'
			}
		]
	}
];

jsPlumb.ready(function() {
       
    // your jsPlumb related init code goes here
   jsPlumb.setContainer("#network");



   network_story.renderStep(0); 
});



network_story.renderStep = function(index){
	
	network_story.curren_step = index;  
	var step = network_story.network[index]; 

	//change the title 
	$('.step_title').html(step.title);
	
	//change the text
	$('.step_description').html(step.text);

	//add in any nodes
	$.each(step.addNodes, function(key,val){
		$("#network").append("<div class='"+val.name+" node'>"+val.title+"</div>");
		$("."+val.name).css({'left':val.x, 'top': val.y});
	});

	//add in any edges
	$.each(step.addEdges, function(key,val){
		jsPlumb.connect({ source:$("."+val.source), target: $("." + val.target) });

	});	
}																																																			




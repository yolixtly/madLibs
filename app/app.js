var app = angular.module('madLibs',['ngAnimate']);

app.controller('InputValidation', function(){
	


	//change gender 

	this.gender = "";

	this.changeGender = function(gender){
		this.gender = gender;
		console.log(this.gender);
	};
	//initial State of results section (hidden)
	this.resultMadLib = false;
	// If everything in the form is valid then show Results section
	this.displayMadLibs = function(){
		if(this.madInput.$valid){
		this.resultMadLib = true;
		}
	};

	this.startOver = function(){
		// Reset values of inputs when Restart the game
		this.name = "";
		this.jobTitle = "";
		this.tediousTask = "";
		this.dirtyTask = "";
		this.celebrity = "";
		this.uselessSkill = "";
		this.obnoxious = "";
		this.number = "";
		this.adjective = "";
		//Change views display:
		this.resultMadLib = false;
		//reset the entire form
		this.madInput.$setPristine(); 


	};
			

});


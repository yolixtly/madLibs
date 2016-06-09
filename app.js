var app = angular.module('madLibs',[]);

app.controller('InputValidation', function(){
	// initial values of inputs
	this.name = "Name";
	this.jobTitle = "Job Title";
	this.tediousTask = "Tedious task";
	this.dirtyTask = "Dirty Task";
	this.celebrity = "Celebrity";
	this.uselessSkill = "Useless Skills";
	this.obnoxious = "Obnoxious Celebrity";
	this.number = "Number";
	this.adjective = "Adjective";

	//change gender 

	this.gender = "";

	this.changeGender = function(gender){
		this.gender = gender;
		console.log(this.gender);
	};

	this.resultMadLib = false;
	this.displayMadLibs = function(){
		if(this.madInput.$valid){
		this.resultMadLib = true;
		}
	};

});


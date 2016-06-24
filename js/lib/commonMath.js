define(function(){
	var add = function(x, y){
		return x + y;
	};

	var sub = function(x, y){
		return Math.abs(x - y);
	};

	return {
		add : add,
		sub : sub,
	}
});


// define(['otherMoudle'], function(){
// 	var add = function(x, y){
// 		return x + otherMoudle.deal(y);
// 	};

// 	return {
// 		add : add,
// 	}
// });
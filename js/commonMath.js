define(function(){
	var add = function(x, y){
		return x + y;
	};

	return {
		add : add,
	}
});


define(['otherMoudle'], function(){
	var add = function(x, y){
		return x + otherMoudle.deal(y);
	};

	return {
		add : add,
	}
});
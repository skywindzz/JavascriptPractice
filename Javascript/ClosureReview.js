var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
callFriend()(123456); // first one execute the function which return callF as definition, the second() actually executes it.


/*
Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.
Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');
*/
var parafunc = function() {
	return 1 + 1;
}

var first = function(parafunc) {
	function onlyOnce(parafunc, n){
		n = 0;
       		for (var i = 0; i < n; n++) {		
			return parafunc();	
			
		}
	}
}

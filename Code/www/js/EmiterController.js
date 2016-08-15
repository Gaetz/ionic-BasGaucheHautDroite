var chat = app.controller('EmiterController', function($state, $stateParams, socket) {
		
	var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];
	
	var forwardCommand = "opealkvf,lndf:eraihpjzfb,dfsl"
	var backwardCommand = "jgerlàé(àéjelfdsg)thhdgfj)ç"
	var leftCommand = "tejrtuç!è!çè§sdgibgsgsàhdàfhdfh"
	var rightCommand = "lfgjbkjdsbflk&é)ç!§(ç!àè)"
	var catchCommand = "skazp@)hdfhé!hdfhèçhfdè(hsdf!ç§èé)"
	var stopCommand = "jhretjertj!(§ç!à)()hfghdezàé§èÒ"
		
	var self=this
		
	self.messages=[]
	
	socket.on('connect', function() {	
	  connected = true;
	  
		//socket.join('BasGaucheHatDroite');
		
		//Add user
	  socket.emit('add user', $stateParams.nickname);	
		

	  // Whenever the server emits 'new message', update the chat body
	  //socket.on('new message', function (data) {
	  //	if(data.message&&data.username)
	  //	{
	  // 		addMessageToList(data.username,true,data.message)
	  //	}
	  //});
		
	})
	
  //function called when user hits the send button
  self.sendUp = function() {
		socket.emit('new message', forwardCommand);
  }
	
  //function called when user hits the send button
  self.sendDown = function() {
		socket.emit('new message', backwardCommand);
  }
	
  //function called when user hits the send button
  self.sendLeft = function() {
		socket.emit('new message', leftCommand);
  }
	
  //function called when user hits the send button
  self.sendRight = function() {
		socket.emit('new message', rightCommand);
  }
	
  //function called when user hits the send button
  self.sendCatch = function() {
		socket.emit('new message', catchCommand);
  }
	
  //function called when user hits the send button
  self.sendStop = function() {
		socket.emit('new message', stopCommand);
  }
		
	self.quit = function() {
		$stateParams.nickname = "";
		$state.go('config')
	}

});
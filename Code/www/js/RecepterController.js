var chat = app.controller('RecepterController', function($state, $stateParams, socket, $scope) {
		
	var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];
	
		
	var self=this
	self.platform = ionic.Platform.platform();
	$scope.src = self.platform == 'android' ? '/android_asset/www/sound/' : 'sound/';
	
	self.order = "-- en attente --";


	var forward = new Howl({
	  urls: [$scope.src+'avant.m4a']
	});
	
	var backward = new Howl({
	  urls: [$scope.src+'arriere.m4a']
	});
	
	var left = new Howl({
	  urls: [$scope.src+'gauche.m4a']
	});
	
	var right = new Howl({
	  urls: [$scope.src+'droite.m4a']
	});
	
	var catchIt = new Howl({
	  urls: [$scope.src+'attrape.m4a']
	});
	
	var stopThere = new Howl({
	  urls: [$scope.src+'stop.m4a']
	});

	//var backward = new Media('sound/arriere.m4a');
	//var left = new Media('sound/gauche.m4a');
	//var right = new Media('sound/droite.m4a');
	//var catchIt = new Media('sound/attrape.m4a');
	//var stopThere = new Media('sound/stop.m4a');
	
	var forwardCommand = "opealkvf,lndf:eraihpjzfb,dfsl"
	var backwardCommand = "jgerlàé(àéjelfdsg)thhdgfj)ç"
	var leftCommand = "tejrtuç!è!çè§sdgibgsgsàhdàfhdfh"
	var rightCommand = "lfgjbkjdsbflk&é)ç!§(ç!àè)"
	var catchCommand = "skazp@)hdfhé!hdfhèçhfdè(hsdf!ç§èé)"
	var stopCommand = "jhretjertj!(§ç!à)()hfghdezàé§èÒ"
	
	self.messages=[]
	
	socket.on('connect', function() {	
	  connected = true;
	  
		//socket.join('BasGaucheHatDroite');
		
		//Add user
	  socket.emit('add user', $stateParams.nickname);	
		
		// Receive message
		socket.on('new message', function (data) {
	  	if(data.message && data.username)
	  	{
			  	addMessageToList(data.username, true, data.message);
			}
    });
		
	})
	
	// Display message by adding it to the message list
	function addMessageToList(username, style, message) {
		//var color = getUsernameColor(username);
		// Message is from an emiter
		//if(username.substring(12,13) == 1)
		//{
			// Emiter is in same team
			if(username.substring(10,12) == $stateParams.nickname.substring(10,12))
			{
				if(message == forwardCommand) {
						self.order = "Avant"
				    forward.play();
				} else if (message == backwardCommand) {
						self.order = "Arrière"
				    backward.play();
				} else if (message == leftCommand) {
						self.order = "Gauche"
				    left.play();
				} else if (message == rightCommand) {
						self.order = "Droite"
				    right.play();
				} else if (message == catchCommand) {
						self.order = "Attrape"
				    catchIt.play();
				} else if (message == stopCommand) {
						self.order = "Stop !"
				    stopThere.play();
				}
			}
			//}
		//self.messages.push({content:message, style:true, username:username, color:color})
	}
	
	//Generate color for the same user.
	function getUsernameColor(username) {
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
	}
		
	self.quit = function() {
		$stateParams.nickname = "";
		$state.go('config')
	}

});
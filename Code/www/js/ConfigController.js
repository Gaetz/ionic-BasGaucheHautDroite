app.controller('ConfigController', function($state) {

	this.clan=0;
	this.team=0;
	this.role=0;
	this.nickname="";	
	
	this.register = function register() {
		this.nickname="";	

		if(this.role == 1) {
			this.nickname = "helhlbsjor"+this.clan+this.team+this.role;
			$state.go('chat', {nickname:this.nickname})
		}
		else if(this.role == 2) {
			this.nickname = "ortjeldpat"+this.clan+this.team+this.role;
			$state.go('recepter', {nickname:this.nickname})
		}
	};
	
})

(function(){
	exports.TestWindow = function(controller) {
		
		var win = Titanium.UI.createWindow({
	    backgroundColor: 'white',
	    title: 'Window ' + Ti.App.Properties.getString('count')
		});
		
		var label = Titanium.UI.createLabel({
	    text: 'new page',
			color: "#000",
			top:40
		});
		
		label.addEventListener('click', function(){
			controller.open(new TestWindow(controller));		
		});
		
		var home = Titanium.UI.createLabel({
	   	text: 'back to home',
			color: "#000",
			top:90
		});
		
		home.addEventListener('click', function(){
			controller.home();	
		});
		
		win.add(label);
		win.add(home);
		
		return win;

	};
})();

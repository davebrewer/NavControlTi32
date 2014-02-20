// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.App.Properties.setString('count', 0);

//require the UI components necessary to drive the test
var NavigationController = require('NavigationController'),
		TestWindow = require('TestWindow').TestWindow;
		
	var controller = new NavigationController();
	controller.open(new TestWindow(controller));

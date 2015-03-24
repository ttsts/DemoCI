spec(function() {

	var queries = {
		ios: {
			tableView: { 'class': 'UITableView', 'index': 0 },
			button1: { 'class': 'UIButton', 'properties': { 'currentTitle': 'Button 1'} },
			label: { 'class': 'UILabel', 'properties': { 'tag': 1 } }
		},
		android: {
			sharedButtonsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Shared Buttons'} },
			button1: { 'class':'android.widget.Button', 'properties': { 'text': 'Button 1'} },
			textView: {'class':'android.widget.TextView', 'properties': { 'contentDescription':'Last button pressed'} }
		}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			],
			'android' : [
				android.launch('com.telerik.demoapplication'),
				android.wait(1000)
			]
		},
		'And is on the buttons demos': {
			'ios': [
				ios.scrollToRow(queries.ios.tableView, 0, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.ios.tableView, 0, 0)
			],
			'android' : [
				android.tap(queries.android.sharedButtonsButton),
				android.wait(1000)
			]
		},
		'When button 1 is tapped': {
			'ios': [
				ios.tap(queries.ios.button1)
			],
			'android' : [
				android.tap(queries.android.button1),
				android.wait(1000)
			]
		},
		'Then the label should update to Button Tapped: Button 1': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: Button 1");
				})
			],
			'android': [
				android.getPropertyValue(queries.android.textView, 'text', function(labelText) {
					assert(labelText).equals('Button Tapped: Button 1');
				}),
				android.wait(1000)
			]
		}
	};

	describe("Verify button automation functions correctly", function() {
		test("Button 1 should update label with Button Tapped: Button 1", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('When button 1 is tapped');
			step('Then the label should update to Button Tapped: Button 1');
		});
	}, stepRepository);

});


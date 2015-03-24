spec(function() {

	var stepRepository = {
		"Go to toolbar demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap({ 'class': 'UILabel', 'properties' : { 'text': 'UIToolbar' } })
			]
		},
		"Select each toolbar button": {
			'ios': [
				ios.tapSubviewAtIndex({ 'class': 'UIToolbar' }, 6),
				//ios.selectionItem.select({ 'class': 'UIToolbar' }, 5), // spacer
				ios.tapSubviewAtIndex({ 'class': 'UIToolbar' }, 4),
				//ios.selectionItem.select({ 'class': 'UIToolbar' }, 3), // spacer
				ios.tapSubviewAtIndex({ 'class': 'UIToolbar' }, 2),
				//ios.selectionItem.select({ 'class': 'UIToolbar' }, 1), // spacer
				ios.tapSubviewAtIndex({ 'class': 'UIToolbar' }, 0)
			]
		}
	};

	describe("ToolBar - success", function() {
		test("Select each toolbar button", function() {
			step("Go to toolbar demo");
			step("Select each toolbar button");
		});
	}, stepRepository);

});
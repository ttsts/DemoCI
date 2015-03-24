spec(function() {

	var stepRepository = {
		"Go to textView demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap({ 'class': 'UILabel', 'properties' : { 'text': 'UITextView' } })
			]
		},
		"Using setText": {
			'ios': [
				ios.setText( { 'class': 'UITextView' }, "Hello, world!")
			]
		},
		"Using typeText and keys": {
			'ios': [
				ios.typeText( { 'class': 'UITextView' }, "Hello, world!", 100),
				ios.pressReturn(),
				ios.typeText( { 'class': 'UITextView' }, "Good-bye, world!", 100)
			]
		}
	};

	describe("TextView - success", function() {
		test("TextView changes", function() {
			step("Go to textView demo");
			step("Using setText");
		});
		test("TextView typing", function() {
			step("Go to textView demo");
			step("Using typeText and keys");
		});
	}, stepRepository);

});
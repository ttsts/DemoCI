spec(function() {

	var stepRepository = {
		"Go to textField demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap({ 'class': 'UILabel', 'properties' : { 'text': 'UITextField' } })
			]
		},
		"Using setText": {
			'ios': [
				ios.setText( { 'class': 'UITextField', 'properties' : { 'tag': '1'} }, "text 1"),
				ios.setText( { 'class': 'UITextField', 'properties' : { 'tag': '2'} }, "text 2")
			]
		},
		"Using getValue": {
			'ios': [
				ios.setText( { 'class': 'UITextField', 'properties' : { 'tag': '2'} }, "text 2"),
				ios.getPropertyValue( { 'class': 'UITextField', 'properties' : { 'tag': '2'} }, "text", function(value) {
					// assert.equal(value)
					//console.log("Retrieved value: " + value);
				})
			]
		}
	};

	describe("TextField - success", function() {
		test("TextField changes", function() {
			step("Go to textField demo");
			step("Using setText");
		});
		test("TextField getValue returns text 2", function() {
			step("Go to textField demo");
			step("Using getValue");
		});
	}, stepRepository);

});
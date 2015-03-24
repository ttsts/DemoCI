spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		slider1: { 'class': 'UISlider', 'properties' : { 'tag': '1'} },
		slider2: { 'class': 'UISlider', 'properties' : { 'tag': '2'} }
	};

	var stepRepository = {
		"Go to slider demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.tableView, 1, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 1, 0)
			]
		},
		"Using setValue": {
			'ios': [
				ios.setValue(queries.slider1, 0.932),
				ios.setValue(queries.slider2, 0.1822)
			]
		}
	};

	describe("Slider - success", function() {
		test("Slider changes", function() {
			step("Go to slider demo");
			step("Using setValue");
		});
	}, stepRepository);

});
spec(function() {

	var queries = {
		mainMenuTableView: { 'class' : 'UITableView' },
		demoTableView: { 'class': 'UITableView' },
		label: {'class': 'UILabel', 'properties' : { 'text': 'Item 3'} }
	};

	var stepRepository = {
		"Go to tableView demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.selectRow(queries.demoTableView, 13, 0),
				ios.wait(500),
			]
		},
		"Go to section 3 and select rows": {
			'ios': [
				// TODO: without the previous ios.wait(500), this does not work in iOS 7 because the query finds the previous page's UITableView instead of the current page's
				ios.selectRow(queries.demoTableView, 2, 2),
				ios.selectRow(queries.demoTableView, 3, 2),
				ios.selectRow(queries.demoTableView, 4, 2)
			]
		},
		"Scroll and tap": {
			'ios': [
				ios.scrollToRow(queries.demoTableView, 0, 2, ios.constants.tableViewScrollPosition.top),
				ios.tap(queries.label)
			]
		}
	};

	describe("TableView - success", function() {
		test("TableView row selections", function() {
			step("Go to tableView demo");
			step("Go to section 3 and select rows");
		});
		test("TableView scroll and tap", function() {
			step("Go to tableView demo");
			step("Scroll and tap");
		});
	}, stepRepository);

});
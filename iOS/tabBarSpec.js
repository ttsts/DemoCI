spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		tabBar: { 'class': 'UITabBar' }
	};

	var stepRepository = {
		"Go to tabBar demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.tableView, 9, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 9, 0)
			]
		},
		"Select each tabBar button": {
			'ios': [
				ios.tapSubviewAtIndex(queries.tabBar, 3),
				ios.tapSubviewAtIndex(queries.tabBar, 2),
				ios.tapSubviewAtIndex(queries.tabBar, 1),
				ios.tapSubviewAtIndex(queries.tabBar, 0)
			]
		},
	};

	describe("TabBar - success", function() {
		test("Select each toolbar button", function() {
			step("Go to tabBar demo");
			step("Select each tabBar button");
		});
	}, stepRepository);

});
spec(function() {

	var queries = {
		mainMenuTableView: { 'class': 'UITableView' },
		searchableTableView: { 'class': 'UITableView', 'properties' : { 'tag': 26 } },
		searchResultsTableView: { 'class': 'UISearchResultsTableView' },
		searchBar: { 'class': 'UISearchBar' },
		searchBarTextField: { 'class': 'UISearchBarTextField' }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		"Go to searchBar demo": {
			'ios': [
				ios.selectRow(queries.mainMenuTableView, 6, 0)
			]
		},
		"Simple search with setText": {
			'ios': [
				ios.scrollToRow(queries.searchableTableView, 0, 0, ios.constants.tableViewScrollPosition.bottom),
				ios.setText(queries.searchBar, "cass"),
				ios.selectRow(queries.searchResultsTableView, 0, 0)
			]
		},
		"Simple search with typeText": {
			'ios': [
				ios.scrollToRow(queries.searchableTableView, 0, 0, ios.constants.tableViewScrollPosition.bottom),
				ios.typeText(queries.searchBarTextField, "cass", 100),
				ios.pressReturn(),
				ios.selectRow(queries.searchResultsTableView, 0, 0)
			]
		},
		"Tap at point": {
			'ios': [
				ios.tapAtLocation(queries.searchableTableView, 30, 130),
				ios.tapAtLocation(queries.searchableTableView, 30, 150),
				ios.tapAtLocation(queries.searchableTableView, 30, 170),
				ios.tapAtLocation(queries.searchableTableView, 30, 190),
				ios.tapAtLocation(queries.searchableTableView, 30, 310),
				ios.tapAtLocation(queries.searchableTableView, 30, 430)
			]
		}
	};

	describe("SearchBar - success", function() {
		test("Simple search with setText", function() {
			step('Given DemoApplication is running');
			step("Go to searchBar demo");
			step("Simple search with setText");
		});
		test("Simple search with typeText", function() {
			step('Given DemoApplication is running');
			step("Go to searchBar demo");
			step("Simple search with typeText");
		});
		test("TapAtLocation", function() {
			step('Given DemoApplication is running');
			step("Go to searchBar demo");
			step("Tap at point");
		});
	}, stepRepository);

});
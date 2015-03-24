spec(function () {

	var queries = {
		expandableListControls: { 'class': 'android.widget.Button', 'properties': { 'text': 'Expandable List' } },
		expandableList: { 'class': 'android.widget.ExpandableListView' },
		feedbackLabel: { 'class': 'android.widget.TextView', 'properties': { 'id': 'feedback' } }
	}

	var stepRepository = {
		"Load expandable list page": {
			'android': [
				android.launch("com.telerik.demoapplication"),
				android.tap(queries.expandableListControls)
			]
		},
		"Select Red in the Colors list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 2)
			]
		},
		"Verify Red was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Red");
				})
			]
		},
		"Select Violet in the Colors list": {
			'android': [
				android.selectRow(queries.expandableList, 6, 2)
			]
		},
		"Verify Violet was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Violet");
				})
			]
		},
		"Select Aardvark in the Animals list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 0)
			]
		},
		"Select Mercury in the Planets list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 1)
			]
		}
	};

	describe("Automate an expandable list", function () {
		test("Select an item", function () {
			step("Load expandable list page");
			step("Select Red in the Colors list");
			step("Verify Red was selected");
		});

		test("Select the last item", function () {
			step("Load expandable list page");
			step("Select Red in the Colors list");
			step("Select Aardvark in the Animals list");
			step("Select Mercury in the Planets list");
			step("Select Violet in the Colors list");
			step("Verify Violet was selected");
		});
	}, stepRepository);
});
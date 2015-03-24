spec(function () {
	var queries = {
		icsButton: { class: "android.widget.Button", properties: { text: "ICS Controls" } },
		switch: { class: "android.widget.Switch" }
	};

	var stepRepository = {
		'Load ICS test page': {
			'android': [
				android.launch('com.telerik.demoapplication'),
				android.tap(queries.icsButton)
			]
		},
		'Verify switch is off': {
			'android': [
				android.getPropertyValue(queries.switch, 'checked', function (isChecked) {
					assert(isChecked).equals(false);
				})
			]
		},
		'Verify switch is on': {
			'android': [
				android.getPropertyValue(queries.switch, 'checked', function (isChecked) {
					assert(isChecked).equals(true);
				})
			]
		},
		'Turn switch on': {
			'android': [
				android.toggle(queries.switch, true)
			]
		},
		'Turn switch off': {
			'android': [
				android.toggle(queries.switch, false)
			]
		}
	}

	describe("Test switch automation (Ice Cream Sandwich)", function () {
		test("Test switch automation", function () {
			step('Load ICS test page');
			step('Verify switch is off');
			step('Turn switch on');
			step('Verify switch is on');
			step('Turn switch off');
			step('Verify switch is off');
		});
	}, stepRepository);
});
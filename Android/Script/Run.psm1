$ErrorActionPreference = "Stop"

# Starts the Emulator.
function start-emulator {
	# Start an android Emulator.
	emulator -avd Emulator442
	# Wait 2 minutes for the Emulator to load up.
	start-sleep -s 120
	# Call the function that installs the agent and app to test.
	install-connect-apps
}
# Installs the apps and connects the agent to the sockets server.
 function install-connect-apps {
 	# Install the Mobile Testing agent app. Change the path to a local store or online repository.
	adb -s emulator-5554 install -r "Android\Apps\MobileTesting-Android.apk"
	start-sleep -s 10
	# Install the app to test. Change the path to a local store or online repository.
	adb -s emulator-5554 install -r "Android\Apps\DemoApplicationTesting.apk"
	start-sleep -s 10
	# Start the Mobile Testing agent app.
	adb shell monkey -p com.telerik.testing.executionagent -c android.intent.category.LAUNCHER 1
	start-sleep -s 10
	# Connect the Mobile Testing agent to the sockets server.
	adb forward tcp:8088 tcp:8082
	start-sleep -s 10
	# Call the function that installs the agent and app to test.
	run-tests
}
# Runs the tests.
function run-tests{
	# Set the path to the tests folder.
	Set-Location -Path "Android\tests\"
	# Run the tests and output results to a json file.
	tmtest --sockets-server-address localhost:8088 -o ..\results.json
	# If a test fails, stop the Emulator and exit the build with error code.
	If($LASTEXITCODE -ne 0)
	{
		stop-emulator
		exit 1
	}
	start-sleep -s 10
	# Call the function that stops the emulator.
	stop-emulator
}
# Stops the emulator.
function stop-emulator{	
	$processes = @(Get-Process emulator-arm -ErrorAction SilentlyContinue)
	foreach ($process in $processes)
    	{
        	$process | Stop-Process -force
	}
}

export-modulemember -function start-emulator

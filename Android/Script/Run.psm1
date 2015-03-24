$ErrorActionPreference = "Stop"

function start-emulator {
	emulator -avd Emulator442
	start-sleep -s 120
	install-connect-apps
}
 function install-connect-apps {
	adb -s emulator-5554 install -r "Android\Apps\MobileTesting-Android.apk"
	start-sleep -s 10
	adb -s emulator-5554 install -r "C:Android\Apps\DemoApplicationTesting.apk"
	start-sleep -s 10
	adb shell monkey -p com.telerik.testing.executionagent -c android.intent.category.LAUNCHER 1
	start-sleep -s 10
	adb forward tcp:8088 tcp:8082
	start-sleep -s 10
	run-tests
}

function run-tests{
	Set-Location -Path "Android\tests\"
	tmtest --sockets-server-address localhost:8088 -m buttonsSpec -o ..\results.json
	If($LASTEXITCODE -ne 0)
	{
		exit 1
	}
	start-sleep -s 10
	stop-emulator
}

function stop-emulator{	
	$processes = @(Get-Process emulator-arm -ErrorAction SilentlyContinue)
	foreach ($process in $processes)
    	{
        	$process | Stop-Process -force
	}
}

export-modulemember -function start-emulator

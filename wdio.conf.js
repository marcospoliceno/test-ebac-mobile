const {join} = require('path')
exports.config = {

    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            "platformName": "Android",
            "platformVersion": "12.0",
            "deviceName": "emulator",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
            "appWaitActivity": 'com.wdiodemoapp.MainActivity'
        }
    ]
}
exports.config = {
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
        './specs/pagesXXX/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                // '--window-size=1920,1080',
                // '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-infobars'
            ]
        },
        "moz:firefoxOptions": {
            args: [
                // '-headless'
            ]
        }
    }],
    logLevel: 'error', // trace | debug | info | warn | error | silent
    bail: 0,
    baseUrl: 'https://team8-2022brno.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'selenium-standalone'
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}

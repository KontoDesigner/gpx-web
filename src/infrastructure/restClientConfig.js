let baseUrl = ''
const hostName = window.location.hostname
let tableau = ''

//LOCAL
if (hostName === 'localhost') {
    baseUrl = 'http://localhost:5001'
    tableau = 'https://gpx-tableau-uat.tuinordic.net'
    // baseUrl = 'https://gpx-api-uat.tuinordic.net'
}
//DEV
else if (hostName === 'gpx-web.dev.tuinordic.com') {
    baseUrl = 'http://gpx-api.dev.tuinordic.com'
    tableau = 'http://gpx-tableau.dev.tuinordic.net'
}
//UAT
else if (hostName === 'gpx-web-uat.tuinordic.net' || hostName === 'gpx-web.uat.tuinordic.net') {
    baseUrl = 'https://gpx-api-uat.tuinordic.net'
    tableau = 'https://gpx-tableau-uat.tuinordic.net'
}
//PROD
else if (hostName === 'gpx-web.tuinordic.net') {
    baseUrl = 'https://gpx-api.tuinordic.net'
    tableau = 'https://gpx-tableau.tuinordic.net'
}
//DEV
else if (hostName === 'gpx-web.test.tui-dx.com') {
    baseUrl = 'http://gpx-api.test.tui-dx.com'
    tableau = 'http://gpx-tableau.test.tui-dx.com'
}
//UAT
else if (hostName === 'gpx-web.pre.tui-dx.com') {
    baseUrl = 'http://gpx-api.pre.tui-dx.com'
    tableau = 'http://gpx-tableau.pre.tui-dx.com'
}
//PROD
else if (hostName === 'gpx-web.tui-dx.com') {
    baseUrl = 'https://gpx-api.tui-dx.com'
    tableau = 'https://gpx-tableau.tui-dx.com'
} else {
    console.warn(`could not identify hostname: ${hostName}.`)
}

export const restClientConfig = {
    baseUrl: baseUrl,
    tableau
}

console.log('config', restClientConfig)

export default restClientConfig

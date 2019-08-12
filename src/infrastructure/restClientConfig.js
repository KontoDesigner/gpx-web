let baseUrl = ''
const hostName = window.location.hostname

//LOCAL
if (hostName === 'localhost') {
    baseUrl = 'http://localhost:5001'
    // baseUrl = 'https://gpx-api-uat.tuinordic.net'
}
//
else if (hostName === 'gpx-web.dev.tuinordic.com') {
    baseUrl = 'http://gpx-api.dev.tuinordic.com'
}
//UAT
else if (hostName === 'gpx-web-uat.tuinordic.net' || hostName === 'gpx-web.uat.tuinordic.net') {
    baseUrl = 'https://gpx-api-uat.tuinordic.net'
}
//PROD
else if (hostName === 'gpx-web.tuinordic.net') {
    baseUrl = 'https://gpx-api.tuinordic.net'
} else {
    console.warn(`could not identify hostname: ${hostName}.`)
}

export const restClientConfig = {
    baseUrl: baseUrl
}

console.log('config', restClientConfig)

export default restClientConfig

let baseUrl = ''
const hostName = window.location.hostname

//LOCAL
if (hostName === 'localhost') {
  baseUrl = 'http://localhost:5000'
}
//UAT
else if (hostName === 'gpx-api-uat.tuinordic.net' || hostName === 'gpx-api.uat.tuinordic.net') {
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

export default restClientConfig

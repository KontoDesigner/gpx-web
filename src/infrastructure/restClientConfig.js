let baseUrl = ''
const hostName = window.location.hostname

//LOCAL
if (hostName === 'localhost') {
  baseUrl = 'http://localhost:5000'
}
//UAT
else if (hostName === 'gpx-uat.tuinordic.net' || hostName === 'gpx.uat.tuinordic.net') {
  baseUrl = 'https://gpx-uat.tuinordic.net'
}
//PROD
else if (hostName === 'gpx.tuinordic.net') {
  baseUrl = 'https://gpx.tuinordic.net'
} else {
  console.warn(`could not identify hostname: ${hostName}.`)
}

export const restClientConfig = {
  baseUrl: baseUrl
}

export default restClientConfig

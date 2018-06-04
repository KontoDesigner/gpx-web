let baseUrl = '';
const hostName = window.location.hostname;

//LOCAL
if (hostName === 'localhost') {
    baseUrl = 'http://localhost:5000';
}
//UAT
else if (hostName === 'x-uat.tuinordic.net' || hostName === 'x.uat.tuinordic.net') {
    baseUrl = 'https://x-uat.tuinordic.net';
}
//PROD
else if (hostName === 'x.tuinordic.net') {
    baseUrl = 'https://x.tuinordic.net';
}
else {
    console.warn(`could not identify hostname: ${hostName}.`);
}

export const restClientConfig = {
    baseUrl: baseUrl
}

export default restClientConfig;
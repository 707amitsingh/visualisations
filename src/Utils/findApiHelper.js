const url = "https://dev-cbld-sas-findapi.dev.forge.connected.honeywell.com/v1/search"
const ApiKey = '' // don't push code with this detail
const customerId = '' // don't push code with this detail

export const getNodes = (data, callBack) => {

    const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'customerId':customerId,
          'ApiKey': ApiKey,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data),
    }

    fetch(url, config)
    .then(response => response.json())
    .then(data => callBack(data))
}
const url = "https://dev-cbld-sas-findapi.dev.forge.connected.honeywell.com/v1/search"
const ApiKey = 'HdsXlhBoGZgsifFSOI0mGCCGB4qLw0oxNYxtiZeO' // don't push code with this detail
const customerId = 'idf0a29149-660a-4493-bba1-f3ffa4388078' // don't push code with this detail

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
const url = "https://dev-cbld-sas-findapi.dev.forge.connected.honeywell.com/v1/search"
const ApiKey = 'HdsXlhBoGZgsifFSOI0mGCCGB4qLw0oxNYxtiZeO' // don't push code with this detail
const customerId = 'idf0a29149-660a-4493-bba1-f3ffa4388078' // don't push code with this detail

const chillerSvg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHBDfGuds05HBovlOJ9hXKnlW9L7aWrq0fw&usqp=CAU"
const chiller2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIyENHpT0t4VMNGk9xjQMs86ylk2xuCEyeQ&usqp=CAU"
const ahu1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmk54qjAUrbrtokjet2HXyulUhvO-mKIqdQ&usqp=CAU"

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
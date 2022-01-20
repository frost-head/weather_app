tem=document.getElementById('temp')
cit=document.getElementById("city")
average=document.getElementById("avg")

// let response=fetch("https://api.weatherapi.com/v1/current.json?key=72e2a622adce48738e1153710210712&q=america&aqi=yes")


async function fetchAsync(location){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=72e2a622adce48738e1153710210712&q="+location+"&aqi=yes")
    const data = await response.json()
    tem.innerText = data.current.temp_c
    cit.innerText= data.location.name
    average.innerText=data.current.condition.text
    
}

fetchAsync("dehradun")


function send_data(){
    let x = document.getElementById('location').elements[0].value
    fetchAsync(x)
    console.log(x)}
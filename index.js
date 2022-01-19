tem=document.getElementById('temp')
cit=document.getElementById("city")
average=document.getElementById("avg")

// let response=fetch("https://api.weatherapi.com/v1/current.json?key=72e2a622adce48738e1153710210712&q=america&aqi=yes")


async function fetchAsync(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=72e2a622adce48738e1153710210712&q=dehradun&aqi=yes")
    const data = await response.json()
    tem.innerText = data.current.temp_c
    cit.innerText= data.location.name
    average.innerText=data.current.condition.text
    
}

let temp = fetchAsync()
let myForm = document.getElementById('form')
var formData = new FormData(myForm);

for (var p of formData) {
    let name = p[0];
    let value = p[1];

    console.log(name, value)
}
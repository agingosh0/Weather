let form=document.getElementById("cityName")
let button=document.getElementById("submitBtn")
let message=document.getElementById("city_name")
let temp=document.getElementById("temp_real_val")

let getInfo= async(event)=>{
    event.preventDefault()
    let cityVal= form.value
    if (cityVal=="" ) {
        message.textContent="please enter a city name before search "
    } else {
        try{
           let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
           let response= await fetch(url)
           let data= await response.json()
           message.textContent=`${data.name},${data.sys.country}`
           temp.innerText = data.main.temp
           console.log(data);
        }catch{
            message.textContent="please enter a valid city name"
        }
    }
}

button.addEventListener("click",getInfo)
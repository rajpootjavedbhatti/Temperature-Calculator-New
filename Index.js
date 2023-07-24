function cel()
{
    let a = +document.querySelector("#TemperatureInCelcius").value;
    if(a==27||a==28)
    {
        alert("Temperature Is Moderate");
        document.querySelector("#change").innerHTML=`Temperature Is:${a}`;
    }
    else if(a<27)
    {
        document.querySelector("#change").innerHTML=`COLD`
    }
    else if(a>28)
    {
        document.querySelector("#change").innerHTML=`HOT`
    }
}
function fer()
{
    let b = document.querySelector("#TemperatureInFahrenheit").value;
    if(b==80)
    {
        document.querySelector("#change").innerHTML=`Temperature Is Moderate`
    }
    else if(b<80)
    {
        document.querySelector("#change").innerHTML=` COLD`
    }
    else if(b>80){
        document.querySelector("#change").innerHTML=`HOT`
    }
}
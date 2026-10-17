const apikey = ""; 
var apiRequestgetter = fetch("https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=9a555df7f78f9e3a926c5e216d301636&units=imperial").then(response => response.json()).then(data => { return (data.main) })
console.log(apiRequestgetter);



// async function printdata() {
//     var apiRequestgetter = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=9a555df7f78f9e3a926c5e216d301636");
//     console.log(apiRequestgetter);
// }

// await printdata(); 

async function getP() {
    try {
        var apiRequestgetter = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=9a555df7f78f9e3a926c5e216d301636&units=imperial").then(response => response.json()).then(data => { return (data.main) })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw new Error("Failed to fetch data");
        }
    }

    catch (error) {
        console.error('Error: ', error);
    }
}
getP();
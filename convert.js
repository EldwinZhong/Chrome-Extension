document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('city');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apikey = "lCxdU0/WD5vknxf+TdKAnA==EZOdeZvjQw7IO2Ex"
    const apiUrl = "https://api.api-ninjas.com/v1/worldtime?city="
    console.log("hi");
    convert.addEventListener('click', () => {
        const targetCity = target.value;
        const url = apiUrl + targetCity;

        fetch(url, {
            headers: {
                'X-API-KEY': apikey
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `Timezone for ${targetCity}: ${data.datetime}`;
        })
        .catch(error => {
            console.error('Request failed',error);
            result.innerHTML = "An error has occurred try again"
        })
    })
});

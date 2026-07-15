function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        result.innerHTML =
            `${temp} °C = ${f.toFixed(2)} °F <br>
             ${temp} °C = ${k.toFixed(2)} K`;
    }

    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        result.innerHTML =
            `${temp} °F = ${c.toFixed(2)} °C <br>
             ${temp} °F = ${k.toFixed(2)} K`;
    }

    else if (unit === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        result.innerHTML =
            `${temp} K = ${c.toFixed(2)} °C <br>
             ${temp} K = ${f.toFixed(2)} °F`;
    }
}
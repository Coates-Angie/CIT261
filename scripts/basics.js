// This shows my understanding of functions,variables, parameters, and conditional statements
function computeBMI() {
    // Select the Elements
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    //This will convert the units to metrics in order to calculate inches and pounds
    if (heightunits === "inches") {
        height /= 39.37007874;
    }

    if (weightunits === "lb") {
        weight /= 2.20462;
    }

    //BMI calculation and rounded
    var BMI = Math.round(weight / Math.pow(height, 2));

    //Display result of calculation
    document.getElementById("bmiOutput").innerText = BMI;

    //This will give the user a response to what the BMI number means
    var bmiOutput = Math.round(BMI * 10) / 10;
    if (bmiOutput < 18.5) {
        document.getElementById("response").innerText = "Underweight";
    } else if (bmiOutput >= 18.5 && bmiOutput <= 25) {
        document.getElementById("response").innerText = "Normal";
    } else if (bmiOutput >= 25 && bmiOutput <= 30) {
        document.getElementById("response").innerText = "Overweight";
    } else if (bmiOutput > 30) {
        document.getElementById("response").innerText = "Obese";
    }
}

//XMLHttpRequest
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var mySonsList = JSON.parse(xhr.responseText);
            listBoys(mySonsList);
        }

        if (xhr.status == 404) {
            console.log('File cannot be found!');
        }
    }
};
xhr.open('get', 'kids.txt', true);
xhr.send();

function listBoys(data) {
    // Put the data into a variable and format with HTML tags
    var output = "<h3>My Boys</h3>";
    output += "<ul>";

    // Loop through the Boys
    for (var i in data.myBoys) {
        output += "<li>" + data.myBoys[i].childName + " (Born: " + data.myBoys[i].born + ")</li>";
    }

    output += "</ul>";

    // Output the data to the "sonsList" element
    document.getElementById("sonsList").innerHTML = output;
}
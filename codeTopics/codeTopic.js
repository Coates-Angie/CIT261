Function applyBmi()
{
        var name = document.getElementById('nameInputBox').value;
        var height = parseFloat(document.getElementById('heightInputBox').value);
        var weight = parseFloat(document.getElementById('weightInputBox').value);
        var currBmi = (weight * 703) / (height * height);
        var bmi = name + 'Your current BMI is:' + currBmi;
// Display BMi
        document.getElementById('bmiOutput').innerHTML = "bmi";
    }

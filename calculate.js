function BMI() {

    var w = document.getElementById('weight').value;

    var h = document.getElementById('height').value;

    /*var bmi = w/(h/100 * h/100);

    var bmio = (bmi.toFixed(2));*/

    if (w > 0 && h > 0) {

    var bmi = w/(h/100 * h/100);

    var bmio = (bmi.toFixed(2));

    var cate;

    var colr;

    if (bmio < 18.5) {
    	cate = "Underweight";

        colr = document.querySelector("#result").style.color = "gold";
    }

    else if (bmio >= 18.5 && bmio <= 24.99) {
    	cate = "Normal Weight";

        colr = document.querySelector("#result").style.color = "limegreen";
    }

    else if (bmio >= 25.0 && bmio <= 29.99) {
        cate = "Overweight";

        colr = document.querySelector("#result").style.color = "orange";
    }

    else if (bmio > 30.0) {
        cate = "Obese";

        colr = document.querySelector("#result").style.color = "red";
    }

    }

    else {
        alert("Enter Correct Value");
    }

    document.getElementById('result').innerHTML = "Your BMI is " + bmio;

    document.getElementById('result2').innerHTML = bmio;

    document.getElementById('result3').innerHTML = cate;
  }

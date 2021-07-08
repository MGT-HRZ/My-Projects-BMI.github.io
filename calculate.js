function BMI() {

    var w = document.getElementById('weight').value;

    var h = document.getElementById('height').value;

    /*var bmi = w/(h/100 * h/100);

    var bmio = (bmi.toFixed(2));*/

    if (w > 0 && h > 0) {

    var bmi = w/(h/100 * h/100);

    var bmio = (bmi.toFixed(2));

    var cate;

    if (bmio < 18.5) {
    	cate = "Uderweight";
    }

    else if (bmio >= 18.5 && bmio <= 24.99) {
    	cate = "Normal Weight";
    }

    else if (bmio >= 25.0 && bmio <= 29.99) {
        cate = "Overweight";
    }

    else if (bmio > 30.0) {
        cate = "Obese";
    }

    }

    else {
        alert("Enter Correct Value");
    }

    document.getElementById('result').innerHTML = "Your BMI is " + bmio;

    document.getElementById('result2').innerHTML = bmio;

    document.getElementById('result3').innerHTML = cate;
  }

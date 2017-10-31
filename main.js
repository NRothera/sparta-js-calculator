var typeOfCalculator = prompt("Please input which type of Calculator you want to use. b for basic, a for advanced, m for BMI, t for Travel")

if (typeOfCalculator ==='b'){
  var firstNumber = prompt('Please input your first number')
  var secondNumber = prompt('Now please enter your second number')
  var typeOfOperator = prompt('Which operator would you like to use? + - * /')
  if (typeOfOperator === '+'){
    var result = parseFloat(firstNumber) + parseFloat(secondNumber);
    alert(firstNumber + " + " +secondNumber + " = " + result);
  }else if (typeOfOperator === '-'){
    var result = parseFloat(firstNumber) - parseFloat(secondNumber);
    alert(firstNumber + " - " +secondNumber + " = " + result);
  }else if (typeOfOperator === '/'){
    var result = parseFloat(firstNumber) / parseFloat(secondNumber);
    alert(firstNumber + " / " +secondNumber + " = " + result);
  }else if (typeOfOperator === '*'){
    var result = parseFloat(firstNumber) * parseFloat(secondNumber);
    alert(firstNumber + " * " +secondNumber + " = " + result);
  }else{
    alert('Wrong kind of operator')
  }
}else if (typeOfCalculator === 'a'){
  var firstNumber = prompt('Please enter your first number. This will be the number that is square rooted if you choose the square root operation');
  var secondNumber = prompt('Now please enter your second number');
  var typeOfOperator = prompt('Which operator would you like to use? ** or sqrt');
  if (typeOfOperator === '**'){
    var result = parseFloat(firstNumber) ** parseFloat(secondNumber);
    alert(firstNumber + " ** " +secondNumber + " = " + result)
  }else{
    var result = Math.sqrt(parseFloat(firstNumber))
    alert('Square root of ' + firstNumber + ' = ' + result)
  }
}else if (typeOfCalculator === 'm'){
  var system = prompt('Would you prefer imperial or metric?')
  if (system === 'imperial'){
    var weight = prompt('Please enter your weight in pounds');
    var feet = parseFloat(prompt('Please enter how many feet tall you are. You will be asked inches next'));
    var inches = parseFloat(prompt('Please enter how many inches extra you are'));
    var result = (weight *703)/(((feet*12)+inches)**2);
    var final = alert('Your BMI is ' + result);
  }else{
    var weight = parseFloat(prompt('Please enter your weight in kg'));
    var height = parseFloat(prompt('Please enter your height in cm'));
    var result = weight/((height/100)**2);
  }
}else if (typeOfCalculator === 't'){
  var distance = parseFloat(prompt('Please enter how far you are travelling'));
  var mpg = parseFloat(prompt('What is your fuel efficiency in mpg'));
  var cpg = parseFloat(prompt('How much is a gallon of fuel?'));
  var speed = parseFloat(prompt('How fast on average will you be travelling in mph?'));
  if (speed > 60){
    var difference = (speed - 60) * 2;
    mpg -= difference
    if (mpg <= 0){
      mpg =1
    }
  }
  var travelTime = distance/speed
  var travelCost = ((distance/mpg)) * cpg
  alert('Your trip will take ' + travelTime.toFixed() + " hours and cost £" + travelCost)
}

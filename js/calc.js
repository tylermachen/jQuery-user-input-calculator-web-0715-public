'use-strict';

$(function(){

  var calculator = new Calculator();

});

function Calculator(){
  var number1       = NaN,
      number2       = NaN,
      operation     = null,
      $number1      = $('#number1'),
      $number2      = $('#number2'),
      $operation    = $('#operation'),
      $equalsButton = $('#equals'),
      $result       = $('#result');

  function validate(){
    if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === ''){
      $result.text("Sorry, one of those is not a valid number!");
    } else {
      result();
    }
  }

  function result(){
    switch(operation) {
      case '+': $result.text(number1 + number2); break;
      case '-': $result.text(number1 - number2); break;
      case '*': $result.text(number1 * number2); break;
      case '/': $result.text(number1 / number2); break;
      default : $result.text("Sorry, not a valid operation!");
    }
  }

  $equalsButton.on('click', function(){
    number1 = parseInt($number1.val());
    number2 = parseInt($number2.val());
    operation = $operation.val();
    validate();
  });
}

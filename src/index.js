module.exports = function check(str, bracketsConfig) {
  var stack = [];
  
    for (var i = 0; i < str.length; i++) { // проверяем каждый символ строки
      var bracket = str[i];
  
      for (var j = 0; j < bracketsConfig.length; j++ ) { // проверяем скобку по каждому массиву
        var array = bracketsConfig[j]; 
  
        if (bracket === array[0] && bracket === array[1]) { // если откр. и закр. скобки в массиве одинаковые..
          if (stack[stack.length - 1] === bracket) { // если последняя в стоке такая скобка..
            stack.pop(bracket); // --> удаляем последнюю скобку из стека
          } else { // если другая..
            stack.push(bracket); // --> кладем в стек
          }
              
        } else { // для обычных скобок
  
          if (bracket === array[0]) { // если это открывающая скобка данного массива..
            stack.push(bracket); // --> кладем в стек
  
          } else if (bracket === array[1]) { // если это закрывающая скобка данного массива..
  
            if (stack.length === 0) { // .. и стек пуст..
              return false; // --> false
            }
  
            if (stack[stack.length - 1] !== array[0]) { // .. и если последняя скобка в стеке не равна открывающей из данного массива..
              return false; // --> false
            } else { // ..если же совпадает..
              stack.pop(bracket); // --> удаляем последнюю скобку из стека
            }
          }
        }
      }
    }
  
    if (stack.length === 0) {// если после цикла в стеке что-то есть --> false
      return true;
    } else {
      return false;
    }
}

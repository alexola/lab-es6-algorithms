class ArrayFunctions{

  static printSpecial(numbers){
    return numbers.join(" --- ");
  }

  static doubleArray(array){
    return array.map(function(number){
      return number * 2;
});
}
static superPower(array){
  return array.reduce(function(sum, number, index){
    return sum + (number * (Math.pow(10, index)));
  });
}
}




module.exports = ArrayFunctions;

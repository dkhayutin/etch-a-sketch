function checkAge(num){
  if (num > 21) {
    return ('You may enter the bar')
  } else if  (num < 21) {
    return ('You are to young')
  } else {
    return ('No age given')
  }
}

console.log(checkAge(20))
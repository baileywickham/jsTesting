function sumOfDigits(dig) {
	var s = dig.toString()
    var arr = s.split("")
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
    	sum += parseInt(arr[i])
    }
    return sum
}
function isHarshad(num) {
	if (num % sumOfDigits(num) === 0) {
    	alert("yep its a harshad num")
     }
     else {
     	alert("nope")
     }
}
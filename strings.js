function reverse(str) {
    //todo
}

function compress(sentence) {
    var noPuncOrSpace = sentence.replace(/[.',\/#!$%\^&\*;:{}=\-_`~()\s]/g,"") // Replace punctuation
    return noPuncOrSpace
}

function isPalindrome(sentence) {
    var s = reverse(compress(sentence))
    if (s === sentence) {
        return true
    }
    return false
}

alert(compress("Hello ' world"))
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
var value = myFunction('down', 'nw%ot')
function myFunction(a,b){
    var cleanedA = a.replace("%","")
    var cleanedB = b.replace("%","").split("").reverse().join("")
    var concatedStr = cleanedA.concat(cleanedB)
    var answer = concatedStr.charAt(0).toUpperCase()+concatedStr.slice(1)
    return answer
}
console.log(value)
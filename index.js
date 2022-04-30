function pipeFix(numbers){
    let range = []
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
     range.push(i)
    }
    return range
}
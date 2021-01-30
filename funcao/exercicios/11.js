function anoBissexto(ano){
    if (ano <= 0){
        return false
    }else if(ano % 400 == 0){
        return true
    }else if(ano % 100 == 0){
        return false
    }else if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(anoBissexto(65))
console.log(anoBissexto(400))
console.log(anoBissexto(120))
console.log(anoBissexto(45))

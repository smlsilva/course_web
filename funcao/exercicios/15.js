function vendasDeCarros(modelo){
    switch(modelo){
        case "hatch":
            console.log("Compra efetuada com Sucesso!")
            break
        case "sedans":
            console.log("Tem certeza que não prefere este modelo ?")
            break
        case "motocicletas":
            console.log("Tem certeza que não prefere este modelo ?")
            break
        case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo ?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui!")               
    }
}

    const idades = [12,2,15,17,14,]
    let maior = false
    for (const idade of idades){
        if (idade >= 18){
            console.log(idade)
            maior = true
        }
    }
    if (!maior){
        console.log("Nenhum maior de idade")
    }
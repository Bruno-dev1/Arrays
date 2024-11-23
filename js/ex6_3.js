const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros =[]

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo,preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click",()=>{
    if (carros.length == 0){
        alert("Nenhum carro cadastrado")
        return
    }
    const lista = carros.reduce((i,carro)=>
        i+ carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n", "")
resp.innerText = `Lista dos carros cadastrados:\n ${"-".repeat(40)}\n` + lista
})

frm.btFiltrar.addEventListener("click",()=>{
    const maximo = Number(prompt("Qual o valor máximo que desejar pagar?"))
    if (maximo == 0 || isNaN(maximo)){   
        alert("Valor inválido")
        return
    }
    const carroFilter = carros.filter(carro => carro.preco <= maximo)
    if (carroFilter.length == 0){
        alert("Nenhum carro com esse valor")
        return
    }
    let lista =""
    for (const carro of carroFilter){
        lista += `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`
    }
    resp.innerText =`Carros até R$${maximo.toFixed(2)}:\n ${"-".repeat(40)}\n`+ lista
})

frm.btSimular.addEventListener("click",()=>{
    const desconto = Number(prompt("Qual o desconto que desejar?"))
    if (desconto == 0 || isNaN(desconto)){
        return
    }
    const carroDesc = carros.map(carro => ({modelo:carro.modelo
        , preco:carro.preco -= carro.preco*desconto/1000}))
        let lista = ""
        for (const carro of carroDesc){
            lista+= `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`
        }
        resp.innerText =`Carros com desconto de ${desconto}%:\n ${"-".repeat(40)}\n`+ lista

})
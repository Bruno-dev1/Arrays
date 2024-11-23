const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const crianças = []

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    crianças.push({nome,idade})
    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click",() => {
    if (crianças.length == 0){
        alert("Nenhuma criança cadastrada")
        return
    }
    let lista = ""
    for (const crianca of crianças){
        const {nome,idade} = crianca
        lista += `${nome} - ${idade} anos\n`
    }
    resp.innerText = `Crianças cadastradas:\n ${"-".repeat(40)}\n` + lista
})

frm.btResumir.addEventListener("click",() => {
    if (crianças.length == 0){
        alert("Nenhuma criança cadastrada")
        return
    }
   const copia = [...crianças]
   copia.sort((a,b)=>a.idade - b.idade)
   let resumo = ""
   let aux =copia[0].idade
   let nomes =[]
   for (const crianca of copia){
    const {nome,idade} = crianca
    if (idade == aux){
        nomes.push(nome)
    }else{
        resumo +=`${aux} ano(s): ${nomes.length} Criança(s) -`
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
        resumo +="("+nomes.join(", ")+")\n\n"
        aux = idade
        nomes = []
        nomes.push(nome)
    }
   }
   resumo +=`${aux} ano(s): ${nomes.length} Criança(s) -`
   resumo += ((nomes.length/copia.length)*100).toFixed(2) + "%\n"
   resumo +="("+nomes.join(", ")+")\n"
   resp.innerText = resumo
    })
    
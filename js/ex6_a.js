const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const Clube = frm.inClube.value
    clubes.push(Clube)
    frm.reset()
    frm.inClube.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click",()=>{
    let lista =""
    clubes.sort()
    for( const clube of clubes){
        lista+= "-  "+clube +"\n"
    }
    resp.innerText=lista
})

frm.btTabela.addEventListener("click",()=>{
    if(clubes.length %2 == 1 ){
        alert("Clubes ímpares, adicione +1")
        return
    }
    const en =clubes.slice()
    const inv = clubes.slice().reverse()
    const tabela = []
    tabela.push({en,inv})
    for (const clube of tabela){
        const {en,inv} = clube
        let lista = ""
        for (let i = 0; i < en.length/2; i++) {

            lista += `-${en[i]}   X   ${inv[i]}\n`

        }
        resp.innerText = lista
        
    }

})

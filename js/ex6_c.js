const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const concurso = []

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const candidato = frm.inCand.value
    const nota = Number(frm.inNota.value)
    concurso.push({candidato,nota})
    let lista= ""
    for(const cad of concurso){
        const{candidato,nota}= cad
        lista+=`- ${candidato} - ${nota} acertos\n`
    }
    resp.innerText=lista
    frm.reset()
    frm.inCand.focus()
})
frm.btCorte.addEventListener("click",()=>{
     corte = Number(prompt("Qual a nota de corte?"))
    lista =""
    const desc =concurso.slice().sort((a,b)=>a.nota - b.nota).reverse()
    for(const cad of desc){
        const{candidato,nota}= cad
if (nota>= corte){
    lista+= candidato +" -- "+ nota+ "\n"
}
    }
   resp.innerText= lista
})
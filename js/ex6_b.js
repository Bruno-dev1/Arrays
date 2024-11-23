const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const resp2 = document.querySelector("h3")
const numeros = []

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if(numeros.includes(num)){
        alert("Numero repetido")
        return
        }
    numeros.push(num)
    frm.reset()
    resp.innerText = "Números:"+numeros.join(",")
})

frm.btOrdenar.addEventListener("click", () => {
    let crescent = true
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            crescent = false
            break
        }
    }

    if (crescent) {
        resp2.innerText = "Os números estão em ordem crescente";
    } else {
        resp2.innerText = "Os números não estão em ordem";
    }
})
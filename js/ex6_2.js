//#region Input

const frm = document.querySelector("form")
const respError = document.querySelector("#outErros")
const respDica = document.querySelector("#outDica")
const respChance = document.querySelector("#outChance")
//#endregion
const erros = []
const sorteado= Math.floor(Math.random() * 10) + 1
const chances = 6

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        respDica.innerText = `Parabens, o número: ${sorteado}`
    }else{
        if (erros.includes(numero)){
           alert("Numero repetido")
        }else{
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros

            respError.innerText = `${numErros} - (${erros.join(" - ")})`
            respChance.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram")
                frm.btSubmit.disabled = true
                frm.btNovo.classList = "exibir"
            }else{
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica é um número ${dica}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
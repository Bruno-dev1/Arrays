const prompt = require("prompt-sync")()
const alunos = []
console.log("insira o nome e a nota do aluno -- Escreva 'Fim' para parar")
do{
    const nome = prompt("Insira o nome do aluno: ")
    if (nome == "Fim")
    {
        break
    }
    const nota = Number(prompt("Insira a nota do aluno: "))
    alunos.push({nome,nota})
    console.log("Ok Alunos cadastrados")
}while(true)
 console.log('-'.repeat(40))
 const maior = alunos.reduce((a,b)=> Math.max(a,b.nota),0)
 console.log(`Maior nota ${maior}`)
if (maior >= 7){
    const destaque = alunos.filter(a => a.nota >= 7)
    for (const aluno of destaque){
        console.log(`-${aluno.nome} - ${aluno.nota}`)
    }
}else{
    console.log("Nenhum aluno destaque")
}
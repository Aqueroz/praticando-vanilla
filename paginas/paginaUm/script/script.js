// mudar o titulo da pagina ao sair dela

let docTitle = document.title
// arrow function
window.addEventListener("blur", ()=>{
    document.title = ("Volte ): ")
})

window.addEventListener("focus", ()=>{
    document.title = docTitle
})
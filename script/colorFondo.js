const cambiar = document.querySelectorAll('.cambiarDeColor');

cambiar.forEach(elemento =>{
    elemento.addEventListener('click', ()=>{
        document.body.classList.toggle('cambiarColor')
    })
})
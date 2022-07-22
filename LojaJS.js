var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});


document.querySelector("#img-central")
.addEventListener("wheel", event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    } else{
        event.target.scrollBy(-300, 0)
    }
})


function newPopup(){
newpopupWindow = window.open ('', 
'pagina', 
"width=250",
"height=250",
"background: #23232e");
newpopupWindow.document.write ("<label for='user'>Digite o seu usuario</label><input type='text' id='user' name='user' autofocus>");
}

function fecharPopup(){
fecharWindow = abrirWindow.close()
}
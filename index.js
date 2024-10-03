
var like = 0;
function darMeGusta (){
    let likeCount = document.getElementById("likeCount");
    like++;
    likeCount.innerHTML = like;
    alert ("Gato Atigrado was liked")
}

var like1 = 0;
function meGusta (){
    let likeCount1 = document.getElementById("likeCount1");
    like1++;
    likeCount1.innerHTML = like1;
    alert ("Golden Retriever was liked");
}

document.getElementById('login').addEventListener('click', function(){ 
    this.textContent = this.textContent === 'Cerrar Sesión' ? 'Iniciar Sesión' : 'Cerrar Sesión';
});

document.getElementById('definition').addEventListener('click', function() {
    const definition = document.getElementById('definition');
    definition.style.display = 'none';
});

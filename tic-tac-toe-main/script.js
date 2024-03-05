//function hello (){
    //var casa1 = document.getElementById('casa1');
    //casa1.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg')";    
//}
// Imagem X = https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png
// Imagam O = https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png

var jogador = 1;

function hello (n){ 

    var casa_escolhida = document.getElementById("casa" + n);
    var symbol = casa_escolhida.style.backgroundImage;
    
    if(jogador == 1 && symbol == ''){
        casa_escolhida.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png')";
        verify_victory ();
        show_victory ();
        jogador++; 
    }
    else if(jogador == 2 && symbol == ''){
        casa_escolhida.style.backgroundImage = "url('https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png')";
        verify_victory ();
        show_victory ();
        jogador--;
    }
    else {
        console.log('deu erro');
        console.log(symbol);
    }
    
    let turno = document.getElementById('vez-jogador').innerHTML = "Movimento do jogador " + jogador;
}

function verify_victory () {
    var bg1 = document.getElementById('casa1').style.backgroundImage;
    var bg2 = document.getElementById('casa2').style.backgroundImage;
    var bg3 = document.getElementById('casa3').style.backgroundImage;
    var bg4 = document.getElementById('casa4').style.backgroundImage;
    var bg5 = document.getElementById('casa5').style.backgroundImage;
    var bg6 = document.getElementById('casa6').style.backgroundImage;
    var bg7 = document.getElementById('casa7').style.backgroundImage;
    var bg8 = document.getElementById('casa8').style.backgroundImage;
    var bg9 = document.getElementById('casa9').style.backgroundImage;
    
    if (bg1 != '' && bg2 != '' && bg3 != ''){
        if (bg1 == bg2 && bg1 == bg3 && bg2 == bg3){
            return 1;
        }    
    }
    if (bg4 != '' && bg5 != '' && bg6 != ''){
        if (bg4 == bg5 && bg4 == bg6 && bg5 == bg6){
            return 1;
        }
    }
    if (bg7 != '' && bg8 != '' && bg9 != ''){
        if (bg7 == bg8 && bg7 == bg9 && bg8 == bg9){
            return 1;
        }
    }
    if (bg1 != '' && bg4 != '' && bg7 != ''){
        if (bg1 == bg4 && bg1 == bg7 && bg4 == bg7){
            return 1;
        }
    }
    if (bg2 != '' && bg5 != '' && bg8 != ''){
        if (bg2 == bg5 && bg2 == bg8 && bg5 == bg8){
            return 1;
        }
    }
    if (bg3 != '' && bg6 != '' && bg9 != ''){
        if (bg3 == bg6 && bg3 == bg9 && bg6 == bg9){
            return 1;
        }
    }
    if (bg1 != '' && bg5 != '' && bg9 != ''){
        if (bg1 == bg5 && bg1 == bg9 && bg5 == bg9){
            return 1;
        }
    }
    if (bg3 != '' && bg5 != '' && bg7 != ''){
        if(bg3 == bg5 && bg3 == bg7 && bg5 == bg7){
            return 1;
        }
    }
    if (bg1 != '' && bg2 != '' && bg3 != '' && bg4 != '' && bg5 != '' && bg6 != '' && bg7 != '' && bg8 != '' && bg9 != '') {
        return 0;
    }
}

var ponto1 = 1;
var ponto2 = 1;
function show_victory (){
    var text = document.createTextNode("O vencedor é o jogador " + jogador);
    var empatou = document.createTextNode("Empate, tenta outra vez  ");
    var titulo = document.getElementById('show_result');

    var casas = document.getElementsByClassName('casa');

    if (verify_victory() == 1){
        titulo.appendChild(text);
        for (var i = 0; i < casas.length;i++){
            casas[i].style.pointerEvents = 'none';
        }
        if (jogador == 1){
            document.getElementById('pontuacao-jogador1').innerHTML = "Pontuação do jogador 1: " + ponto1;
            ponto1++;
        }
        else if (jogador == 2){
            document.getElementById('pontuacao-jogador2').innerHTML = "Pontuação do jogador 2: " + ponto2;
            ponto2++;
        }
    }
    else if (verify_victory() == 0){
        titulo.appendChild(empatou);
    }
}

function retry (){
    var bg1 = document.getElementById('casa1').style.backgroundImage = '';
    var bg2 = document.getElementById('casa2').style.backgroundImage = '';
    var bg3 = document.getElementById('casa3').style.backgroundImage = '';
    var bg4 = document.getElementById('casa4').style.backgroundImage = '';
    var bg5 = document.getElementById('casa5').style.backgroundImage = '';
    var bg6 = document.getElementById('casa6').style.backgroundImage = '';
    var bg7 = document.getElementById('casa7').style.backgroundImage = '';
    var bg8 = document.getElementById('casa8').style.backgroundImage = '';
    var bg9 = document.getElementById('casa9').style.backgroundImage = '';
    
    var titulo = document.getElementById('show_result');
    titulo.innerHTML = '';

    var casas = document.getElementsByClassName('casa');        
    for (var y = 0; y < casas.length; y++){
        casas[y].style.pointerEvents = 'auto';
    }
}   

function reset (){
    ponto1 = 1;
    ponto2 = 1;

    document.getElementById('pontuacao-jogador1').innerHTML = "Pontuação do jogador 1:";
    document.getElementById('pontuacao-jogador2').innerHTML = "pontuação do jogador 2:";
}
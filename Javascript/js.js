
var fotoprincipal = 1;

function trocafoto(n){

    fotoprincipal = n;
    document.getElementById("portfolio_img_principal").style.backgroundImage = 'url("Imagens/Portfolio/imagem'+n+'.jpg")';

}

function Portfolio_next(){

    if(fotoprincipal < document.querySelectorAll('#Portfolio .portfolio_img').length ){

        fotoprincipal = fotoprincipal+1;

    } else{
        fotoprincipal = 1
        
    }
    

    document.getElementById("portfolio_img_principal").style.backgroundImage = 'url("Imagens/Portfolio/imagem'+fotoprincipal+'.jpg")';

}

function Portfolio_prev(){

    if(fotoprincipal>1){

        fotoprincipal=fotoprincipal-1;

    }
    else{

        fotoprincipal = document.querySelectorAll('#Portfolio .portfolio_img').length;

    }

    document.getElementById("portfolio_img_principal").style.backgroundImage = 'url("Imagens/Portfolio/imagem'+fotoprincipal+'.jpg")';

}
let ubicacionprincipal = window.pageYOffset
window.onscroll = function () {
    let desplazamiento_actual = window.pageYOffset
    if(ubicacionprincipal >= desplazamiento_actual){
            document.getElementById('navmenu').style.top = '0';
    }
    
    else{
        document.getElementById('navmenu').style.top = '-100px';
    }
    ubicacionprincipal = desplazamiento_actual;

}




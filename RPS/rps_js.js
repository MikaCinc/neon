rps_Poeni_pobediosi = 0
rps_Poeni_nereseno = 0
rps_Poeni_izgubiosi = 0

function rps_rock(){
    var rps_rnd = Math.floor((Math.random() * 3) + 1)
    document.getElementById("rps_img-Rock").style.background = "cyan"
    document.getElementById("rps_img-Rock_inner").style.width = "200"
    document.getElementById("rps_img-Rock_inner").style.height = "200"
    console.log(rps_rnd)
    document.getElementById("rps_ok").style.display = "inline-block"
    document.getElementById("rps_vs").style.display = "inline-block"
    if(rps_rnd == 1){
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "inline-block"
        document.getElementById('rps_rezultat').innerHTML = "NERESENO" 
        rps_Poeni_nereseno += 1
        document.getElementById("rps_img-Rock2_inner").style.width = "200"
        document.getElementById("rps_img-Rock2_inner").style.height = "200"
        document.getElementById("rps_img-Rock2_inner").style.background = "orange"
    }
    if(rps_rnd == 2){
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "inline-block"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "POBEDIO SI"
        rps_Poeni_pobediosi += 1
        document.getElementById("rps_img-Scissors2_inner").style.width = "200"
        document.getElementById("rps_img-Scissors2_inner").style.height = "200"
        document.getElementById("rps_img-Scissors2_inner").style.background = "orange"
    }
    if(rps_rnd == 3){
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "inline-block"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "IZGUBIO SI"
        rps_Poeni_izgubiosi += 1
        document.getElementById("rps_img-Paper2_inner").style.width = "200"
        document.getElementById("rps_img-Paper2_inner").style.height = "200"
        document.getElementById("rps_img-Paper2_inner").style.background = "orange"
    }
    document.getElementById("rps_Poeni_pobediosi").innerHTML = rps_Poeni_pobediosi
    document.getElementById("rps_Poeni_nereseno").innerHTML = rps_Poeni_nereseno
    document.getElementById("rps_Poeni_izgubiosi").innerHTML = rps_Poeni_izgubiosi
}

function rps_scissors(){ 
    var rps_rnd = Math.floor((Math.random() * 3) + 1)
    document.getElementById("rps_img-Scissors").style.background = "cyan"
    document.getElementById("rps_img-Scissors_inner").style.width = "200"
    document.getElementById("rps_img-Scissors_inner").style.height = "200"
    console.log(rps_rnd)
    document.getElementById("rps_ok").style.display = "inline-block"
    document.getElementById("rps_vs").style.display = "inline-block"
    if(rps_rnd == 1){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "inline-block"
        document.getElementById('rps_rezultat').innerHTML = "IZGUBIO SI"
        rps_Poeni_izgubiosi += 1
        document.getElementById("rps_img-Rock2_inner").style.width = "200"
        document.getElementById("rps_img-Rock2_inner").style.height = "200"
        document.getElementById("rps_img-Rock2_inner").style.background = "orange"
    }
    if(rps_rnd == 2){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "inline-block"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "NERESENO"
        rps_Poeni_nereseno += 1
        document.getElementById("rps_img-Scissors2_inner").style.width = "200"
        document.getElementById("rps_img-Scissors2_inner").style.height = "200"
        document.getElementById("rps_img-Scissors2_inner").style.background = "orange"
    }
    if(rps_rnd == 3){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Paper").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "inline-block"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "POBEDIO SI"
        rps_Poeni_pobediosi += 1
        document.getElementById("rps_img-Paper2_inner").style.width = "200"
        document.getElementById("rps_img-Paper2_inner").style.height = "200"
        document.getElementById("rps_img-Paper2_inner").style.background = "orange"
    }
    document.getElementById("rps_Poeni_pobediosi").innerHTML = rps_Poeni_pobediosi
    document.getElementById("rps_Poeni_nereseno").innerHTML = rps_Poeni_nereseno
    document.getElementById("rps_Poeni_izgubiosi").innerHTML = rps_Poeni_izgubiosi
}

function rps_paper(){
    var rps_rnd = Math.floor((Math.random() * 3) + 1)
    document.getElementById("rps_img-Paper").style.background = "cyan"
    document.getElementById("rps_img-Paper_inner").style.width = "200"
    document.getElementById("rps_img-Paper_inner").style.height = "200"
    console.log(rps_rnd)
    document.getElementById("rps_ok").style.display = "inline-block"
    document.getElementById("rps_vs").style.display = "inline-block"
    if(rps_rnd == 1){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "inline-block"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "IZGUBIO SI"
        rps_Poeni_izgubiosi += 1
        document.getElementById("rps_img-Scissors2_inner").style.width = "200"
        document.getElementById("rps_img-Scissors2_inner").style.height = "200"
        document.getElementById("rps_img-Scissors2_inner").style.background = "orange"
    }
    if(rps_rnd == 2){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "inline-block"
        document.getElementById("rps_img-Rock2").style.display = "none"
        document.getElementById('rps_rezultat').innerHTML = "NERESENO"
        rps_Poeni_nereseno += 1
        document.getElementById("rps_img-Paper2_inner").style.width = "200"
        document.getElementById("rps_img-Paper2_inner").style.height = "200"
        document.getElementById("rps_img-Paper2_inner").style.background = "orange"
    }
    if(rps_rnd == 3){
        document.getElementById("rps_img-Rock").style.display = "none"
        document.getElementById("rps_img-Scissors").style.display = "none"
        document.getElementById("rps_img-Scissors2").style.display = "none"
        document.getElementById("rps_img-Paper2").style.display = "none"
        document.getElementById("rps_img-Rock2").style.display = "inline-block"
        document.getElementById('rps_rezultat').innerHTML = "POBEDIO SI"
        rps_Poeni_pobediosi += 1
        document.getElementById("rps_img-Rock2_inner").style.width = "200"
        document.getElementById("rps_img-Rock2_inner").style.height = "200"
        document.getElementById("rps_img-Rock2_inner").style.background = "orange"
    }
    document.getElementById("rps_Poeni_pobediosi").innerHTML = rps_Poeni_pobediosi
    document.getElementById("rps_Poeni_nereseno").innerHTML = rps_Poeni_nereseno
    document.getElementById("rps_Poeni_izgubiosi").innerHTML = rps_Poeni_izgubiosi
}

function rps_ok(){
    document.getElementById("rps_ok").style.display = "none"
    document.getElementById("rps_vs").style.display = "none"
    document.getElementById('rps_rezultat').innerHTML = ""
    document.getElementById("rps_img-Rock").style.display = "inline-block"
    document.getElementById("rps_img-Scissors").style.display = "inline-block"
    document.getElementById("rps_img-Paper").style.display = "inline-block"
    document.getElementById("rps_img-Paper2").style.display = "none"
    document.getElementById("rps_img-Rock2").style.display = "none"
    document.getElementById("rps_img-Scissors2").style.display = "none"
    // Vrati boje nazad
    document.getElementById("rps_img-Rock").style.background = "transparent"
    document.getElementById("rps_img-Paper").style.background = "transparent"
    document.getElementById("rps_img-Scissors").style.background = "transparent"
    document.getElementById("rps_img-Rock2_inner").style.background = "transparent"
    document.getElementById("rps_img-Scissors2_inner").style.background = "transparent"
    document.getElementById("rps_img-Paper2_inner").style.background = "transparent"
    // Vrati veličine nazad
    document.getElementById("rps_img-Rock_inner").style.width = "100"
    document.getElementById("rps_img-Rock_inner").style.height = "100"
    document.getElementById("rps_img-Paper_inner").style.width = "100"
    document.getElementById("rps_img-Paper_inner").style.height = "100"
    document.getElementById("rps_img-Scissors_inner").style.width = "100"
    document.getElementById("rps_img-Scissors_inner").style.height = "100"
    document.getElementById("rps_img-Rock2_inner").style.width = "100"
    document.getElementById("rps_img-Rock2_inner").style.height = "100"
    document.getElementById("rps_img-Paper2_inner").style.width = "100"
    document.getElementById("rps_img-Paper2_inner").style.height = "100"
    document.getElementById("rps_img-Scissors2_inner").style.width = "100"
    document.getElementById("rps_img-Scissors2_inner").style.height = "100"
}
console.log("Powered by: MikaC_Inc")
// Sve što se učitava na početku:
window.onload = function(){
// Koliko puta je učitan sajt:
var broj_ucitavanja_sajta = parseInt(localStorage.getItem("broj_ucitavanja_sajta_item"))
if(isNaN(broj_ucitavanja_sajta) == true){
	broj_ucitavanja_sajta = parseInt(1);
	document.getElementById("onload_broj").innerHTML = broj_ucitavanja_sajta;
} else {
	broj_ucitavanja_sajta = parseInt(localStorage.getItem("broj_ucitavanja_sajta_item"));
	document.getElementById("onload_broj").innerHTML = broj_ucitavanja_sajta;
}
// Trajanje trenutne sesije
	var trajanje = 0;
	var interval = setInterval(incrementUvod, 1000);
	function incrementUvod(){
		trajanje = trajanje + 1;
		document.getElementById("trajanjeSpan").innerHTML = parseInt(trajanje);
		document.getElementById("trajanjeDodato").innerHTML = " + " + trajanje;
	}
// Ukupno trajanje sesije - trajanjeALL:
	var readTrajanje = parseInt(localStorage.getItem('upisiTrajanje'));
	var trajanjeALL = parseInt(readTrajanje, 10);
	if(isNaN(trajanjeALL) == true){
		trajanjeALL = parseInt(0);
		document.getElementById("trajanjeALL").innerHTML = trajanjeALL;
	} else {
		trajanjeALL = parseInt(readTrajanje);
		document.getElementById("trajanjeALL").innerHTML = trajanjeALL;
	}
// Koliko je sati?
	var kolikojesati = setInterval(function(){ myTimer() }, 1000);
	function myTimer() {
	    var d = new Date();
	    var t = d.toLocaleTimeString();
	    document.getElementById("kolikojesati").innerHTML = t;
	}
// Datum ulaska na sajt
	var datum = new Date()
	document.getElementById("datum").innerHTML = "Danasnji datum je: " + datum.toDateString();
// Broj klika na button_blue klasu:
var class_button_blue_click = parseInt(localStorage.getItem("upisiButton_blue_clicks"));
if(isNaN(class_button_blue_click) == true){
	class_button_blue_click = parseInt(0);
	document.getElementById("button_blue_clicks").innerHTML = class_button_blue_click;
} else {
	class_button_blue_click = parseInt(localStorage.getItem("upisiButton_blue_clicks"));
	document.getElementById("button_blue_clicks").innerHTML = class_button_blue_click;
}
var class_button_blue = document.getElementsByClassName("button_blue");
for (b=0; b<class_button_blue.length; b++) {
	class_button_blue[b].addEventListener("click", function(){
		class_button_blue_click += 1
		document.getElementById("button_blue_clicks").innerHTML = class_button_blue_click;
	})	
}
// Koji Div učitati?
var default_div_učitano = localStorage.getItem("default_div")
console.log("Podrazumevano otvaram: " + default_div_učitano)
if(default_div_učitano == "Home"){
	changeContent0()
}
if(default_div_učitano == "Kalkulator"){
	changeContent1()
}
if(default_div_učitano == "Štoperica"){
	changeContent2()
}
if(default_div_učitano == "To-Do"){
	changeContent3()
}
if(default_div_učitano == "Pomodoro"){
	changeContent5()
}
if(default_div_učitano == "Boje"){
	changeContent6()
}
if(default_div_učitano == "Generiši brojeve"){
	changeContent4()
	RandomRadio2()
}
if(default_div_učitano == "Ostali random alati"){
	changeContent4()
	RandomRadio1()
}
if(default_div_učitano == "Pogodi broj"){
	changeContent4()
	RandomRadio3()
}
if(default_div_učitano == "Saberi ako možeš"){
	changeContent4()
	RandomRadio4()
}
if(default_div_učitano == "Glavni gradovi"){
	changeContent4()
	RandomRadio5()
}
if(default_div_učitano == "Rock, Paper, Scissors"){
	changeContent4()
	RandomRadio6()
}
// Da uvek selektuje ponovo opciju za DEFAULT DIV koja je prethodno postavljena:
// Možda u budućnosti dođe do neke greške jer je su ovde selektovani svi <option> elementi
// U tom slučaju, zameni getEle..ByTagName sa getEle...ByClassName i dodaj svakom elementu ove grupe <option> tagova neku istu klasu! :)
var set_default_option = document.getElementsByTagName("option");
for (var k = 0; k<set_default_option.length; k++){
	if(set_default_option[k].innerHTML == default_div_učitano){
		set_default_option[k].selected = true;
	}
}
// Koju Mode učitati na početku:
var default_mode_učitano = localStorage.getItem("default_mode")
console.log("Podrazumevani Mod sajta je: " + default_mode_učitano)
if(default_mode_učitano === null){
	changeTheme1()
} 
if(default_mode_učitano == "Podrazumevana tema"){
	changeTheme1()
}
if(default_mode_učitano == "Kontrast Mode"){
	changeTheme2()
}
if(default_mode_učitano == "Dark Mode"){
	changeTheme3()
} 
// Da uvek selektuje ponovo opciju za DEFAULT MODE koja je prethodno postavljena:
var set_default_mode = document.getElementsByClassName("defaultModejs");
for (var j = 0; j<set_default_mode.length; j++){
	if(set_default_mode[j].innerHTML == default_mode_učitano){
		set_default_mode[j].selected = true;
	}
}
}
// Sve što se dašava pri zatvaranju:
window.onunload = function() {
	// Za ukupno trajanje!
	var upisi_trajanje1 = parseInt(document.getElementById("trajanjeALL").innerHTML, 10)
	var upisi_trajanje2 = parseInt(document.getElementById("trajanjeSpan").innerHTML, 10)
	var upisi_trajanje = parseInt(upisi_trajanje1 + upisi_trajanje2)
	localStorage.setItem('upisiTrajanje', upisi_trajanje);
	// Za plavo dugme
	var upisi_button_blue_clicks = parseInt(document.getElementById("button_blue_clicks").innerHTML, 10)
	localStorage.setItem('upisiButton_blue_clicks', upisi_button_blue_clicks);
	// Koliko puta je učitan sajt:
	broj_ucitavanja_sajta2 = parseInt(document.getElementById("onload_broj").innerHTML)
	broj_ucitavanja_sajta2 += 1;
	localStorage.setItem("broj_ucitavanja_sajta_item", broj_ucitavanja_sajta2)
	// Izbor za default div pri otvaranju:
	default_div_user = document.getElementById("changeDefault_div").value;
	localStorage.setItem("default_div", default_div_user);
	// Izbor za default Mode pri otvaranju:
	default_mode_user = document.getElementById("changeDefault_Mode").value;
	localStorage.setItem("default_mode", default_mode_user);
}
// ----------- HOME:


// -----------Skripte za kalkulator

function saberi(){
document.getElementById('znak').innerHTML = "+"
}

function oduzmi(){
document.getElementById('znak').innerHTML = "-"
}

function pomnozi(){
document.getElementById('znak').innerHTML = "*"
}

function podeli(){
document.getElementById('znak').innerHTML = "/"
}

function izracunaj(prvibroj, drugibroj){
	prvibroj = parseFloat(prvibroj)
	drugibroj = parseFloat(drugibroj)
	var Znak = document.getElementById('znak').innerHTML
	if(Znak === "+"){
		document.getElementById('rezultat').value = prvibroj + drugibroj
	}
	if(Znak === "-"){
		document.getElementById('rezultat').value = prvibroj - drugibroj
	}
	if(Znak === "*"){
		document.getElementById('rezultat').value = prvibroj * drugibroj
	}
	if(Znak === "/"){
		document.getElementById('rezultat').value = prvibroj / drugibroj
	}

}

function koren(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById('rezultat').value = Math.sqrt(x);
}

function stepen(prvibroj, drugibroj){
	var x = document.getElementById("prvibroj").value;
	var y = document.getElementById("drugibroj").value;
	document.getElementById('rezultat').value = Math.pow(x, y)
}

function abs(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById('rezultat').value = Math.abs(x);
}

function PI(){
	document.getElementById("prvibroj").value = Math.PI;
}

function Zokruglo(){
	var z = document.getElementById("rezultat").value;
	document.getElementById("rezultat").value = Math.round(z);
}

function kvadrat(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById("rezultat").value = x * x;
}


//Napisatiu u info da radi samo u stepenima, dodati opciju da radi u radianima -> umesto Math.sin(x * Math.PI / 180) ide samo Math.sin(x)!
function sin(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById("rezultat").value = Math.sin(x * Math.PI / 180);
}

function cos(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById("rezultat").value = Math.cos(x * Math.PI / 180);
}
 
function tan(){
	var x = document.getElementById("prvibroj").value;
	document.getElementById("rezultat").value = Math.tan(x * Math.PI / 180);
}

function rand10(){
	document.getElementById("rezultat").value = Math.floor(Math.random() * 11);
}

function rand100(){
	document.getElementById("rezultat").value = Math.floor(Math.random() * 101);
}


// Sredi ovo!!!
function randxy(prvibroj, drugibroj){
	var x = int(document.getElementById("prvibroj").value);
	var y = int(document.getElementById("drugibroj").value);
	document.getElementById("rezultat").value = Math.floor(Math.random() * (y - x)) + x;
}


function c(){
	document.getElementById('prvibroj').value = ""
	document.getElementById('drugibroj').value = ""
	document.getElementById('rezultat').value = ""
	document.getElementById('znak').innerHTML = ""
}

// ----------Skripte za štopericu
var time = 0;
var running = 0;

function StopericastartPause(){
	if (running == 0){
		running = 1;
		incrementStoperica();
		document.getElementById("StopericastartPause").innerHTML = "Pauziraj";
	}
	else{
		running = 0;
		document.getElementById("StopericastartPause").innerHTML = "Nastavi";
	}
}

function StopericaReset(){
	document.getElementById("output").style.fontSize = "24pt";
	running = 0;
	time = 0;
	document.getElementById("StopericastartPause").innerHTML = "Pocni";
	document.getElementById("StopericaZastave").innerHTML = "";
	setTimeout(function(){
			document.getElementById("output").innerHTML = "0:00:00:0"
		}, 100)
}

function incrementStoperica(){
	if (running == 1){
		setTimeout(function(){
			time++;
			var sati = Math.floor(time/10/60/60)
			var minutes = Math.floor(time/10/60)
			var seconds = Math.floor(time/10 % 60)
			var desetine = time % 10

			if (minutes < 10){
				minutes = "0" + minutes
			}

			if (seconds < 10){
				seconds = "0" + seconds
			}

			document.getElementById("output").innerHTML = sati + ":" + minutes + ":" + seconds + ":" + desetine;
			incrementStoperica();
		}, 100)
	}
}

function StopericaZastava() {
	var li = document.createElement("LI")
	var x = document.getElementById("output").innerHTML
	var lix = document.createTextNode(x)
	var ol = document.getElementById("StopericaZastave")
	li.appendChild(lix)
	ol.appendChild(li)
}

var StopericaMove_01 = 0;

function StopericaMove() {
	if(StopericaMove_01 == 0){
		StopericaMove_01 += 1;
		document.getElementById("StopericaMove").innerHTML = "Vrati nazad";
		StopericaDesnoInterval = setInterval(function(){
			var Stopericaa1 = document.getElementById("output").innerHTML
				document.getElementById("StopericaMoved").innerHTML = Stopericaa1
			}, 100)	
	} else if (StopericaMove_01 == 1){
		StopericaMove_01 -= 1;
		clearInterval(StopericaDesnoInterval);
		document.getElementById("StopericaMove").innerHTML = "Premesti desno";
		document.getElementById("StopericaMoved").innerHTML = "";
	}
		
}

function Stoperica_Povecaj(){
	document.getElementById("output").style.fontSize = "48pt";
}

function Stoperica_NormalSize(){
	document.getElementById("output").style.fontSize = "28pt";
}

function Stoperica_Smanji(){
	document.getElementById("output").style.fontSize = "16pt";
}
// ----------Skripte za RANDOM operacije

function RandomRadio1(){
	document.getElementById("Boje").style.display = "none"
	document.getElementById("Random").style.display = "block"
	document.getElementById("radioContent4").checked = "true"
	document.getElementById('Random1x').style.display = 'block'
	document.getElementById('Random2x').style.display = 'none'
	document.getElementById('Random3x').style.display = 'none'
	document.getElementById('Random4x').style.display = 'none'
	document.getElementById('Random5x').style.display = 'none'
	document.getElementById('Random6x').style.display = 'none'
}

function RandomRadio2(){
	document.getElementById('Random1x').style.display = 'none'
	document.getElementById('Random2x').style.display = 'block'
	document.getElementById('Random3x').style.display = 'none'
	document.getElementById('Random4x').style.display = 'none'
	document.getElementById('Random5x').style.display = 'none'
	document.getElementById('Random6x').style.display = 'none'
}

function RandomRadio3(){
	document.getElementById('Random1x').style.display = 'none'
	document.getElementById('Random2x').style.display = 'none'
	document.getElementById('Random3x').style.display = 'block'
	document.getElementById('Random4x').style.display = 'none'
	document.getElementById('Random5x').style.display = 'none'
	document.getElementById('Random6x').style.display = 'none'
}

function RandomRadio4(){
	document.getElementById('Random1x').style.display = 'none'
	document.getElementById('Random2x').style.display = 'none'
	document.getElementById('Random3x').style.display = 'none'
	document.getElementById('Random4x').style.display = 'block'
	document.getElementById('Random5x').style.display = 'none'
	document.getElementById('Random6x').style.display = 'none'
}

function RandomRadio5(){
	document.getElementById('Random1x').style.display = 'none'
	document.getElementById('Random2x').style.display = 'none'
	document.getElementById('Random3x').style.display = 'none'
	document.getElementById('Random4x').style.display = 'none'
	document.getElementById('Random5x').style.display = 'block'
	document.getElementById('Random6x').style.display = 'none'
}

function RandomRadio6(){
	document.getElementById('Random1x').style.display = 'none'
	document.getElementById('Random2x').style.display = 'none'
	document.getElementById('Random3x').style.display = 'none'
	document.getElementById('Random4x').style.display = 'none'
	document.getElementById('Random5x').style.display = 'none'
	document.getElementById('Random6x').style.display = 'block'
}

// Random boja:

function RandomBoja() {
	var rndcolor1 = Math.floor(Math.random() * 256);
	var rndcolor2 = Math.floor(Math.random() * 256);
	var rndcolor3 = Math.floor(Math.random() * 256);
	document.getElementById("RandomBojaDiv").style.borderRadius = "50%"
	document.getElementById("RandomBojaDiv").style.padding = "10%"
	document.getElementById("RandomBojaDiv").style.width = "10%"
	document.getElementById("RandomBojaDiv").style.height = "10%"
	document.getElementById("RandomBojaDiv").style.background = "rgb(" + rndcolor1 + "," + rndcolor2 + "," + rndcolor3 + ")"
	document.getElementById("RandomBoja_brojke").innerHTML ="rgb(" + rndcolor1 + "," + rndcolor2 + "," + rndcolor3 + ")"
	document.getElementById("RandomBoja_brojke").style.padding = "1"
}

// Generisanje brojeva:
function Random10(){
	document.getElementById("rešenje").value = Math.floor(Math.random() * 11);
}

function Random100(){
	document.getElementById("rešenje").value = Math.floor(Math.random() * 101);
}

function RandomNiz10() {

}

var Random1xSabiranjebroj1;
var Random1xSabiranjebroj2;
var Random1xSabiranjePoeni = 0;
var Random1xSabiranjeInterval = null;

// Skripte za Drustvenu Kockicu

function RandomKockica() {
	document.getElementById("RandomKockicaDiv").style.display = "block"
	var rndcube = Math.floor(Math.random() * 7)
	var rndcube2 = Math.floor(Math.random() * 7)
	var rndcube3 = Math.floor(Math.random() * 7)
	var rndcube4 = Math.floor(Math.random() * 7)
	var rndcube5 = Math.floor(Math.random() * 7)
	var rndcubebr = document.getElementById("Random1x_Br_Kock").value
		if (rndcubebr == 1) {
			document.getElementById("RandomKockicaSlika2").src = "";
			document.getElementById("RandomKockicaSlika3").src = "";
			document.getElementById("RandomKockicaSlika4").src = "";
			document.getElementById("RandomKockicaSlika5").src = "";
			if (rndcube == 1) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube == 2) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube == 3) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube == 4) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube == 5) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube == 6) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice6.png";
			}
		}
		if (rndcubebr == 2) {
			document.getElementById("RandomKockicaSlika3").src = "";
			document.getElementById("RandomKockicaSlika4").src = "";
			document.getElementById("RandomKockicaSlika5").src = "";
			if (rndcube == 1) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube == 2) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube == 3) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube == 4) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube == 5) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube == 6) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube2 == 1) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube2 == 2) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube2 == 3) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube2 == 4) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube2 == 5) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube2 == 6) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice6.png";
			}
		}	

		if (rndcubebr == 3) {
			document.getElementById("RandomKockicaSlika4").src = "";
			document.getElementById("RandomKockicaSlika5").src = "";
			if (rndcube == 1) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube == 2) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube == 3) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube == 4) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube == 5) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube == 6) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube2 == 1) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube2 == 2) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube2 == 3) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube2 == 4) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube2 == 5) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube2 == 6) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube3 == 1) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube3 == 2) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube3 == 3) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube3 == 4) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube3 == 5) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube3 == 6) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice6.png";
			}
		}	

		if (rndcubebr == 4) {
			document.getElementById("RandomKockicaSlika5").src = "";
			if (rndcube == 1) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube == 2) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube == 3) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube == 4) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube == 5) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube == 6) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube2 == 1) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube2 == 2) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube2 == 3) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube2 == 4) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube2 == 5) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube2 == 6) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube3 == 1) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube3 == 2) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube3 == 3) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube3 == 4) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube3 == 5) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube3 == 6) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube4 == 1) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube4 == 2) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube4 == 3) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube4 == 4) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube4 == 5) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube4 == 6) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice6.png";
			}
		}

		if (rndcubebr == 5) {
			if (rndcube == 1) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube == 2) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube == 3) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube == 4) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube == 5) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube == 6) {
				document.getElementById("RandomKockicaSlika").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube2 == 1) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube2 == 2) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube2 == 3) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube2 == 4) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube2 == 5) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube2 == 6) {
				document.getElementById("RandomKockicaSlika2").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube3 == 1) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube3 == 2) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube3 == 3) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube3 == 4) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube3 == 5) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube3 == 6) {
				document.getElementById("RandomKockicaSlika3").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube4 == 1) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube4 == 2) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube4 == 3) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube4 == 4) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube4 == 5) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube4 == 6) {
				document.getElementById("RandomKockicaSlika4").src = "https://www.random.org/dice/dice6.png";
			}

			if (rndcube5 == 1) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice1.png";
			} else if (rndcube5 == 2) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice2.png";
			} else if (rndcube5 == 3) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice3.png";
			} else if (rndcube5 == 4) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice4.png";
			} else if (rndcube5 == 5) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice5.png";
			} else if (rndcube5 == 6) {
				document.getElementById("RandomKockicaSlika5").src = "https://www.random.org/dice/dice6.png";
			}
		}
}

// Skripte za bacanje novcica

function RandomNovcic() {
	var rndnovcic = Math.floor(Math.random() * 3)
	if (rndnovcic == 1) {
		document.getElementById("RandomNovcicSlika").src = "https://www.random.org/coins/faces/60-yud/20para/reverse.jpg";
	} else if (rndnovcic == 2) {
		document.getElementById("RandomNovcicSlika").src = "https://www.random.org/coins/faces/60-yud/20para/obverse.jpg";
	}
}

var Random1xSabiranjeVreme = 12;
var Random1xSabiranjeVreme1 = null;

function RandomSabiranje() {
	document.getElementById("RandomSabiranje").disabled = true
	document.getElementById("Random1xSabiranje").style.display = "block";
	Random1xSabiranjebroj1 = Math.floor(Math.random() * 1000);
	Random1xSabiranjebroj2 = Math.floor(Math.random() * 1000);
	document.getElementById("RandomSabiranjeBrojevi").innerHTML = Random1xSabiranjebroj1 + " + " + Random1xSabiranjebroj2 + " = ";
	Random1xSabiranjeInterval = setInterval(function () {
		
		Random1xSabiranjebroj1 = Math.floor(Math.random() * 1000);
		Random1xSabiranjebroj2 = Math.floor(Math.random() * 1000);
		document.getElementById("RandomSabiranjeBrojevi").innerHTML = Random1xSabiranjebroj1 + " + " + Random1xSabiranjebroj2 + " = ";
		Random1xSabiranjePoeni -= 1
		document.getElementById("Random1xSabiranjePoeniP").innerHTML = "Broj poena: " + Random1xSabiranjePoeni;
		document.getElementById("Random1xSabiranjeVodic").innerHTML = "Vreme je isteklo, gubis 1 poen!";
	}, 12000)

	Random1xSabiranjeVreme1 = setInterval(function () {
		Random1xSabiranjeVreme -= 1;
		document.getElementById("Random1xSabiranjeVreme").innerHTML = "Preostalo vreme: " + Random1xSabiranjeVreme;
		if(Random1xSabiranjeVreme == 0) {
			Random1xSabiranjeVreme = 12;
		}
	}, 1000)

}

function RandomSabiranjeReset() {
	clearInterval(Random1xSabiranjeInterval);
	clearInterval(Random1xSabiranjeVreme1);
	Random1xSabiranjeVreme = 12
	document.getElementById("Random1xSabiranje").style.display = "none";
	document.getElementById("RandomSabiranje").disabled = false
}

function RandomSabiranjeCheck() {
	var provera = document.getElementById("RandomSabiranjeUpisivanje").value;
	if (provera == Random1xSabiranjebroj1 + Random1xSabiranjebroj2) {
		++Random1xSabiranjePoeni;
		document.getElementById("Random1xSabiranjeVodic").innerHTML = "Bravo, to je tacno!";
		document.getElementById("RandomSabiranjeUpisivanje").value = "";
		document.getElementById("Random1xSabiranjePoeniP").innerHTML = "Broj poena: " + Random1xSabiranjePoeni;
		clearInterval(Random1xSabiranjeInterval);
		clearInterval(Random1xSabiranjeVreme1);
		RandomSabiranje();
		
	}else if (provera == "") {
		alert("Prvo upisi svoje resenje!");
	} else {
		--Random1xSabiranjePoeni;
		document.getElementById("Random1xSabiranjeVodic").innerHTML = "Tvoj broj je netacan, pokusaj ponovo!";
		document.getElementById("RandomSabiranjeUpisivanje").value = "";
		document.getElementById("Random1xSabiranjePoeniP").innerHTML = "Broj poena: " + Random1xSabiranjePoeni;
	}
}


// Ukljuci/iskljuci objasnjenje!
var asd = 0
function Random3xInfo() {
	if (asd == 0){
		document.getElementById("Random3xInfoP").style.display = 'block'
		document.getElementById("Random3xInfo").value = 'Hvala na objasnjenju'
		asd += 1
	} else if (asd == 1){
		document.getElementById("Random3xInfoP").style.display = 'none'
		document.getElementById("Random3xInfo").value = 'Objasnjenje'
		asd -= 1
	}
}


// Skripte za Igru za pogađanje broja!
var pokusaji = 0;
var computer = Math.floor(Math.random() * 10001);
var Random3xN = 0;

function Random3x() {
	pokusaji += 1;
	document.getElementById("Random3xPokusaji").innerHTML = "Broj pokusaja: " + pokusaji;
	var user = document.getElementById("Random3xNumber").value;
	if(Random3xN == 0) {
		if (user < computer) {
			document.getElementById("Random3xVoditelj").innerHTML = "Nas broj je veci od tvog"
			document.getElementById("Random3xPotvrdi").value = "Potvrdi"
			document.getElementById("Random3xNumber").value = ""
		} else if (user == computer) {
			alert("Bravo, pogodio si nas broj!");
			document.getElementById("Random3xVoditelj").innerHTML = "Pogodio si nas broj iz " + pokusaji + "." + " pokusaja!";
			pokusaji = 0;
			computer = Math.floor(Math.random() * 10001);
			document.getElementById("Random3xPotvrdi").value = "Ponovo!";
			document.getElementById("Random3xNumber").value = "";
		} else if (user == "") {
			alert("Prvo napisi neki broj!");
		} else {
			document.getElementById("Random3xVoditelj").innerHTML = "Nas broj je manji od tvog";
			document.getElementById("Random3xPotvrdi").value = "Potvrdi";
			document.getElementById("Random3xNumber").value = "";
		}
	} else if (Random3xN == 1) {
		if (user < computer) {
			document.getElementById("Random3xVoditelj").innerHTML = "Nas broj je veci od tvog";
			document.getElementById("Random3xPotvrdi").value = "Potvrdi";
			document.getElementById("Random3xNumber").value = "";
		} else if (user == computer) {
			alert("Bravo, pogodio si nas broj!");
			document.getElementById("Random3xVoditelj").innerHTML = "Pogodio si nas broj iz " + pokusaji + "." + " pokusaja!";
			pokusaji = 0;
			computer = Math.floor(Math.random() * Random3xPromena);
			document.getElementById("Random3xPotvrdi").value = "Ponovo!";
			document.getElementById("Random3xNumber").value = "";
		} else if (user == "") {
			alert("Prvo napisi neki broj!");
		} else {
			document.getElementById("Random3xVoditelj").innerHTML = "Nas broj je manji od tvog";
			document.getElementById("Random3xPotvrdi").value = "Potvrdi";
			document.getElementById("Random3xNumber").value = "";
		}
	}	
}

// Opcije za igru pogađanja broja
var Random3xOpcije_varijabla = 0;
function Random3xOpcije() {
	if (Random3xOpcije_varijabla == 0) {
		document.getElementById("Random3xOpcije").style.display = "block";
		document.getElementById("Random3xPromena").value = "X";
		document.getElementById("Random3xPromena").style.backgroundColor = "red";
		Random3xOpcije_varijabla += 1;
	} else {
		document.getElementById("Random3xOpcije").style.display = "none";
		document.getElementById("Random3xPromena").value = "Opcije";
		document.getElementById("Random3xPromena").style.backgroundColor = "";
		Random3xOpcije_varijabla -= 1;
	}
}

function Random3xPromena() {
	document.getElementById("Random3xOpcije").style.display = "none";
	Random3xN = 1;
	var Random3xPromena = document.getElementById("Random3xPromenaUser").value;
	computer = Math.floor(Math.random() * Random3xPromena);
	pokusaji = 0;
	document.getElementById("Random3xPokusaji").innerHTML = "Broj pokusaja: " + pokusaji;
	document.getElementById("Random3x(x-y)").innerHTML = "Upisi broj od 1 do " + Random3xPromena + ":";
	document.getElementById("Random3xVoditelj").innerHTML = "Izabrao si novi interval, pocni sa pogadjanjem..."
}

// Skripte za Project /GG/ - Glavni gradovi

var svedrzave = {Albanija: "Tirana", Andora: "Andora", Austrija: "Bec", Belgija: "Brisel" , Belorusija: "Minsk", Bosna_i_Hercegovina: "Sarajevo", Bugarska: "Sofija", Vatikan: "Vatikan", Gruzija: "Tbilisi", Grcka: "Atina", Danska: "Kopenhagen", Estonija: "Talin", Irska: "Dablin", Island: "Rejkjavik", Italija: "Rim", Jermenija: "Jerevan", Kipar: "Nikozija", Letonija: "Riga", Litvanija: "Vilnjus", Lihtenstajn: "Vaduc", Luksemburg: "Luksemburg", Madjarska: "Budimpesta", Makedonija: "Skoplje", Malta: "Valeta", Moldavija: "Kisinjev", Monako: "Monako", Nemacka: "Berlin", Norveska: "Oslo", Poljska: "Varsava", Portugalija: "Lisabon", Rumunija: "Bukurest", Rusija: "Moskva", San_Marino: "San Marino", Slovacka: "Bratislava", Slovenija: "Ljubljana", Srbija: "Beograd", Turska: "Ankara", Engleska: "London", Ukrajna: "Kijev", Finska: "Helsinki", Francuska: "Pariz", Holandija: "Amsterdam", Hrvatska: "Zagreb", Crna_Gora: "Podgorica", Ceska: "Prag", Svajcerska: "Bern", Svedska: "Stokxolm", Spanija: "Madrid", Argentina: "Buenos Ajres", Bolivija: "La Paz", Brazil: "Brazilija", Venecuela: "Karakas", Gvajana: "Dzordztaun", Ekvador: "Kito", Kolumbija: "Bogota", Paragvaj: "Asunsion", Peru: "Lima", Surinam: "Paramaribo", Urugvaj: "Montevideo", Cile: "Santijago", Francuska_Gvajana: "Kajena", Belize: "Belmopan", Gvatemala: "Gvatemala", "Dominikanska Republika": "Santo Domingo", Salvador: "San Salvador", Kostarika: "San Hoze", Kuba: "Havana", Meksiko: "Meksiko Siti", Nikaragva: "Managva", Panama: "Panama", Haiti: "Port o Prens", Honduras: "Tegusigalpa", SAD: "Vasington", Kanada: "Otava", Avganistan: "Kabul", Azerbejdzan: "Baku", Banglades: "Daka", Bahrein: "Manama", Butan: "Timbu", Vijetnam: "Hanoj", Gruzija: "Tbilisi", Izreal: "Jerusalim", Indija: "Nju Delhi", Indonezija: "džakarta", Irak: "Bagdad", Iran: "Teheran", Istocni_Timor: "Dili", Japan: "Tokio", Jemen: "Sana", Jermenija: "Jerevan", Jordan: "Aman", "Juzna Koreja": "Seul", "Kazahstan": "Astana", Kambodza: "Pnom Pen", Katar: "Doha", Kina: "Peking", Kipar: "Nikozija", Kirgistan: "Biskek", Kuvajt: "Kuvajt", Laos: "Vijentijan", Liban: "Bejrut", Maldivi: "Male", Melezija: "Kuala Lumpur", Mjanmar: "Nejpjido", Mongolija: "Ulan Bator", Nepal: "Katmandu", Pakistan: "Islamabad", Oman: "Maskat", Rusija: "Moskva", Saudijska_Arabija: "Rijad", Severna_Koreja: "Pjongjang", Singapur: "Singapur", Sirija: "Damask", Tajland: "Bangkok", Tadzikistan: "Dusanbe", Turkmenistan: "Ashabad", Turska: "Ankara", Uzbekistan: "Taskent", Filipini: "Manila", Ujedinjeni_Arapski_Emirati: "Abu Dabi",Alzir: "Alzir", Angola: "Loanda", Benin: "Porto Novo", Bocvana: "Gaborone", Burkina_Faso: "Uagadugu", Borundi: "Budzumbura", Gabon: "Librvil", Gambija: "Bandzul", Gana: "Akra", Gvineja: "Konakri", Gvineja_Bisao: "Bisau", Egipat: "Kairo", Ekvatorijalna_Gvineja: "Malabo", Eritreja: "Asmara", Etiopija: "Adis Abeba", Zambija: "Lusaka", Zelenortska_Ostrva: "Praja", Zimbabve: "Harare", Juznoafricka_Republika: "Pretorija", Juzni_Sudan: "Dzuba", Kamerun: "Jaunde", Kenija: "Naerobi", Kongo: "Brazavil", DR_Kongo: "Kinsasa", Komori: "Moroni", Lesoto: "Maseru", Liberija: "Monrovija", Libija: "Tripoli", Madagaskar: "Antananarivo", Malavi: "Lilongve", Mali: "Bamako", Moroko: "Rabat", Mauritanija: "Nuaksot", Mauricijus: "Port Luis", Mozambik: "Maputo", Namibija: "Vindhuk", Nigerija: "Abudza", Niger: "Nijamej", Obala_Slonovace: "Jamasukro", Ruanda: "Kigali", Sijera_Leone: "fritaun", Senegal: "Dakar", Somalija: "Mogadisu", Sudan: "Kartun", Svazilend: "Mbabane", Tanzanija: "Dodoma", Togo: "Lome", Tunis: "Tunis", Uganda: "Kampala", Centralnoafricka_Republika: "Bangi", Cad: "Ndzamena", Dzibuti: "Dzibuti", Maroko: "Rabat" };

var evropa = {Albanija: "Tirana", Andora: "Andora", Austrija: "Bec", Belgija: "Brisel" , Belorusija: "Minsk", Bosna_i_Hercegovina: "Sarajevo", Bugarska: "Sofija", Vatikan: "Vatikan", Gruzija: "Tbilisi", Grcka: "Atina", Danska: "Kopenhagen", Estonija: "Talin", Irska: "Dablin", Island: "Rejkjavik", Italija: "Rim", Jermenija: "Jerevan", Kipar: "Nikozija", Letonija: "Riga", Litvanija: "Vilnjus", Lihtenstajn: "Vaduc", Luksemburg: "Luksemburg", Madjarska: "Budimpesta", Makedonija: "Skoplje", Malta: "Valeta", Moldavija: "Kisinjev", Monako: "Monako", Nemacka: "Berlin", Norveska: "Oslo", Poljska: "Varsava", Portugalija: "Lisabon", Rumunija: "Bukurest", Rusija: "Moskva", San_Marino: "San Marino", Slovacka: "Bratislava", Slovenija: "Ljubljana", Srbija: "Beograd", Turska: "Ankara", Engleska: "London", Ukrajna: "Kijev", Finska: "Helsinki", Francuska: "Pariz", Holandija: "Amsterdam", Hrvatska: "Zagreb", Crna_Gora: "Podgorica", Ceska: "Prag", Svajcerska: "Bern", Svedska: "Stokxolm", Spanija: "Madrid"};
var l_amerika = {Argentina: "Buenos Ajres", Bolivija: "La Paz", Brazil: "Brazilija", Venecuela: "Karakas", Gvajana: "Dzordztaun", Ekvador: "Kito", Kolumbija: "Bogota", Paragvaj: "Asunsion", Peru: "Lima", Surinam: "Paramaribo", Urugvaj: "Montevideo", Cile: "Santijago", Francuska_Gvajana: "Kajena", Belize: "Belmopan", Gvatemala: "Gvatemala", Dominikanska_Republika: "Santo Domingo", Salvador: "San Salvador", Kostarika: "San Hoze", Kuba: "Havana", Meksiko: "Meksiko Siti", Nikaragva: "Managva", Panama: "Panama", Haiti: "Port o Prens", Honduras: "Tegusigalpa"};
var a_amerika = {SAD: "Vasington", Kanada: "Otava"};
var azija = {Avganistan: "Kabul", Azerbejdzan: "Baku", Banglades: "Daka", Bahrein: "Manama", Butan: "Timbu", Vijetnam: "Hanoj", Gruzija: "Tbilisi", Izreal: "Jerusalim", Indija: "Nju Delhi", Indonezija: "dzakarta", Irak: "Bagdad", Iran: "Teheran", Istocni_Timor: "Dili", Japan: "Tokio", Jemen: "Sana", Jermenija: "Jerevan", Jordan: "Aman", "Juzna Koreja": "Seul", "Kazahstan": "Astana", Kambodza: "Pnom Pen", Katar: "Doha", Kina: "Peking", Kipar: "Nikozija", Kirgistan: "Biskek", Kuvajt: "Kuvajt", Laos: "Vijentijan", Liban: "Bejrut", Maldivi: "Male", Melezija: "Kuala Lumpur", Mjanmar: "Nejpjido", Mongolija: "Ulan Bator", Nepal: "Katmandu", Pakistan: "Islamabad", Oman: "Maskat", Rusija: "Moskva", Saudijska_Arabija: "Rijad", Severna_Koreja: "Pjongjang", Singapur: "Singapur", Sirija: "Damask", Tajland: "Bangkok", Tadzikistan: "Dusanbe", Turkmenistan: "Ashabad", Turska: "Ankara", Uzbekistan: "Taskent", Filipini: "Manila", Ujedinjeni_Arapski_Emirati: "Abu Dabi"}
var afrika = {Alzir: "Alzir", Angola: "Loanda", Benin: "Porto Novo", Bocvana: "Gaborone", Burkina_Faso: "Uagadugu", Borundi: "Budzumbura", Gabon: "Librvil", Gambija: "Bandzul", Gana: "Akra", Gvineja: "Konakri", Gvineja_Bisao: "Bisau", Egipat: "Kairo", Ekvatorijalna_Gvineja: "Malabo", Eritreja: "Asmara", Etiopija: "Adis Abeba", Zambija: "Lusaka", Zelenortska_Ostrva: "Praja", Zimbabve: "Harare", Juznoafricka_Republika: "Pretorija", Juzni_Sudan: "Dzuba", Kamerun: "Jaunde", Kenija: "Naerobi", Kongo: "Brazavil", DR_Kongo: "Kinsasa", Komori: "Moroni", Lesoto: "Maseru", Liberija: "Monrovija", Libija: "Tripoli", Madagaskar: "Antananarivo", Malavi: "Lilongve", Mali: "Bamako", Moroko: "Rabat", Mauritanija: "Nuaksot", Mauricijus: "Port Luis", Mozambik: "Maputo", Namibija: "Vindhuk", Nigerija: "Abudza", Niger: "Nijamej", Obala_Slonovace: "Jamasukro", Ruanda: "Kigali", Sijera_Leone: "fritaun", Senegal: "Dakar", Somalija: "Mogadisu", Sudan: "Kartun", Svazilend: "Mbabane", Tanzanija: "Dodoma", Togo: "Lome", Tunis: "Tunis", Uganda: "Kampala", Centralnoafricka_Republika: "Bangi", Cad: "Ndzamena", Dzibuti: "Dzibuti", Maroko: "Rabat"}

var finalGG = {};
var GGrnd = 0;
var GGresenje;
var GGpoeni = 0;
var GGdrzava;

function GGPocetak() {
	document.getElementById("GGIzbor").style.display = "block"
	document.getElementById("GGIzvuci").style.display = "inline"
	document.getElementById("GGIzvuci").disabled = true
	document.getElementById("GGIzaberi").style.display = "inline"
	document.getElementById("GGPocetak").style.display = "none"
	document.getElementById("GGProveri").disabled = true
}

function GGIzaberi() {
	document.getElementById("GGIzbor").style.display = "none"
	document.getElementById("GGIzaberi").style.display = "none"
	document.getElementById("GGIzvuci").disabled = false
	document.getElementById("GGInput").style.display = "inline"
	document.getElementById("GGProveri").style.display = "inline"
	document.getElementById("GGProveri").disabled = false
	document.getElementById("GGchange").disabled = false
	if(document.getElementById('Evropa').checked){
		Object.assign(finalGG, evropa)
	} if (document.getElementById('Azija').checked){
		Object.assign(finalGG, azija)
	} if (document.getElementById('Afrika').checked){
		Object.assign(finalGG, afrika)
	} if (document.getElementById('L_Amerika').checked){
		Object.assign(finalGG, l_amerika)
	} if (document.getElementById('A_Amerika').checked){
		Object.assign(finalGG, a_amerika)
	}
}

function GGIzvuci(){
	var GGsize = Object.keys(finalGG).length;
	GGrnd = Math.floor(Math.random() * GGsize);
	GGdrzava = Object.keys(finalGG)[GGrnd];
	GGresenje = finalGG[GGdrzava];
	document.getElementById('GGdemo').innerHTML = "Izvukao si: " + GGdrzava;
}


function GGProveri1(){
	
	if(document.getElementById("GGInput").value == GGresenje){
		GGpoeni += 1;
		document.getElementById("vodicGG").innerHTML =  "Tacan odgovor!" + " Broj poena: " + GGpoeni ;
        GGIzvuci();
    } 
    else {
        GGpoeni -= 1;
        document.getElementById("vodicGG").innerHTML = "Netacan odgovor!" + " Broj poena: " + GGpoeni  + "; Glavni grad drzave " +  GGdrzava + " je " + GGresenje + ".";
        GGIzvuci();
    } 
    document.getElementById("GGInput").value = "";
}

// GG Prvo slovo za input ide veliko
function GG_veliko_slovo() {
	var GGveliko = document.getElementById("GGInput").value
	var GGG = GGveliko.charAt(0).toUpperCase() + GGveliko.slice(1)  // Prvo slovo upisanog ide uppercase + .slice(početak, kraj), u ovom slučaju 1 je nastavak...
	var GGGG = GGG.toString() // Prebacimo ga u String
	document.getElementById("GGInput").value = GGGG.toString() // I nazad u input
}	

// GG Change

function GGchange() {
	GGPocetak();
	finalGG = {};
	GGpoeni = 0;
	document.getElementById('GGdemo').innerHTML = "";
	document.getElementById("GGInput").value = "";
	document.getElementById("vodicGG").innerHTML = "";
}
// Pretraga za GG

function GGPretraga(){
    var input2 = document.getElementById('GGPretraga').value
    resenje2 = svedrzave[input2] 
    document.getElementById('GlavniGrad').innerHTML = resenje2
}
var GGn = 0;

function GGOtvoriPretragu(){
    if(GGn == 0){
    document.getElementById('GGPretragaDiv').style.display = "block"
    document.getElementById('GGbuttonPretragaDiv').value = "Hvala"
    GGn += 1
    } else {
    document.getElementById('GGPretragaDiv').style.display = "none"
    document.getElementById('GGbuttonPretragaDiv').value = "Pretraga"
    GGn -= 1
    }
    
}

// GG sve

var ggSve_varijabla1 = 0;
function GGsve() {
		var gg123;
		if (ggSve_varijabla1 == 0) {
			for (gg123=0; gg123<Object.keys(svedrzave).length; gg123++){
				var ggli = document.createElement("li");
				var ggsvedrzave = Object.keys(svedrzave)[gg123];
				var ggsveresenje = svedrzave[ggsvedrzave];
				
				var gglit = ggsvedrzave + " = " + ggsveresenje;
				var gglit123 = document.createTextNode(gglit)
				ggli.appendChild(gglit123);
				document.getElementById("GGsve_lista").appendChild(ggli);
				ggSve_varijabla1 += 1;
				document.getElementById("GGsve").value = "X";
				document.getElementById("GGsve").style.backgroundColor = "red";
				document.getElementById("GGsve").style.color = "white";
				}
		} else {
			document.getElementById("GGsve_lista").innerHTML = "";
			ggSve_varijabla1 = 0;
			document.getElementById("GGsve").value = "Pokazi sve";
			document.getElementById("GGsve").style.backgroundColor = "";
			document.getElementById("GGsve").style.color = "";

			}
}

// -------- Skripte za Boje:
function changeBoje_jasemenjam_RGB() {
	var bojered = document.getElementById("redslider").value;
	var bojegreen = document.getElementById("greenslider").value;
	var bojeblue = document.getElementById("blueslider").value;
	document.getElementById("Boje_jasemenjam").style.backgroundColor = "rgb(" + bojered + ","+ bojegreen + "," + bojeblue + ")";
	document.getElementById("Boje_jasemenjam_h1").innerHTML = "rgb(" + bojered + ","+ bojegreen + "," + bojeblue + ")";
}
function changeBoje_jasemenjam_HSL() {
	var bojehue = document.getElementById("hueslider").value;
	var bojesaturation = document.getElementById("saturationslider").value;
	var bojelight = document.getElementById("lightslider").value;
	document.getElementById("Boje_jasemenjam").style.backgroundColor = "hsl(" + bojehue + ","+ bojesaturation + "%," + bojelight + "%)";
	document.getElementById("Boje_jasemenjam_h1").innerHTML = "hsl(" + bojehue + ","+ bojesaturation + "%," + bojelight + ")";
}

function changeBoje_jasemenjam_HEX() {
	var bojehex = document.getElementById("boje_hex").value;
	document.getElementById("Boje_jasemenjam").style.backgroundColor = bojehex;
	document.getElementById("Boje_jasemenjam_h1").innerHTML = bojehex;
}

// Boje converter
function boje_converter() {
	var rgb_r1 = document.getElementById("boje_converter_rgb_r");
	var rgb_g1 = document.getElementById("boje_converter_rgb_g");
	var rgb_b1 = document.getElementById("boje_converter_rgb_b");
	var hex_1 = document.getElementById("boje_converter_hex");
	var boje_converter_test = document.getElementById("boje_converter_testboja")
	if(document.activeElement === rgb_r1 || document.activeElement === rgb_g1 || document.activeElement === rgb_b1){
		var rgb_r = parseInt(rgb_r1.value);
		var hex_r = rgb_r.toString(16);
		var rgb_g = parseInt(rgb_g1.value);
		var hex_g = rgb_g.toString(16);
		var rgb_b = parseInt(rgb_b1.value);
		var hex_b = rgb_b.toString(16);
		hex_1.value = hex_r + hex_g + hex_b;
		// test boja se menja:
		boje_converter_test.style.backgroundColor = "#" + hex_1.value;
	} else if (document.activeElement === hex_1){
		//Crvena
		hex_r = hex_1.value.substring(0,2);
		hex_r = parseInt(hex_r, 16); // parseInt(ovde ide broj, ovde ide radx - osnova tog broja)
		rgb_r1.value = hex_r.toString(10); // ovde ide osnova koju želimo :)
		//Zelena
		hex_g = hex_1.value.substring(2,4);
		hex_g = parseInt(hex_g, 16);
		rgb_g1.value = hex_g.toString(10);
		//Plava
		hex_b = hex_1.value.substring(4,6);
		hex_b = parseInt(hex_b, 16);
		rgb_b1.value = hex_b.toString(10);
		// test boja se menja:
		boje_converter_test.style.backgroundColor = "#" + hex_1.value;
	}
}

// ----------Skripte za TO-DO
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function todonewElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Prvo napisi nesto");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      if (document.getElementById("arhiviranje").checked) {
            var liarc = document.createElement("li");
            var xarc = this.parentElement.innerText
            var tarc = document.createTextNode(xarc);
            liarc.appendChild(tarc);
            document.getElementById("arhiva").appendChild(liarc);
        }
    }
  }
}

// Funkcija za promenu imena liste
function todonamechange1(){
	document.getElementById("todonameinput1").style.display = "inline";
	document.getElementById("todonameinput2").style.display = "inline";
}

function todonamechange2(){
	var x = document.getElementById("todonameinput1").value
	document.getElementById("todoname").innerHTML = x
	document.getElementById("todonameinput1").style.display = "none";
	document.getElementById("todonameinput2").style.display = "none";
}

// Arhiva za To-Do listu


function cleararc() {
    document.getElementById("arhiva").innerHTML = ""
}

// Skripte za Virtuelne brojke


function changeVirtual1(){
  if(document.getElementById('virtualRadio1').checked){
    document.getElementById('prvibroj').disabled = false
    document.getElementById('drugibroj').disabled = true
  }
}

function changeVirtual2(){
  if(document.getElementById('virtualRadio2').checked){
    document.getElementById('prvibroj').disabled = true
    document.getElementById('drugibroj').disabled = false
  }

}

function clearr(){
  document.getElementById('prvibroj').value = ""
  document.getElementById('drugibroj').value = ""
}

function addnumber(x){
  if(document.getElementById('virtualRadio1').checked){
    var display1 = document.getElementById('prvibroj')
    var number = display1.value
    display1.value = number + x
    }
  else if (document.getElementById('virtualRadio2').checked){
    var display2 = document.getElementById('drugibroj')
    var number = display2.value
    display2.value = number + x
  }
}


// -------------- Skripte za Pomodoro
var PomInterval = null;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    PomInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function Pom25 () {
    var twentyfiveMinutes = 60 * 25,
        display = document.getElementById('PomOutput');
    startTimer(twentyfiveMinutes, display);
    document.getElementById("Pom5").disabled = true;
    document.getElementById("Pom15").disabled = true;
    document.getElementById("Pom25").disabled = true;
}

function Pom5 () {
    var fiveMinutes = 60 * 5,
        display = document.getElementById('PomOutput');
    startTimer(fiveMinutes, display);
    document.getElementById("Pom5").disabled = true;
    document.getElementById("Pom15").disabled = true;
    document.getElementById("Pom25").disabled = true;
}

function Pom15 () {
    var fifteenMinutes = 60 * 15,
        display = document.getElementById('PomOutput');
    startTimer(fifteenMinutes, display);
    document.getElementById("Pom5").disabled = true;
    document.getElementById("Pom15").disabled = true;
    document.getElementById("Pom25").disabled = true;
}

function PomResett () {
	clearInterval(PomInterval);
	document.getElementById("PomOutput").innerHTML = "00:00";
	alert("Prekinuo si Pomodoro");
	document.getElementById("Pom5").disabled = false;
    document.getElementById("Pom15").disabled = false;
    document.getElementById("Pom25").disabled = false;
}

var PomObjasnjenje3 = 0;
function PomObjasnjenje() {
	if (PomObjasnjenje3==0) {
		PomObjasnjenje3 += 1;
		document.getElementById("PomObjasnjenje").value = "Sada znam, hvala!";
		document.getElementById("PomObjasnjenjeText").innerHTML = "Klikni na Novi Pomodoro da zapocnes sesiju od 25 minuta; za to vreme radi iskljucivo jednu aktivnost; kada se tajmer zaustavi napravi kratku(5 minuta) ili dugu(15 minuta) pauzu, i ceo taj proces ponovi 5 puta";
	} else if (PomObjasnjenje3==1) {
		PomObjasnjenje3 -= 1;
		document.getElementById("PomObjasnjenje").value = "Nauka iza ?";
		document.getElementById("PomObjasnjenjeText").innerHTML = "/";
	}
}

// Experiimentssssssssss
// Alllll tooools mode!

function alltools() {
	document.getElementById("column-left").style.display = "none";
	document.getElementById("column-right").style.display = "none";
	document.getElementById("column-center").style.width = "100%";
	document.getElementById("uvod").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("marquee1").style.display = "none";
	document.getElementById("column-center-text").style.display = "none";
	document.getElementById('Calculator').style.display = 'inline-block'
	document.getElementById('Calculator').style.borderStyle = 'solid'
	document.getElementById('Stoperica').style.display = 'inline-block'
	document.getElementById('Stoperica').style.borderStyle = 'solid'
	document.getElementById('To-Do').style.display = 'inline-block'
	document.getElementById('To-Do').style.borderStyle = 'solid'
	document.getElementById('Random').style.display = 'inline-block'
	document.getElementById('Random').style.borderStyle = 'solid'
	document.getElementById('Pomodoro').style.display = 'inline-block'
	document.getElementById('Pomodoro').style.borderStyle = 'solid'
	document.getElementById('Boje').style.display = 'inline-block'
	document.getElementById('Boje').style.borderStyle = 'solid'
}
// marginee
function bodyfitme() {
	document.body.style.margin = "5%";
}

// borderss

function allborders(){
	var xs = document.getElementsByTagName('div');
	var is = [];
	for (is=0; is<xs.length; is++){
			xs[is].style.border = '1px solid black'
	}
	document.getElementById("column-left").style.width="24.5%"
}

// ----------Skripte za ostale elemente sajta
function changeContent0(){
	document.getElementById('Home').style.display = 'block'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'none'
}


function changeContent1(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'block'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'none'
}

function changeContent2(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'block'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'none'
}

function changeContent3(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'block'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'none'
}

function changeContent4(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'block'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'none'
}

function changeContent5(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'block'
	document.getElementById('Boje').style.display = 'none'
}

function changeContent6(){
	document.getElementById('Home').style.display = 'none'
	document.getElementById('Calculator').style.display = 'none'
	document.getElementById('Stoperica').style.display = 'none'
	document.getElementById('To-Do').style.display = 'none'
	document.getElementById('Random').style.display = 'none'
	document.getElementById('Pomodoro').style.display = 'none'
	document.getElementById('Boje').style.display = 'block'
}


function changeTheme1(){
	document.getElementById('radioTheme1').checked = true
	document.getElementById('pagestyle').setAttribute('href', "style.css")
	document.getElementById("Body").style.background = "linear-gradient(var(--bckgrsmer), var(--bckgr1), var(--bckgr2))"
	var accentClass = document.getElementsByClassName("accent")
	for (d=0; d<accentClass.length; d++) {
		accentClass[d].style.color = "cyan";
	}
	var importantClass = document.getElementsByClassName("important")
	for (g=0; g<importantClass.length; g++) {
		importantClass[g].style.setProperty("--accent-color", "cyan");
	}
	var default_inputClass = document.getElementsByClassName("default_input")
	for (g=0; g<default_inputClass.length; g++) {
		default_inputClass[g].style.setProperty("--accent-color", "cyan");
		}
}


function changeTheme2(){
	document.getElementById('radioTheme2').checked = true
	document.getElementById('pagestyle').setAttribute('href', "style2.css")
	document.getElementById("changeBackground").style.display = "none"
	document.getElementById("Body").style.background = "#fff"
	var accentClass = document.getElementsByClassName("accent")
	for (d=0; d<accentClass.length; d++) {
		accentClass[d].style.color = "#000000";
	}
	var importantClass = document.getElementsByClassName("important")
	for (g=0; g<importantClass.length; g++) {
		importantClass[g].style.setProperty("--accent-color", "#000000");
	}
	var default_inputClass = document.getElementsByClassName("default_input")
	for (g=0; g<default_inputClass.length; g++) {
		default_inputClass[g].style.setProperty("--accent-color", "#000000");
	}
}

function changeTheme3(){
	document.getElementById('radioTheme3').checked = true
	document.getElementById('pagestyle').setAttribute('href', "style3.css")
	document.getElementById("changeBackground").style.display = "none"
	document.getElementById("Body").style.background = "#000"
	var accentClass = document.getElementsByClassName("accent")
	for (d=0; d<accentClass.length; d++) {
		accentClass[d].style.color = "#00ff00";
	}
	var importantClass = document.getElementsByClassName("important")
	for (g=0; g<importantClass.length; g++) {
		importantClass[g].style.setProperty("--accent-color", "#00ff00");
	}
	var default_inputClass = document.getElementsByClassName("default_input")
	for (g=0; g<default_inputClass.length; g++) {
		default_inputClass[g].style.setProperty("--accent-color", "#00ff00");
	}
}

// potreban je loop da bi se cela klasa promenila
function checkColumn(){
	var x = document.getElementsByClassName('column');
	var i = []
	for (i=0; i<x.length; i++){
		if(document.getElementById('checkColumn').checked){
			x[i].style.display = 'none'
		}
		else{
			x[i].style.display = 'block'
		}
	}
}
	
function checkInfo1(){
	var x = document.getElementsByClassName('info');
	var i = []
	for (i=0; i<x.length; i++){
		if(document.getElementById('checkInfo').checked){
			x[i].style.display = 'none'
		}
		else{
			x[i].style.display = 'block'
		}
	}
}


function checkMarquee(){
	var x = document.getElementById('marquee1');
	if(document.getElementById('checkMarquee').checked){
		x.style.display = 'none'
	}
	else{
		x.style.display = 'block'
	}
}

function checkVirtual(){
	var x = document.getElementsByClassName('virtualButtons');
	var i = []
	for (i=0; i<x.length; i++){
		if(document.getElementById('checkVirtual').checked){
			x[i].style.visibility = 'visible'
		}
		else{
			x[i].style.visibility = 'hidden'
			document.getElementById('prvibroj').disabled = false
			document.getElementById('drugibroj').disabled = false
		}
	}
}

// Build info:

var buildinfo1 = 0;

function BuildInfo11() {
	if (buildinfo1 == 0){
		document.getElementById("BuildInfoButtons").style.display = "block"
		document.getElementById("BuildInfo").value = "Sakrij Build Info"
		buildinfo1 += 1
	} else if (buildinfo1 == 1){
		document.getElementById("BuildInfoButtons").style.display = "none"
		document.getElementById("BuildInfoList03000").style.display = "none"
		document.getElementById("BuildInfoList04000").style.display = "none"
		document.getElementById("BuildInfo03000").value = "Build 0.3.000"
		document.getElementById("BuildInfo04000").value = "Build 0.4.000"
		document.getElementById("BuildInfo").value = "Sta je novo?"
		buildinfo1 -= 1
	}
}
var buildinfo03000 = 0;

function BuildInfo03000() {
	if (buildinfo03000 == 0){
		document.getElementById("BuildInfoList03000").style.display = "block"
		document.getElementById("BuildInfo03000").value = "(0.3.000)X"
		buildinfo03000 += 1
	} else if (buildinfo03000 == 1){
		document.getElementById("BuildInfoList03000").style.display = "none"
		document.getElementById("BuildInfo03000").value = "Build 0.3.000"
		buildinfo03000 -= 1
	}
}
var buildinfo04000 = 0;

function BuildInfo04000() {
	if (buildinfo04000 == 0){
		document.getElementById("BuildInfoList04000").style.display = "block"
		document.getElementById("BuildInfo04000").value = "(0.4.000)X"
		buildinfo04000 += 1
	} else if (buildinfo04000 == 1){
		document.getElementById("BuildInfoList04000").style.display = "none"
		document.getElementById("BuildInfo04000").value = "Build 0.4.000"
		buildinfo04000 -= 1
	}
}

// -------> Control Panel
// ChangeBackGround
var changeBackground_Otvori_varijabla = 0;
function changeBackground_Otvori(){
	if(document.getElementById("radioTheme1").checked){
		if(changeBackground_Otvori_varijabla == 0){
			document.getElementById("changeBackground").style.display = "block";
			document.getElementById("changeBackground_Otvori").value = "(tema sajta)X";
			changeBackground_Otvori_varijabla += 1;
		} else {
			document.getElementById("changeBackground").style.display = "none";
			document.getElementById("changeBackground_Otvori").value = "Tema sajta";
			changeBackground_Otvori_varijabla -= 1;
		}
	} else {
		alert("Mozes da menjas samo PODRAZUMEVANU temu!")
	}
	
}

function solidbackgroundcolor() {
	var arg = document.getElementById("izabranaboja").value;
	document.getElementById("Body").style.background = arg;
}

function changeBackground() {
	var bckgrsmer = document.getElementById("changeBackground_smer").value
	var bckgr1 = document.getElementById("changeBackground_prvaboja").value
	var bckgr2 = document.getElementById("changeBackground_drugaboja").value
	document.getElementById("Body").style.setProperty("--bckgrsmer", bckgrsmer)
	document.getElementById("Body").style.setProperty("--bckgr1", bckgr1)
	document.getElementById("Body").style.setProperty("--bckgr2", bckgr2)
	document.getElementById("CP_kategorije").style.setProperty("--CP-background", bckgr2)
	document.getElementById("CP_kategorije").style.setProperty("--CP-border", bckgr1)
	document.getElementById("changeContent").style.setProperty("--ChangeContent-background", bckgr1)
	document.getElementById("changeContent").style.setProperty("--ChangeContent-border", bckgr2)
}
//accentColor
function changeAccent() {
	accentColor = document.getElementById("changeAccent").value
	var accentClass = document.getElementsByClassName("accent")
	for (d=0; d<accentClass.length; d++) {
		accentClass[d].style.color = accentColor;
	}
	var importantClass = document.getElementsByClassName("important")
	for (g=0; g<importantClass.length; g++) {
		importantClass[g].style.setProperty("--accent-color", accentColor);
	}
	var default_inputClass = document.getElementsByClassName("default_input")
	for (g=0; g<default_inputClass.length; g++) {
		default_inputClass[g].style.setProperty("--accent-color", accentColor);
	}
}

// ChangeUvod
var changeUvod_Otvori_varijabla = 0;
function changeUvod_Otvori(){
	if(changeUvod_Otvori_varijabla == 0){
		document.getElementById("changeUvod").style.display = "block";
		document.getElementById("changeUvod_Otvori").value = "(uvod)X";
		changeUvod_Otvori_varijabla += 1;
	} else {
		document.getElementById("changeUvod").style.display = "none";
		document.getElementById("changeUvod_Otvori").value = "Uvod";
		changeUvod_Otvori_varijabla -= 1;
	}
	
}

function checkUvod_datum() {
	if(document.getElementById("checkUvod_datum").checked){
		document.getElementById("datum").style.display = "block"
	} else {
		document.getElementById("datum").style.display = "none"
	}
}

function checkUvod_vreme() {
	if(document.getElementById("checkUvod_vreme").checked){
		document.getElementById("kolikojesati").style.display = "block"
	} else {
		document.getElementById("kolikojesati").style.display = "none"
	}
}

function checkUvod_trajanje() {
	if(document.getElementById("checkUvod_trajanje").checked){
		document.getElementById("trajanje").style.display = "block"
	} else {
		document.getElementById("trajanje").style.display = "none"
	}
}

// changeKalkulator
var changeCalc_Otvori_varijabla = 0;
function changeCalc_Otvori(){
	if(changeCalc_Otvori_varijabla == 0){
		document.getElementById("changeCalc").style.display = "block";
		document.getElementById("changeCalc_Otvori").value = "(kalkulator)X";
		changeCalc_Otvori_varijabla += 1;
	} else {
		document.getElementById("changeCalc").style.display = "none";
		document.getElementById("changeCalc_Otvori").value = "Kalkulator";
		changeCalc_Otvori_varijabla -= 1;
	}
}

// changeTo-Do
var changeToDo_Otvori_varijabla = 0;
function changeToDo_Otvori(){
	if(changeToDo_Otvori_varijabla == 0){
		document.getElementById("changeToDo").style.display = "block";
		document.getElementById("changeToDo_Otvori").value = "(todo)X";
		changeToDo_Otvori_varijabla += 1;
	} else {
		document.getElementById("changeToDo").style.display = "none";
		document.getElementById("changeToDo_Otvori").value = "To-Do";
		changeToDo_Otvori_varijabla -= 1;
	}
}

function checkToDo_settings() {
	if(document.getElementById("checkToDo_settings").checked){
		document.getElementById("todosettings").style.display = "block"
	} else {
		document.getElementById("todosettings").style.display = "none"
	}
}

// changeOstalo
var changeOstalo_Otvori_varijabla = 0;
function changeOstalo_Otvori(){
	if(changeOstalo_Otvori_varijabla == 0){
		document.getElementById("changeOstalo").style.display = "block";
		document.getElementById("changeOstalo_Otvori").value = "(ostalo)X";
		changeOstalo_Otvori_varijabla += 1;
	} else {
		document.getElementById("changeOstalo").style.display = "none";
		document.getElementById("changeOstalo_Otvori").value = "Ostalo";
		changeOstalo_Otvori_varijabla -= 1;
	}
}

// Otvori Experimente:

var changeExperiments_Otvori_varijabla = 0;
function changeExperiments_Otvori(){
	if(changeExperiments_Otvori_varijabla == 0){
		document.getElementById("changeExperiments").style.display = "block";
		document.getElementById("changeExperiments_Otvori").value = "(experiments)X";
		changeExperiments_Otvori_varijabla += 1;
	} else {
		document.getElementById("changeExperiments").style.display = "none";
		document.getElementById("changeExperiments_Otvori").value = "Experiments";
		changeExperiments_Otvori_varijabla -= 1;
	}
}

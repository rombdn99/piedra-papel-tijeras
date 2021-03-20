var jugando=false;// turno
var jug1;//eleccion jugador 1
var jug2;//eleccion jugador 2
//turno de eleccion
function jugar(num){
	if(numjug.value==2){
		dosjugadores(num);
	}else{
		unjugador(num);
	}
}
function cambionumjug(){
	partidas.innerHTML=0;
	victorias.innerHTML=0;
	derrotas.innerHTML=0;
	empates.innerHTML=0;
	if(numjug.value==2){
		jug1v.innerHTML="Jugador 1";
		jug2d.innerHTML="Jugador 2";
	}else{
		jug1v.innerHTML="Victorias";
		jug2d.innerHTML="Derrotas";
	}
}
function unjugador(num){
	//si se esta jugando
	//jugando=true;
	if(!jugando){
		otrosfondo.className="cuenta";
		partidas.innerHTML=parseInt(partidas.innerHTML)+1
		var cont=2;
		//var numia=parseInt(Math.random()*3)+1;
		ponerimagen(0,true);
		ponerimagen(num,false);
		otros.innerHTML="3";
		jug1=num;
		jug2=parseInt(Math.random()*3)+1;

		//resulucion(jug1,jug2);
		var cuentaatras=setInterval(function(){
				otros.innerHTML=cont--;
				if(cont<0){
					otros.innerHTML="";
					clearInterval(cuentaatras);
				}
			},1000);
		//despues de 4 segundos
		setTimeout(function(){
			ponerimagen(jug2,true);
				switch (resulucion(jug1,jug2)){
				case 0:
					otros.innerHTML="<span class='empatado'>Has empatado</span>";
					otrosfondo.className="empate";
					empates.innerHTML=parseInt(empates.innerHTML)+1;
					break;
				case 1:
					otrosfondo.className="ganado";
					//otrosfondo.style.backgroundImage="url(img/confetti.gif)";
					otros.innerHTML="<span class='ganado'>Has ganado</span>";
					//otrosfondo.style.backgroundColor="rgb(255, 215, 0)"
					victorias.innerHTML=parseInt(victorias.innerHTML)+1;
					break;
				case 2:
					otrosfondo.className="perdido";
					//otrosfondo.style.backgroundImage="url(img/perder.gif)";
					otros.innerHTML="<span class='perdido'>Has perdido</span>";
					//otrosfondo.style.backgroundColor="rgb(72,72,118)"
					derrotas.innerHTML=parseInt(derrotas.innerHTML)+1;
					break;
				default:
					alert("Hay un erro inesperado :_(")
			}
		},4000)
	}else{
		alert("Espera a que se acabe el turno");
	}
}

function dosjugadores(num){
	if(!jugando){//Jugador 1
		otros.innerHTML="";
		jugando=true;
		otrosfondo.className="cuenta";
		partidas.innerHTML=parseInt(partidas.innerHTML)+1
		//var cont=2;
		//var numia=parseInt(Math.random()*3)+1;
		ponerimagen(0,true);
		ponerimagen(num,false);
		//otros.innerHTML="3";
		jug1=num;
		turno.innerHTML="Jugador 2"
	}else{//jugador 2
		jugando=false;
		//otrosfondo.className="cuenta";
		//partidas.innerHTML=parseInt(partidas.innerHTML)+1
		//var cont=2;
		//var numia=parseInt(Math.random()*3)+1;
		//ponerimagen(0,true);
		ponerimagen(num,true);
		otros.innerHTML="3";
		jug2=num;
		turno.innerHTML="Jugador 1";
		//resulucion(jug1,jug2);
		switch (resulucion(jug1,jug2)){
			case 0:
				otros.innerHTML="<span class='empatado'>Has empatado</span>";
				otrosfondo.className="empate";
				empates.innerHTML=parseInt(empates.innerHTML)+1;
				break;
			case 1:
				otrosfondo.className="ganado";
				//otrosfondo.style.backgroundImage="url(img/confetti.gif)";
				otros.innerHTML="<span class='ganado'>Jugador 1 ha Ganado</span>";
				//otrosfondo.style.backgroundColor="rgb(255, 215, 0)"
				victorias.innerHTML=parseInt(victorias.innerHTML)+1;
				break;
			case 2:
				otrosfondo.className="ganado";
				//otrosfondo.style.backgroundImage="url(img/perder.gif)";
				otros.innerHTML="<span class='perdido'>Jugador 2 ha ganado</span>";
				//otrosfondo.style.backgroundColor="rgb(72,72,118)"
				derrotas.innerHTML=parseInt(derrotas.innerHTML)+1;
				break;
			default:
				alert("Hay un erro inesperado :_(")
		}
	}
}
function resulucion(num1,num2){
	//cuenta atras
		// var cuentaatras=setInterval(function(){
		// 	otros.innerHTML=cont--;
		// 	if(cont<0){
		// 		otros.innerHTML="";
		// 		clearInterval(cuentaatras);
		// 	}
		// },1000);
		//despues de 4 segundos
		//setTimeout(function(){
			//ponerimagen(numia,true);
			//comprobacion como a acabado
		jugando=false;
		if(num1==num2){
			return 0;
			otros.innerHTML="<span class='empatado'>Has empatado</span>";
			//otrosfondo.style.backgroundImage="url(img/empate.jpg)";
			otrosfondo.className="empate";
			empates.innerHTML=parseInt(empates.innerHTML)+1;
		}else if(( num1==1 && num2==3) ||
			( num1==3 && num2==2) ||
			( num1==2 && num2==1)
			){
			return 1;
			otrosfondo.className="ganado";
			//otrosfondo.style.backgroundImage="url(img/confetti.gif)";
			otros.innerHTML="<span class='ganado'>Jugador 1 ha Ganado</span>";
			//otrosfondo.style.backgroundColor="rgb(255, 215, 0)"
			victorias.innerHTML=parseInt(victorias.innerHTML)+1;
		}else{
			return 2;
			otrosfondo.className="ganado";
			//otrosfondo.style.backgroundImage="url(img/perder.gif)";
			otros.innerHTML="<span class='perdido'>Jugador 2 ha ganado</span>";
			//otrosfondo.style.backgroundColor="rgb(72,72,118)"
			derrotas.innerHTML=parseInt(derrotas.innerHTML)+1;
		}
		//otros.style.boxShadow=" inset 0px 0px 35px 0px rgba(0,0,0,1)";
		otrosfondo.className+=" nocuenta";
		jugando=false;
		//},4000)
}

function ponerimagen(num,ia){
	var img;
	//si es la ia o no
	if(ia){
		img=document.getElementById("imgia");
	}else{
		img=document.getElementById("imgjug");
	}
	var ruta="img/";
	//elegir la imagen
	switch(num){
		case 1:
			ruta+="piedra";
			break;
			break;
		case 2:
			ruta+="papel";
			break;
		case 3:
			ruta+="tijeras";
			break;
		default:
			ruta+="nada";
	}
	ruta+=".png";
	img.src=ruta;
}
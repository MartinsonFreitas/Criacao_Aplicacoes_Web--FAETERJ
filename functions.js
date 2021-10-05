function MesAno() {
    <!-- Begin
		var months=new Array(13);
		months[1]=" de Janeiro de";
		months[2]=" de Fevereiro de";
		months[3]=" de Março de";
		months[4]=" de Abril de";
		months[5]=" de Maio de";
		months[6]=" de Junho de";
		months[7]=" de Julho de";
		months[8]=" de Agosto de";
		months[9]=" de Setembro de";
		months[10]=" de Outubro de";
		months[11]=" de Novembro de";
		months[12]=" de Dezembro de";
		var time=new Date();
		var lmonth=months[time.getMonth() + 1];
		var date=time.getDate();
		var year=time.getYear();

		if (year < 2000)
		year = year + 1900;
		document.write("<right>" + date + lmonth + " ");
		document.write(" " + year + ".</right>");
	// End -->
}

function Saudacao() {
		mdata      = new Date()
		mhora      = mdata.getHours()
		mdia       = mdata.getDate()
		mdiasemana = mdata.getDay()
		mmes       = mdata.getMonth()
		mano       = mdata.getYear()

		if (mhora < 12)
			document.write('Bom dia, ');
		else if(mhora >=12 && mhora < 18)
			document.write('Boa Tarde, ');
		else if(mhora >= 18 && mhora < 24)
			document.write('Boa Noite, ');
		document.write('');
}

function visitante(){
	var nome;
	nome = window.prompt("Qual o seu nome?");
	
	document.write(nome + ' - ');
	}


function mascara(t, mask){
 var i = t.value.length;
 var saida = mask.substring(1,0);
 var texto = mask.substring(i)
 if (texto.substring(0,1) != saida){
 t.value += texto.substring(0,1);
	}
}



$(document).ready(function() {
	
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 800);
		return false;
	});
	
	
});

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
	
	document.getElementById("meu_form").reset();

}

function mascara(t, mask){
			var i = t.value.length;
			var saida = mask.substring(1,0);
			var texto = mask.substring(i)
			
				if (texto.substring(0,1) != saida){
				t.value += texto.substring(0,1);
			}
		}

function check(i){
							
	var x = i;

		if (x>=8){					
			if(document.getElementById('opcao'+i).checked==true){
				document.body.style.backgroundColor = "red";
				document.getElementById('restricao'+i).style.color = "white";
				} else {				
				document.body.style.backgroundColor = "rgb(220, 220, 220)";			
				document.getElementById('restricao'+i).style.color = "#4F4F4F";
			}
		} else if (x>=6) {
			if(document.getElementById('opcao'+i).checked==true){
				document.body.style.backgroundColor = "yellow";
				document.getElementById('restricao'+i).style.color = "red";				
			} else {				
				document.body.style.backgroundColor = "rgb(220, 220, 220)";
				document.getElementById('restricao'+i).style.color = "#4F4F4F";
				
			}			
		} else if (x>=1) {
			if(document.getElementById('opcao'+i).checked==true){
				document.body.style.backgroundColor = "green";
				document.getElementById('restricao'+i).style.color = "white";
			} else {				
				document.body.style.backgroundColor = "rgb(220, 220, 220)";
				document.getElementById('restricao'+i).style.color = "#4F4F4F";
			}			
		} else {
			document.body.style.backgroundColor = "rgb(220, 220, 220)";
			document.getElementById('restricao'+i).style.color = "#4F4F4F";
		}
				
	}
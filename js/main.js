
function getInputValue(){
	var inputBox= document.getElementById("inputBox");
	return inputBox.value;
}

function tweet(){
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== ""){
		doTweet(inputBoxValue);
		clean();
	}
}

function doTweet(tweetText){
	var tarea = document.getElementById("tarea");
	var content = '<div id="tweets">'
	 + '<div class="check"><input type="checkbox">'+tweetText + '<i id="eliminar" class="glyphicon glyphicon-trash"></i>'+ '</div>'+ '</div>';

	//crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML = content;


	
	//Agregar elementos a tweets
	tarea.appendChild(elemento);
	eliminar.oneclick = function(){
	alert("¿Seguro que quiere eliminar?")
	eliminar.removeChild('elemento')
	}

	var ex= tarea.lastChild;
	alert(ex.innerHTML);
}
function clean(){
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

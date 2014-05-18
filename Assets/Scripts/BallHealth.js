#pragma strict

var maxFallDistance = -10;

function Update () {
	
	if(transform.position.y <= -10){
		
		Application.LoadLevel("MyFirstProject");
	}
	
}
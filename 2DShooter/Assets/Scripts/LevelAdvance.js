#pragma strict

var Level = "";
function OnTriggerStay(other : Collider){

 if(other.tag == "Player"){
   
   if(Input.GetKeyUp("w")){
   
    Application.LoadLevel(Level);
   }
 }
}
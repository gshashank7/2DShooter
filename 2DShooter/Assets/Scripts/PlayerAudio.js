#pragma strict
var jumpsound : AudioClip;
function Start () {

}

function Update () {
 
 if(Input.GetKeyDown("space")){
 
  if(!audio.isPlaying){
   audio.clip = jumpsound;
   audio.Play();
  }
 }

}
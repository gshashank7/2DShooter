#pragma strict

//var currentScore : double;
static var score : int;
var txt : String;
var coinsound : AudioClip;

function OnTriggerEnter(other : Collider){
 if(other.tag == "Player"){
 
  var S = GameObject.FindGameObjectWithTag("Score").guiText;
  
  //var currentScore=Number(S.guiText.text.ToString);
  //currentScore+=1;
  score+=1;
  txt=score.ToString();
  S.guiText.text=txt;
  audio.clip = coinsound;
  audio.Play();
  Destroy(gameObject);
 }

}
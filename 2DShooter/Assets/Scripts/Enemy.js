#pragma strict

private var fall : boolean;
var Player : GameObject;
var spawnPoint : Transform;
var stomp : boolean;
var HitSound : AudioClip;
var hurt : AudioClip;

function Update () {
if(stomp){
 audio.clip = hurt;
 audio.Play();
 transform.position.z+=4;
 transform.localScale.y/=2;
 fall=true;
 transform.GetComponent(PlatformMovement).step=0.0;
 stomp=false;
}

if(fall){

 transform.position.y-=0.07;
}
if(transform.position.y<=-25){
 Destroy(gameObject);
}
}
function OnTriggerEnter(other : Collider){
 if(!stomp){
  if(other.tag =="Player"){
   audio.clip = HitSound;
   audio.Play();
   Destroy(other.gameObject);
   var P : GameObject = Instantiate(Player, spawnPoint.position,Quaternion.identity);
   var sf = Camera.main.GetComponent(SmoothFollow2);
   sf.target = P.transform;
                          }
           }
}
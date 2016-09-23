﻿#pragma strict
private var Xpos : float;
private var Ypos : float;
private var max : boolean;

var Vert : boolean;
var maxAmount : float;
var step : float;

function Start () {

Xpos=transform.position.x;
Ypos=transform.position.y;

}

function FixedUpdate () {

//Set the max
if(Vert){
 if(transform.position.y >= Ypos+ maxAmount){
  max=true;
 }
 else if(transform.position.y <= Ypos){
 max=false;
 }
}
else{
if(transform.position.x >= Xpos+ maxAmount){
  max=true;
 }
 else if(transform.position.x <= Xpos){
 max=false;
 }

}


//Moving the platform
 if(Vert){//Verticcal movement
  if(!max){
   transform.position.y += step;
   }
   else{
    transform.position.y -= step;
    }
    }
    else
    {//Horizontal movement
    if(!max){
   transform.position.x += step;
   }
   else{
    transform.position.x -= step;
    }
}



}
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

var randomsource1="images/"+"dice"+random1+".png";
var randomsource2="images/"+"dice"+random2+".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomsource1);
image2.setAttribute("src",randomsource2);

if(random1==random2)
 {
   document.querySelector("h1").innerHTML="DRAW";
 }
 else if(random1>random2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 is winner";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 is winner 🚩";
}

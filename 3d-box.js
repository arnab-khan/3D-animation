var degr=0;
var xdir;
var creapb;
var creabo;
var cread;
var creal;
var crear;
var creat;
var creab;
var creau;
var rotbox;


window.setInterval(premove,30);
function premove() {
    degr+=1
    xdir=(Math.sin(degr*Math.PI/180))*40-50;
    // console.log(degr);
    for (let i = 0; i <=100; i++) {
        
            document.getElementsByClassName("prebox")[i].style.transform="translateX("+xdir+"vw)";
        
    if (degr==360) {
        degr=0;
    }
}
}

for (let i = 0; i <=100; i++) {
    
    creapb=document.createElement("div");
creapb.className="prebox";
document.getElementsByClassName("main")[0].appendChild(creapb);
// console.log(creapb);

rotbox=document.createElement("div");
rotbox.className="rotbox";
document.getElementsByClassName("prebox")[i].appendChild(rotbox);
document.getElementsByClassName("rotbox")[i].style.transform="rotateX("+i*3.6+"deg) rotateY("+i*3.6+"deg)";
// console.log(rotbox);

creab=document.createElement("div");
creab.className="box";
document.getElementsByClassName("rotbox")[i].appendChild(creab);
// console.log(creab);

cread=document.createElement("div");
cread.className="down";
document.getElementsByClassName("box")[i].appendChild(cread);
// console.log(cread);

creal=document.createElement("div");
creal.className="left";
document.getElementsByClassName("box")[i].appendChild(creal);
// console.log(creal);

crear=document.createElement("div");
crear.className="right";
document.getElementsByClassName("box")[i].appendChild(crear);
// console.log(crear);

creat=document.createElement("div");
creat.className="top";
document.getElementsByClassName("box")[i].appendChild(creat);
// console.log(creat);

creab=document.createElement("div");
creab.className="bottom";
document.getElementsByClassName("box")[i].appendChild(creab);
// console.log(creab);

creau=document.createElement("div");
creau.className="up";
document.getElementsByClassName("box")[i].appendChild(creau);
// console.log(creau);


document.getElementsByClassName("prebox")[i].style.top=Math.random()*100+"vh"
document.getElementsByClassName("prebox")[i].style.left=Math.random()*200+"vw"
   
}


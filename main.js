
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=2;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("Colour").value;
    linewidth=document.getElementById("widthofline").value;
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
last_x=current_x;
last_y=current_y;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

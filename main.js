var me = "" ;
var px ;
var py ;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext ("2d");
color="aqua";
width=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{
    color= document.getElementById("paint").value;
    width=document.getElementById("width").value;
    me= "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)

{
    cx=e.clientX - canvas.offsetLeft;
    cy=e.clientY - canvas.offsetTop;

    if (me == "mousedown")
   
    {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;

console.log("last position of x and y coordinates = ");
console.log("x =" + px +" y = " + py );
ctx.moveTo(px,py);
   
console.log("current position of x and y coordinates = ");
console.log("x =" + cx +" y = " + cy );
ctx.arc(cx,cy,20,0,2*Math.PI);
// ctx.lineTo(cx,cy);
ctx.stroke();
    }
px=cx;
py=cy;
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{me="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{me="mouseup";
}
function erase ()
{
    ctx.clearRect (0,0,canvas.width,canvas.height);
}
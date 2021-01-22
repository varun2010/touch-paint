var canvas=document.getElementById("my_canvas");
var color, width1;
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_x, last_y;
var current_x, current_y;
var width=screen.width;
var new_width=width-140;
var new_height=screen.height-350;
var last_touch_x, last_touch_y;
if(width<992){
    canvas.width=new_width;
    canvas.height=new_height; 
}

canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    color=document.getElementById("color").value;
    width1=document.getElementById("width").value;
    console.log("touchstart started");
    last_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_touch_y=e.touches[0].clientY-canvas.offsetTop;
    
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    var current_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    var current_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width1;

    console.log("last position of x and y");
    console.log("x = "+last_touch_x+", y = "+last_touch_y);
    ctx.moveTo(last_touch_x,last_touch_y);

    console.log("current position of x and y");
    console.log("x = "+current_touch_x+", y = "+current_touch_y);
    ctx.lineTo(current_touch_x,current_touch_y);
    ctx.stroke();
    
    last_touch_x=current_touch_x;
    last_touch_y=current_touch_y;
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width1=document.getElementById("width").value;
    
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width1;
        console.log("last position of x and y");
        console.log("x = "+last_x+", y = "+last_y);
        ctx.moveTo(last_x,last_y)

        console.log("current position of x and y");
        console.log("x = "+current_x+", y = "+current_y);
        ctx.lineTo(current_x,current_y)
        
        
        
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

const { fabric } = require("./fabric");

var canvas =new fabric.canvas("mycanvas");

playerx=10

playery=10

Blockimagewidth=30

Blockimageheight=30

var playerobject="";

var blockobject="";

function playerupdate()
{

    fabric.Image.fromURL("player.png",function(Img){

        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({

            top:playery,left:playerx

        });

        canvas.add(playerobject);

    })

}

function new_image(get_image)
{

    fabric.Image.fromURL(get_image,function(Img){

        blockobject=Img;
        blockobject.scaleToWidth(Blockimagewidth);
        blockobject.scaleToHeight(Blockimageheight);
        blockobject.set({

            top:playery,left:playerx

        });

        canvas.add(blockobject);

    })

}

window.addEventListener("keydown",my_keydown);


function my_keydown(e) 
{

    keyPressed=e.keycode;

    console.log(keyPressed);

    if (e.shiftkey == true && keyPressed == "80") {
        
        Blockimagewidth=Blockimagewidth+10;

        Blockimageheight=Blockimageheight+10;

        document.getElementById("current_width").innerHTML=Blockimagewidth;

        document.getElementById("current_height").innerHTML=Blockimageheight;

    }

    if (e.shiftkey && keyPressed == "77") {
        
        Blockimagewidth=Blockimagewidth-10;

        Blockimageheight=Blockimageheight-10;

        document.getElementById("current_width").innerHTML=Blockimagewidth;

        document.getElementById("current_height").innerHTML=Blockimageheight;

    }
    
    if (keyPressed == "38") {
        
        up();
        
        console.log("up")

    }

    if (keyPressed == "40") {
        
        down();

        console.log("down")

    }

    if (keyPressed == "37") {
        
        left();

        console.log("left")

    }

    if (keyPressed == "39") {
        
        right();

        console.log("right")

    }

    if (keyPressed == "87") {
        
        new_image("wall.jpg");

        console.log("up")

    }

    if (keyPressed == "71") {
        
        new_image("ground.png");

    }

    if (keyPressed == "76") {
        
        new_image("light_green.png");

    }

    if (keyPressed == "84") {
        
        new_image("trunk.jpg");

    }

    if (keyPressed == "82") {
        
        new_image("roof.jpg");

    }

    if (keyPressed == "89") {
        
        new_image("yellow_wall.png");

    }

    if (keyPressed == "68") {
        
        new_image("dark_green.png");

    }

    if (keyPressed == "85") {
        
        new_image("unique.png");

    }

    if (keyPressed == "67") {
        
        new_image("cloud.jpg");

    }
    
}

function up() {
    
    if (playery >= 0) {

        playery=playery-Blockimageheight;

        canvas.remove(playerobject);

        playerupdate();
        
    }

}

function down() {
    
    if (playery <= 500) {

        playery=playery+Blockimageheight;

        canvas.remove(playerobject);

        playerupdate();
        
    }

    function left() {
    
        if (playerx >= 0) {
    
            playerx=playerx-Blockimagewidth;
    
            canvas.remove(playerobject);
    
            playerupdate();
            
        }

        function right() {
    
            if (playerx <= 850) {
        
                playerx=playerx+Blockimagewidth;
        
                canvas.remove(playerobject);
        
                playerupdate();
                
            }

}
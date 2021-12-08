objects = [];
status = "";
function preload() {
    video = createVideo("video.mp4");
}
function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();

}
function start()
 { objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
 }
 function modelLoaded() {
     console.log("modelLoaded");
     status = true;
     video.loop();
     video.speed(1);
     video.volume(0);
 }

function draw() {
    Image(video, 0, 0, 480, 380);
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are:"+ object.length;
        
        
            fill("FF0000");    
            percent = floor(object[i].confidece * 100);
            text(object[i].confidece * 100);               
            nofill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height); 
        
        
        
        
        }
    }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
    object = results;
}
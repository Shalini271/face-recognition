Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );

function takePhoto(){
    Webcam.snap( function(data_uri) {
        document.getElementById('img').innerHTML = 
         '<img id="photograph" src="'+data_uri+'"/>';
    } );
}

console.log(ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-zKyd5KQb/model.json", modelLoaded);
function modelLoaded(){
console.log("model is loaded successfully");
}
 
function identify(){
image1=document.getElementById("photograph");
classifier.classify(image1,gotResults);    
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
objectName=results[0].label;
objectConf=results[0].confidence;
document.getElementById("result_name").innerHTML=objectName;
document.getElementById("result_accuracy").innerHTML=objectConf.toFixed(3);
}
}

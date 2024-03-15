

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_image">'
    })
}

console.log("ml5.verion",ml5.version)

classifier=ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/Osjhd_XXn/model.json',model_loaded)

function model_loaded()
{
    console.log("model has been loaded")
}
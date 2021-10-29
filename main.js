function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qjxijx6sR/model.json', modelReady);

}
function modelReady() {
    classifier.classify(gotresults);
}

function gotresults() {
    function gotresults(error, result) {
        if(error){
            console.error(error);
        }   
       
       else{
           console.log(result);
           Random_color_r = Math.floor(Math.random() * 255) + 1;
           Random_color_g = Math.floor(Math.random() * 255) + 1;
           Random_color_b = Math.floor(Math.random() * 255) + 1;
           
           document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label;
           document.getElementById("accuracy_label").innerHTML = "accuracy - " + (result[0].confidence * 100).toFixed(2) + "%";
       
           document.getElementById("result_label").style.color = "rgb("+Random_color_r+", "+Random_color_g+", "+Random_color_b+")"
           
           document.getElementById("accuracy_label").style.color = "rgb("+Random_color_r+", "+Random_color_g+", "+Random_color_b+")";
       
           img = document.getElementById("dog");
           img2 = document.getElementById("cat");
           img3 = document.getElementById("lion");
           
       
           if(result[0].label == "Background Noise"){
               img.src = "dog.gif";
               img2.src = "cat.png";
               img3.src = "lion.jpeg";
               
           }
            
           else if(result[0].label == "class 2"){
               img.src = "dog.png";
               img2.src = "cat.gif";
               img3.src = "lion.jpeg";
               
           }
           
           
       
           else{
               img.src = "dog.png";
               img2.src = "cat.png";
               img3.src = "lion.gif";
               
           }
       
           
       
       }
       }
}
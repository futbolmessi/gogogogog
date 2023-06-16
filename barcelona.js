function fubol() {
 navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gL1P_MKq0/model.json",champions_league)
}
function champions_league() {
 classifier.classify(FCBARCELONA);  
}
function FCBARCELONA(error,results) {
 if (error) {
console.log(error);
 } else {
 console.log(results);
 document.getElementById("result_label").innerHTML="gooool escuchador "+results[0].label;
 document.getElementById("result_confidence").innerHTML="Con que Precision le pego "+results[0].label;

 img=document.getElementById("pedri")
 img2=document.getElementById("meesi")
 img3=document.getElementById("haaland")
 img4=document.getElementById("Santi G.")
 if (result[0].label=="Pedri"){
    img.src="pedri.gif";
    img2.src="LeoMessi20092010_pic_fcb-arsenal62.jpg";
    img3.src="descarga (1).jpg";
    img4.src="proyecto_nuevo_4.jpg";
  
  }
  if (result[0].label=="Pedri"){
    img.src="descarga.jpg";
    img2.src="proyecto audio.gif";
    img3.src="descarga (1).jpg";
    img4.src="proyecto_nuevo_4.jpg";
  
  }

} 




}
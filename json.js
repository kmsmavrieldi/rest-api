var cv = {
    nama:"Kms M Avrieldi",
    umur: 27,
    alamat: 'Indonesia'
};

// JSON.stringify
console.log(JSON.stringify(cv));



// JSON.parse --open
//ajax method with xhr
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        var cv = JSON.parse(this.responseText);
        console.log(cv);
    }
}
xhr.overrideMimeType('text/plain');
xhr.open('GET','test.json',true);
xhr.send();



//jquery method
$.getJSON("test.json", function(data){
    console.log(data);
})

// JSON.parse --close
function myFunction() {
    document.getElementById('demo').innerHTML = "Paragraph changed.";
}

function calculate() {
    let x, y, z;
    x = 3;
    y = 3;
    z = x+y;
    z = "six";
    window.alert("3 plus 3 is: "+z+"!");
}

function dataTypes() {
    let words = ['feel', 'fire', 'fox', 'funny'];
    // document.getElementById('datatypes').innerHTML= typeof words;

    let car = {
        brand:"Porsche",
        model:"911 Carrera S",
        year:1967,
        color:"Powder Black",
        fullRecap: function() {
            return "A "+this.color+" "+this.year+" "+this.brand+", model: "+this.model;
        }
    };
    document.getElementById('datatypes').innerHTML = car.fullRecap();
}
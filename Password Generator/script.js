const passwordInput = document.querySelector('.input input[type="text"]');
const lengthSlider = document.getElementById('lengthSlider');
const lowerCheckbox = document.getElementById('lower');
const upperCheckbox = document.getElementById('upper');
const numbCheckbox = document.getElementById('numb');
const symboCheckbox = document.getElementById('symbo');
const generateBtn = document.getElementById('gen');
const lowerC = "abcdefghijklmnopqrstuvwxyz";
const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbC  = "0123456789";
const symboC = "!@#$%^&*~/.,_+-<>?";
function genpass(){
    let charset = '';
    if(lowerCheckbox.checked) charset+=lowerC;
    if(upperCheckbox.checked) charset+=upperC;
    if(numbCheckbox.checked) charset+=numbC;
    if(symboCheckbox.checked) charset+=symboC;
    if(charset ===''){
        alert("Please Select The CheckBox");
        return;
    }
    let length = lengthSlider.value;
    let password = '';
    for(let i=0;i<length;i++){
        const ran = Math.floor(Math.random()*charset.length)
        password+=charset[ran];
    }
    passwordInput.value = password;
    
}
gen.addEventListener('click',genpass);
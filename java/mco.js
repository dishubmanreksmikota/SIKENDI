
let MOTOR = document.querySelector("#qtyInputMotor");
let MOBIL = document.querySelector("#qtyInputMobil");
let TRUK_KECIL = document.querySelector("#qtyInputTRUK_KECIL");
let UM = document.querySelector("#qtyInputUM");
let MOTOR1 = document.querySelector("#qtyInputMotor1");
let MOBIL1 = document.querySelector("#qtyInputMobil1");
let TRUK_KECIL1 = document.querySelector("#qtyInputTRUK_KECIL1");
let UM1 = document.querySelector("#qtyInputUM1");
let MOTOR2 = document.querySelector("#qtyInputMotor2");
let MOBIL2 = document.querySelector("#qtyInputMobil2");
let TRUK_KECIL2 = document.querySelector("#qtyInputTRUK_KECIL2");
let UM2 = document.querySelector("#qtyInputUM2");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyGy57_B39qjdIyJp-IdPTJBe_kADYI3dUeBG4mNkk4bMlSzGtH7xrCWe9_DQpXfpvy/exec'
const form = document.forms['contact-form']

function decrementUM(){
    if (UM.value <=0){
        UM.value = 0;
    } else {
        UM.value = parseInt(UM.value) - 1;
    }
}
function incrementUM(){
    UM.value = parseInt(UM.value) + 1;
}

function decrementTRUK_KECIL(){
    if (TRUK_KECIL.value <=0){
        TRUK_KECIL.value = 0;
    } else {
        TRUK_KECIL.value = parseInt(TRUK_KECIL.value) - 1;
    }
}
function incrementTRUK_KECIL(){
    TRUK_KECIL.value = parseInt(TRUK_KECIL.value) + 1;
}

function decrementmotor(){
    if (MOTOR.value <=0){
        MOTOR.value = 0;
    } else {
        MOTOR.value = parseInt(MOTOR.value) - 1;
    }
}
function incrementmotor(){
    MOTOR.value = parseInt(MOTOR.value) + 1;
}

function decrementmobil(){
    if (MOBIL.value <=0){
        MOBIL.value = 0;
    } else {
        MOBIL.value = parseInt(MOBIL.value) - 1;
    }
}
function incrementmobil(){
    MOBIL.value = parseInt(MOBIL.value) + 1;
}

function decrementUM1(){
    if (UM1.value <=0){
        UM1.value = 0;
    } else {
        UM1.value = parseInt(UM1.value) - 1;
    }
}
function incrementUM1(){
    UM1.value = parseInt(UM1.value) + 1;
}

function decrementTRUK_KECIL1(){
    if (TRUK_KECIL1.value <=0){
        TRUK_KECIL1.value = 0;
    } else {
        TRUK_KECIL1.value = parseInt(TRUK_KECIL1.value) - 1;
    }
}
function incrementTRUK_KECIL1(){
    TRUK_KECIL1.value = parseInt(TRUK_KECIL1.value) + 1;
}

function decrementmotor1(){
    if (MOTOR1.value <=0){
        MOTOR1.value = 0;
    } else {
        MOTOR1.value = parseInt(MOTOR1.value) - 1;
    }
}
function incrementmotor1(){
    MOTOR1.value = parseInt(MOTOR1.value) + 1;
}

function decrementmobil1(){
    if (MOBIL1.value <=0){
        MOBIL1.value = 0;
    } else {
        MOBIL1.value = parseInt(MOBIL1.value) - 1;
    }
}
function incrementmobil1(){
    MOBIL1.value = parseInt(MOBIL1.value) + 1;
}

function decrementUM2(){
    if (UM2.value <=0){
        UM2.value = 0;
    } else {
        UM2.value = parseInt(UM2.value) - 1;
    }
}
function incrementUM2(){
    UM2.value = parseInt(UM2.value) + 1;
}

function decrementTRUK_KECIL2(){
    if (TRUK_KECIL2.value <=0){
        TRUK_KECIL2.value = 0;
    } else {
        TRUK_KECIL2.value = parseInt(TRUK_KECIL2.value) - 1;
    }
}
function incrementTRUK_KECIL2(){
    TRUK_KECIL2.value = parseInt(TRUK_KECIL2.value) + 1;
}

function decrementmotor2(){
    if (MOTOR2.value <=0){
        MOTOR2.value = 0;
    } else {
        MOTOR2.value = parseInt(MOTOR2.value) - 1;
    }
}
function incrementmotor2(){
    MOTOR2.value = parseInt(MOTOR2.value) + 1;
}

function decrementmobil2(){
    if (MOBIL2.value <=0){
        MOBIL2.value = 0;
    } else {
        MOBIL2.value = parseInt(MOBIL2.value) - 1;
    }
}
function incrementmobil2(){
    MOBIL2.value = parseInt(MOBIL2.value) + 1;
}
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima Kasih! Data Telah Terinput"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
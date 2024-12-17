
let MOTOR = document.querySelector("#qtyInputMotor");
let MOBIL = document.querySelector("#qtyInputMobil");
let MPU = document.querySelector("#qtyInputMPU");
let PICKUP = document.querySelector("#qtyInputPICKUP");
let BOX = document.querySelector("#qtyInputMOBILBOX");
let BUS_KECIL = document.querySelector("#qtyInputBUS_KECIL");
let TRUK_KECIL = document.querySelector("#qtyInputTRUK_KECIL");
let BUS_BESAR = document.querySelector("#qtyInputBUS_BESAR");
let TRUK_BESAR = document.querySelector("#qtyInputTRUK_BESAR");
let TRUK_TANGKI = document.querySelector("#qtyInputTRUK_TANGKI");
let UM = document.querySelector("#qtyInputUM");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzQGRjzaaltZyccYd10oCYBG5gPlIqOkmGm1PlMazmVdZEDstxtLYHK6Rmp6Ay1IFO_sQ/exec'
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
function decrementTRUK_TANGKI(){
    if (TRUK_TANGKI.value <=0){
        TRUK_TANGKI.value = 0;
    } else {
        TRUK_TANGKI.value = parseInt(TRUK_TANGKI.value) - 1;
    }
}
function incrementTRUK_TANGKI(){
    TRUK_TANGKI.value = parseInt(TRUK_TANGKI.value) + 1;
}
function decrementTRUK_BESAR(){
    if (TRUK_BESAR.value <=0){
        TRUK_BESAR.value = 0;
    } else {
        TRUK_BESAR.value = parseInt(TRUK_BESAR.value) - 1;
    }
}
function incrementTRUK_BESAR(){
    TRUK_BESAR.value = parseInt(TRUK_BESAR.value) + 1;
}
function decrementBUS_BESAR(){
    if (BUS_BESAR.value <=0){
        BUS_BESAR.value = 0;
    } else {
        BUS_BESAR.value = parseInt(BUS_BESAR.value) - 1;
    }
}
function incrementBUS_BESAR(){
    BUS_BESAR.value = parseInt(BUS_BESAR.value) + 1;
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
function decrementmpu(){
    if (MPU.value <=0){
        MPU.value = 0;
    } else {
        MPU.value = parseInt(MPU.value) - 1;
    }
}
function incrementmpu(){
    MPU.value = parseInt(MPU.value) + 1;
}
function decrementpickup(){
    if (PICKUP.value <=0){
        PICKUP.value = 0;
    } else {
        PICKUP.value = parseInt(PICKUP.value) - 1;
    }
}
function incrementpickup(){
    PICKUP.value = parseInt(PICKUP.value) + 1;
}
function decrementmobilbox(){
    if (BOX.value <=0){
        BOX.value = 0;
    } else {
        BOX.value = parseInt(BOX.value) - 1;
    }
}
function incrementmobilbox(){
    BOX.value = parseInt(BOX.value) + 1;
}
function decrementBUS_KECIL(){
    if (BUS_KECIL.value <=0){
        BUS_KECIL.value = 0;
    } else {
        BUS_KECIL.value = parseInt(BUS_KECIL.value) - 1;
    }
}
function incrementBUS_KECIL(){
    BUS_KECIL.value = parseInt(BUS_KECIL.value) + 1;
}
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima Kasih! Data Telah Terinput"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
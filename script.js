const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return; // if input is empty return from here
    // get qr code using qr api
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
    })
    

})
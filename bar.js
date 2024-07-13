let toastBox = document.querySelector("#toastBox");
let success = '<i class="fa-solid fa-circle-check"></i>   Successfully Submited';
let error = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!!';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i>Invalid';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    } 
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    },6000);
}
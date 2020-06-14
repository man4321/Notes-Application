let name = document.getElementById('name');
let email=document.getElementById('email');
let phone = document.getElementById('phone');
let nameValid = false;
let emailValid = false;
let phoneValid = false;
$('#success').hide();
     $('#failure').hide();

// console.log(name,email,phone);

name.addEventListener('blur',()=>{
    // console.log('name is blurred')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,9}$/
    if(regex.test(name.value)){
        console.log('mame it matched')
        name.classList.remove('is-invalid');
        nameValid = true;
    } 
    else{
        console.log(' yor name is not valid')
        name.classList.add('is-invalid');
        nameValid=false;
    }
    
})
email.addEventListener('blur',()=>{
    console.log('name is blurred')
    let regex = /^([a-zA-Z_\.\-0-9]+)@([a-zA-Z_\.\-0-9]+)\.([a-zA-Z]){2,7}$/;
    if(regex.test(email.value)){
        console.log('email it matched')
        email.classList.remove('is-invalid');
        emailValid = true;
    } 
    else{
        console.log(' your email is not valid')
        email.classList.add('is-invalid');
        emailValid=false;
    }
    
})
phone.addEventListener('blur',()=>{
    console.log('name is blurred')
    let regex = /^[0-9]{10}$/
    if(regex.test(phone.value)){
        console.log('phone it matched')
         phone.classList.remove('is-invalid');
        phoneValid =true;
    } 
    else{
        console.log(' your  phone is not valid')
        phone.classList.add('is-invalid');
        phoneValid=false;
    }
    
})

const submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nameValid && emailValid && phoneValid){
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#success').show();
     $('#failure').hide();

    
    }
    else{
    let failure = document.getElementById('failure');
        let success = document.getElementById('success');
    failure.classList.add('show');
    // success.classList.remove('show');
    $('#success').hide();
    $('#failure').show();

    }
})
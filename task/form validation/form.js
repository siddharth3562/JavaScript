function valid(){
    document.getElementById('no.error').innerHTML=''
    document.getElementById('email.error').innerHTML=''
    document.getElementById('pin.error').innerHTML=''

    name=document.getElementById('name').value
    phone=document.getElementById('phno').value
    email=document.getElementById('email').value
    pin=document.getElementById('pincode').value
    console.log(name,phone,email,pin);
    let firstDigit = phone.charAt(0);
    if (phone.length != 10 || !firstDigit.match('[6-9]')){
        document.getElementById('no.error').innerHTML='* invalid number'
    }
    else if (!email.match('^[a-zA-Z0-9]+@gmail\.com$')) {
        document.getElementById('email.error').innerHTML='* invalid email'
    }
    else if(pin.length!=6){
        document.getElementById('pin.error').innerHTML='* invalid pincode'
    }
}
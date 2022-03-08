// reply message hide
document.getElementById('email-valid-message').style.display = 'none';
document.getElementById('email-wrong-message').style.display = 'none';



const checkEmail = () =>{
    const emailInput = document.getElementById('emial-input');
    const emailinputText =emailInput.value;
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/
    
    if(emailPattern.test(emailinputText)){
        document.getElementById('email-valid-message').style.display = 'block';
        document.getElementById('email-wrong-message').style.display = 'none';
    }
    else{
        document.getElementById('email-wrong-message').style.display = 'block';
        document.getElementById('email-valid-message').style.display = 'none';
    }
}
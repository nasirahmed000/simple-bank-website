// step 1 : add click handler at submit button 

document.getElementById('btn-submit').addEventListener('click' ,function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

   const passwordField = document.getElementById('user-password')
   const password = passwordField.value;
   console.log(email,password); 


   if(email === 'nasir@gmail.com' && password === 'secret'){
    window.location.href='bank.html';
   }
   else{
    alert('you forgot the password , you are going to be punished')
   }
})








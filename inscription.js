function validation(){
    var mail = document.getElementById("mail").value;
    var password1=document.getElementById("password1").value;
  if(mail==""||password1==""){
    alert("tu doit remplir tous les champs possible");
  }else
  if(validEmail(mail) && (password1)){
    alert('La forme bien valide');
  }else
    if(!validEmail(mail)){
      alert('Le mail nest pas valide');
    }
    
    
} 
                function validEmail(mail){
                   
                   var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);
                   var valid = exp.test(mail);
                     
                     if(valid){
                       
                         return true;
                         
                       }
                    else{
                     console.log("message");
                       return false;
                    }}
                    function myfunction(){
                      var text= document.getElementById("con").value;
                      if (text == ""){
                          alert("tu doit écrir un message");
                      }
                      else{
                          if(validname(text)){
                              alert('La forme bien valide');
                          }else
                      if(!validname(text)){
                        alert('La forme nest pas valide');
                      }
                          }
                      }
                      function validname(text){
                                  var letters =/^[A-Za-z-0-9 ]+$/;
                                  
                  
                                  if(letters.test(text)==true){
                                         return true;
                                     }
                                 else{
                                      return false;  
                                     }
                                  }
                  
                  
                  
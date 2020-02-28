function validation(){
    var Prenom = document.getElementById("Prenom").value;
    var nom = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var tele = document.getElementById("tele").value;
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password2").value;
  if(nom == "" ||  mail=="" || tele=="" || Prenom=="" || password1=="" || password2==""){
    alert("tu doit remplir tous les champs possible");
  }else
  if(validname(nom) && validEmail(mail) && validtel(tele) && validepre(Prenom) && (password1==password2)){
    alert('La forme bien valide');
  }else
    if(!validname(nom)){
      alert('Le nom nest pas valide');
    }else
    if(!validEmail(mail)){
      alert('Le mail nest pas valide');
    }else
    if(!validtel(tele)){
      alert('Le N° nest pas valide');
    }else
    if(!validepre(Prenom)){
        alert('Le Prenom nest pas valide');
      }else
    if (password1 != password2) {
        alert("le mot de passe pas correct!");
    }
    
    
}      function validtel(tele){
               var num=/^[0-9]+$/;
               if(num.test(tele)==true){
                   return true;
               }
               else{
                   return false;
               }
}

      function validname(nom){
                var letters =/^[A-Za-z ]+$/;
                

                if(letters.test(nom)==true){
                       return true;
                   }
               else{
                    return false;  
                   }
                }
                function validepre(Prenom){
                    var letters =/^[A-Za-z ]+$/;
                    
    
                    if(letters.test(Prenom)==true){
                           return true;
                       }
                   else{
                        return false;  
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
                    alert("tu doit remplir tous les champs possible");
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
            
            
            
  
                   
                    
                   
                    
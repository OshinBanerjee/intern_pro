function showError(input1,label1,gid){
    var b=document.getElementById("reset_btn");
    if(b.classList.contains("clicked")==false){ 
    var x1=document.getElementById(input1);
    var x3=x1.value.length;
    if(x1.validity.valueMissing==true && x1.hasAttribute("required")==true){
        var x2="Please enter valid "+document.getElementById(label1).textContent;
          createError(x2,gid);
    }
    else if(x1.hasAttribute("pattern")==true && x1.validity.patternMismatch==true){
        var x2=document.getElementById(label1).textContent+" should start with letter";
    createError(x2,gid);
    }
        else if((x1.getAttribute("minlength")>x3 && x1.hasAttribute("minlength")==true) || (x1.validity.tooLong==true && x1.hasAttribute("maxlength")==true)){
           var x2="Text should be of length between "+x1.getAttribute("minlength")+" to "+ x1.getAttribute("maxlength")+" characters.";
         createError(x2,gid);
     }
      
    }
}

function createError(error_msg,gid){
        
        var x3=document.getElementById(gid);
        var textNode=document.createTextNode(error_msg);
        var newElement=document.createElement("span");
        var id="id_"+gid;
        newElement.setAttribute('class','alert');
         newElement.setAttribute('id',id);
        newElement.appendChild(textNode);
        x3.appendChild(newElement);
        }
    

 
   function reset_form(){
         document.getElementById("submitForm").reset();
        var y=document.getElementsByClassName('alert');
      var b=document.getElementById("reset_btn");
      
        b.classList.add("clicked");
        while(y[0]){
            y[0].parentNode.removeChild(y[0]);
        }
       
    }
   
    function hideError(gid){
       var b=document.getElementById("reset_btn");
        if(b.classList.contains("clicked")==true){
            b.classList.remove("clicked");
        }
        
        var id="id_"+gid;
        if(document.getElementById(id)!=undefined){
        var elem=document.getElementById(id);
        elem.parentNode.removeChild(elem);
        }
    }
    function showValidRange(id,gid){
      var b=document.getElementById("reset_btn");
        if(b.classList.contains("clicked")==false){
        var x=document.getElementById(id);
        if(x.validity.valueMissing==true && x.hasAttribute("required")==true){
            txt="Please enter some value";
             createError(txt,gid);
        }
       else if(x.validity.rangeOverflow){
                txt="Value too large";
                 createError(txt,gid);
        }else if(x.validity.rangeUnderflow){
            txt="Value too small";
             createError(txt,gid);
        }
       
    }}
function showDateError(inputS,inputE,label,gid){
        var b=document.getElementById("reset_btn");
    if(b.classList.contains("clicked")==false){ 
    var x1=document.getElementById(inputS);
    if(x1.validity.valueMissing==true && x1.hasAttribute("required")==true){
        var x2="Please enter valid "+document.getElementById(label).textContent;
        var x3=document.getElementById(inputE);
        x3.value="";
        x3.setAttribute("disabled","");
        x3.removeAttribute('min');
          createError(x2,gid);
    }
    else{
        var x3=document.getElementById(inputE);
        x3.setAttribute('min',x1.value);
        x3.removeAttribute('disabled');
    }
}
}
function checkform(){
    var f = document.forms["form_check"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].hasAttribute("required") && "value" in f[i] && f[i].value.length == 0)
            cansubmit = false;
    }

    document.getElementById('submit_btn').disabled = !cansubmit;
}
window.onload = checkform;

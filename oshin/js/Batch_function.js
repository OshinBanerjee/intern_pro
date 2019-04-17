function showError(input,label,gid){
var x=document.getElementById("bat_reset_btn");

if(x.classList.contains('clicking')==false){
    var x2=document.getElementById(input);
    var x3=x2.value.length;
   
    if(x2.validity.valueMissing==true && x2.hasAttribute("required")==true){
        var x4="Please enter valid "+document.getElementById(label).textContent;
 createError(x4,gid);
    }
    else if(x2.hasAttribute("pattern")==true && x2.validity.patternMismatch==true){
        if(x2.classList.contains("idJob")){
        var x4=document.getElementById(label).textContent+" should not start or end with special character";}
        else{
            var x4=document.getElementById(label).textContent+" should start with letter"; 
        }
    createError(x4,gid);
    }
    else if((x2.getAttribute("minlength")>x3 && x2.hasAttribute("minlength")==true) || (x2.validity.tooLong==true && x2.hasAttribute("maxlength")==true)){
       
        var x4="Text should be of length between "+x2.getAttribute("minlength")+" to "+x2.getAttribute("maxlength")+" characters.";
 createError(x4,gid);
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
    function hideError(gid){
        var x7=document.getElementById("bat_reset_btn");
        if(x7.classList.contains('clicking')==true){
            x7.classList.remove('clicking');
        }
        var x5="id_"+gid;
        if(document.getElementById(x5)!=undefined){
        var x6=document.getElementById(x5);
        x6.parentNode.removeChild(x6);
        }
    }
    function reset_form(){
        document.getElementById('resetForm').reset();
        var x8=document.getElementById("bat_reset_btn");
        x8.classList.add('clicking');
        var x9=document.getElementsByClassName('alert');
        while(x9[0]){
            x9[0].parentNode.removeChild(x9[0]);
        }
    }
    
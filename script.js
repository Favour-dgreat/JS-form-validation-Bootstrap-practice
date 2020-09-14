function validateForm() {
    var password=document.forms["myForm"]["password"].value;
    var x = document.forms["myForm"]["email"].value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address");  
    return false;{}  
    }else if (password==""||password==null||password.length<6){  
            alert("Password must be at least 6 characters long.");  
            return false;  
    }
  }
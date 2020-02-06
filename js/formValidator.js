function validateForm(){


//alert("Thanks!! This page is under development! ");
//return;


var first_name=document.getElementById("first_name").value;
var email=document.getElementById("email").value;
var telephone=document.getElementById("telephone").value;
var comments=document.getElementById("comments").value;


if(first_name==null || first_name==""){
//alert("Please Enter ur name");
return;
}

if(email==null || email==""){
//alert("Please Enter ur email");
return;
}

if(telephone==null || telephone==""){
//alert("Please Enter ur mobile number");
return ;
}

if(comments==null || comments.trim().length < 1){
//alert("Please Enter ur comments"+comments.trim().length);
return;
}

//document.getElementById('contactform').submit();
}
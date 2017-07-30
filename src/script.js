var res = true,prev="";
function validateForm() {
	reset();
	var fname = document.getElementById("fname").value;	
	var lname = document.getElementById("lname").value;	
	var email = document.getElementById("email").value;	
	var pwd = document.getElementById("pwd").value;	
	var tel = document.getElementById("tel").value;
	if((fname=="")||(lname=="")||(email=="")||(pwd=="")||(tel==""))
		showerror("Please fill in all field");
	else if((checkname(document.getElementById("fname"))==false)||(checkname(document.getElementById("lname"))==false)
			||(checkmail(document.getElementById("email"))==false)
			||(checkpassword(document.getElementById("pwd"))==false)
			||(checktelno(document.getElementById("tel")))==false)
		showerror("Please fill all field correctly");
	else		
		window.open("display.html");
	
    
	
	
}
function checkname(ele)
{
	reset();
	name = ele.value;
	console.log("name",name);
	var length = name.length;
	name_update = name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
	console.log("length of name, updatename",length,name_update);
	
	if(length>15)
	{
		showerror("Length exceeded maximum limit");
		res=false;
	}
	else 
		res = true;
	ele.value = name_update;
	return(res);
	
}
function checkpassword(ele)
{
	reset();
	var pwd = ele.value;
	console.log("password",pwd);
	var length = pwd.length;
	if((length<6)||(length>15)||(pwd.search(/[a-z]/) == -1)||(pwd.search(/[A-Z]/) == -1)
		||(pwd.search(/[0-9]/) == -1)||(pwd.search(/[@$-/:-?{-~!"^_`\[\]]/) == -1))
	{
		showerror("Password must be between 6-15 character and contain atleast 1 lower case, 1 uppercase, 1 numeric and 1 special character");
		res= false;
	}
	else 
		res = true;
	return(res);
}
function checktelno(ele)
{
	reset();
	var no = ele.value;
	if((no.search(/a-z/)!=-1)||(no.length!=10)||(no.search(/A-Z/)!=-1)||(no.search(/[@$-/:-?{-~!"^_`\[\]]/)!=-1)){
			showerror("Not a valid number");
			res = false;
	}
	else 
		res = true;
	return(res);
}
function checkmail(ele)   
{  
	reset();
	mail = ele.value;
	console.log("checkmail",mail.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
	 if (mail.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == -1)  
	  {  
		showerror("Invalid Email");
		res = false;
	  }  
	  else 
		res = true;
		return(res);
} 
function showerror(text)
{
	console.log("text,prev",text,prev);
	if(text!=prev)
	{
		text = "ERROR : "+text;
		var message = document.createElement("p");
		message.setAttribute("id","p1");	
		var node = document.createTextNode(text);
		message.appendChild(node);
		
		var element = document.getElementById("error");
		element.appendChild(message);
		prev=text;
	}
}
function reset()
{
	if(document.getElementById("p1")!=null)
	{
		var parent = document.getElementById("error");
		var child = document.getElementById("p1");
		parent.removeChild(child);
	}
	
}
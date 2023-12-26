import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import App from './App';
import Home from './Home';
 function Login(){
 
   function login(){
			let text='{"employees":['+
	'{"firstname":"rahul","password":"123456"},'+
	'{"firstname":"aman","password":"987654"}]}';
	const obj=JSON.parse(text);
	// document.writeln(obj.employees[0].firstname);
	var a=document.getElementById("first").value;
	var b=document.getElementById("sec").value;
	
		var status=0;
		for(var i=0;i<obj.employees.length;i++)
		{
			if(a==obj.employees[i].firstname && b==obj.employees[i].password)
			{
						status=1;
						break;
			}
		}
		if(status==1)
		{
		    
			window.location = "/Home";
		}
		else
		{
			alert("wrong password");
		}

		
		}

   
    return(
     <div className='body'>
<div className="login">
<h1 className="xyz">Login page</h1>
   <img className="user" src="man.png"/>
   <div className="border">
   <input className="name" type="text" id="first" placeholder="Username"/><br></br>
   <input className="password" type="password"  id="sec"  placeholder="Password"/><br></br>
   <Link className='register' to="/Register">Register</Link>
   <input  className="btn-submit" type="submit" name="" onClick={login}/>
   </div>

</div>
     </div>
    );
 }
 export default Login;
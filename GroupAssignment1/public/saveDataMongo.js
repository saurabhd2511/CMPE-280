function bcheck(){
    	if(document.getElementById('bfname').value !="")
    		{
    		if(document.getElementById('blname').value !="")
    			{
    			if(document.getElementById('bemail').value !="")
    				{
    				saveData(event);
    				
    				}
    			}
    		}
    }
    function wcheck(){
    	if(document.getElementById('wfname').value !="")
    		{
    		if(document.getElementById('wlname').value !="")
    			{
    			if(document.getElementById('wemail').value !="")
    				{
    				saveData1(event);
    				
    				}
    			}
    		}
    }	
function saveData(event){	

				window.open("https://www.emc.com/collateral/brochure/h10769-big-data-cta-brochure.pdf");
                var httpRequest;
var form = document.getElementById("regis");
				event.preventDefault();					
				//var isValid = formValidation();
				//if(isValid){			
				    var bfname=document.getElementById('bfname').value; 
				    var blname=document.getElementById('blname').value; 
				    var bemail=document.getElementById('bemail').value; 
				    var data = {
				      "bfname":bfname,
				      "blname":blname,
				      "bemail": bemail
				     }
				    console.log(data);
                    httpRequest = new XMLHttpRequest();
                    httpRequest.onreadystatechange = handleResponse;
                    httpRequest.open("POST", form.action);
                    httpRequest.setRequestHeader("Content-Type", "application/json");
                    httpRequest.send(JSON.stringify(data));
				//}
                    function handleResponse() {
                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                       // document.getElementById("error").innerHTML
                    //= httpRequest.responseText;
                    console.log("Account has been created successfully");
                         getElement('error').innerHTML = "<li> Account has been created successfully.</li>";
                    }
                    else if(httpRequest.status==404){
                        //document.getElementById("error").innerHTML= httpRequest.responseText;
                        console.log("failed");
                    }
                    
                    }				    
			}			
			function saveData1(event){	

				window.open("http://www.oracle.com/us/products/database/big-data-for-enterprise-519135.pdf");
                var httpRequest;
var form = document.getElementById("regis1");
				event.preventDefault();					
				//var isValid = formValidation();
				//if(isValid){			
				    var wfname=document.getElementById('wfname').value; 
				    var wlname=document.getElementById('wlname').value; 
				    var wemail=document.getElementById('wemail').value; 
				    var data = {
				      "wfname":wfname,
				      "wlname":wlname,
				      "wemail": wemail
				     }
				    console.log(data);
                    httpRequest = new XMLHttpRequest();
                    httpRequest.onreadystatechange = handleResponse;
                    httpRequest.open("POST", form.action);
                    httpRequest.setRequestHeader("Content-Type", "application/json");
                    httpRequest.send(JSON.stringify(data));
				//}
                    function handleResponse() {
                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                       // document.getElementById("error").innerHTML
                    //= httpRequest.responseText;
                    console.log("Account has been created successfully");
                         getElement('error').innerHTML = "<li> Account has been created successfully.</li>";
                    }
                    else if(httpRequest.status==404){
                        //document.getElementById("error").innerHTML= httpRequest.responseText;
                        console.log("failed");
                    }
                    
                    }				    
			}			
				
		
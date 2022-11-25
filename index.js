


function togglepassword(){
    x=document.getElementById("password");    
    if(x.type === "password"){
        x.type="text"
    }
    else{
        x.type="password"
    }
}

function fun(){
    x=document.getElementById("password");
    if(x.value != "Password"){
    document.getElementById("fun").innerText="Hmm, Wrong password, are you  sure ya Hazard??"
    }
    else{
        document.getElementById("fun").innerText="Password Correct"
    }
    console.log(x.value)
}
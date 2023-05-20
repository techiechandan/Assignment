
document.getElementById("switch-btn").addEventListener("click",()=>{
    let form1 = document.getElementById("form1");
    let form2 = document.getElementById("form2");
    if(form1.style.display == "none"){
        form1.style.display = "block";
        form2.style.display = "none";
        document.getElementById("switch-btn").innerText = "Get UniqueId";
    }else{
        form1.style.display = "none";
        form2.style.display = "block";
        document.getElementById("switch-btn").innerText = "Generate UniqueId";
    }
})
const loadallphone =()=>{
    console.log("load all phone after 3 second");
     document.getElementById('spiner').style.display = "none";
     fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
     .then((res)=>res.json())
     .then((data) =>console.log(data))
}


const handle = () =>{

     document.getElementById("spiner").style.display = "block";
    setTimeout(function(){
        loadallphone()
    },2000)
}

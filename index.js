const loadallphone =async(status)=>{
    console.log("load all phone after 3 second");
     document.getElementById('spiner').style.display = "none";
   const resposne =await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
   const data = await resposne.json();
     
   if(status){
    displayAllPhone(data.data)
   }else{
    displayAllPhone(data.data.slice(0,6))
   }
}
const handle = () =>{

    document.getElementById("spiner").style.display = "block";
   setTimeout(function(){
       loadallphone()
   },2000)
}

const displayAllPhone=(phones)=>{
console.log(phones)
}



const handleShowAll=()=>{
    loadallphone (true)
}



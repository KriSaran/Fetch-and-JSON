// TODO: add code here
window.addEventListener("load",function(){

  const container=document.getElementById("container");
   
    let htmlTxt = "";
    let htmlTxt1=""
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json){
 
        json.sort(function(a,b){
          return a.hoursInSpace < b.hoursInSpace? 1 : -1 ;
        });

        for(let i=0;i<json.length;i++){
 
        if(json[i].active==true){
          console.log(json[i].active)
          htmlTxt =` <li style="color:green">Active: ${json[i].active}</li>`
         }else{
          htmlTxt =` <li> Active: ${json[i].active}</li>`
         }
         console.log(htmlTxt);
        
          htmlTxt1 +=`<div class='astronaut'>
            <div class="bio">
             <h3>${json[i].firstName},${json[i].lastName}</h3>
             
          <ul>
             <li>Hours in space: ${json[i].hoursInSpace} </li>
             ${htmlTxt}
             <li>Skills: ${json[i].skills}</li>
          </ul>
          </div>
          <img class="avatar" src=${json[i].picture}>
          </div>
         `
    }
    container.innerHTML = `${htmlTxt1} Total Number of Astronauts went to space: ${json.length}`;
    console.log(json)
    
    });

});

});
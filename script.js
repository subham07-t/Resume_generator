function addNewQualification(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('qualificationfield');
 newNode.classList.add('mt-1');
 newNode.setAttribute('placeholder','Write here');
 
 let qOb=document.getElementById("qual");
 let qualificationaddOb=document.getElementById("qualificationbtn");

 qOb.insertBefore(newNode,qualificationaddOb);
}

function addNewSkills(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('skillsfield');
 newNode.classList.add('mt-1');
 newNode.setAttribute('placeholder','Write here');
 
 let sOb=document.getElementById("skill");
 let skillsaddOb=document.getElementById("skillsbtn");

 sOb.insertBefore(newNode,skillsaddOb);
}

function addNewWorkexperience(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('workfield');
 newNode.classList.add('mt-1');
 newNode.setAttribute('placeholder','Write here');
 
 let weOb=document.getElementById("we");
 let workaddOb=document.getElementById("workbtn");

 weOb.insertBefore(newNode,workaddOb);
}

function addNewprojects(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('projectfield');
 newNode.classList.add('mt-1');
 newNode.setAttribute('placeholder','Write here');
 
 let pOb=document.getElementById("project");
 let projectaddOb=document.getElementById("projectbtn");

 pOb.insertBefore(newNode,projectaddOb);
}

function generateCV(){

    document.getElementById('nameT1').innerHTML=document.getElementById("namefield").value;
    document.getElementById('nameT2').innerHTML=document.getElementById("namefield").value;
    document.getElementById('contactT').innerHTML=document.getElementById("contactfield").value;
    document.getElementById('addressT').innerHTML=document.getElementById("addressfield").value;
    document.getElementById('emailT').innerHTML=document.getElementById("emailfield").value;
    document.getElementById('fbT').innerHTML=document.getElementById("fbfield").value;
    document.getElementById('linkT').innerHTML=document.getElementById("linkinfield").value;
    document.getElementById('gitT').innerHTML=document.getElementById("gitfield").value;

    document.getElementById('objectiveT').innerHTML=document.getElementById("objectivefield").value;

    let qualification=document.getElementsByClassName("qualificationfield");
    let str="";
    for(let e of qualification){
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById('qT').innerHTML=str;

    let skill=document.getElementsByClassName("skillsfield");
    let str1="";
    for(let e of skill){
        str1=str1+`<li> ${e.value}</li>`;
    }
    document.getElementById('sT').innerHTML=str1;

    let workexp=document.getElementsByClassName("workfield");
    let str2="";
    for(let e of workexp){
        str2=str2+`<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str2;

    let project=document.getElementsByClassName("projectfield");
    let str3="";
    for(let e of project){
        str3=str3+`<li> ${e.value}</li>`;
    }
    document.getElementById('pT').innerHTML=str3;




    document.getElementById('CV-form').style.display="none";
    document.getElementById('CV-template').style.display="block";
   
}

function printCV(){
    window.print();
}
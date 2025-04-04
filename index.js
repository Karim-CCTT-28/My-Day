var flag =1; // for check first color of background
var inteval 

function addTask(){
    let add = document.querySelector("#add-Task");
    add.addEventListener("click",function(){
        display_Window(1)
    });
}

function cancel_OR_save(){
    let save = document.querySelector(".save");
    save.addEventListener("click",function(){
       new_Task();
        display_Window(2)
    })

    let cancel = document.querySelector(".cancel");
    cancel.addEventListener("click",function(){
        display_Window(2);
    })
}

function display_Window(order){
    if(order === 1){
        document.querySelector(".window").style.display = "flex";
    }

    else if(order === 2){
        document.querySelector(".window").style.display = "none";
    }
}
var count_Tasks = 1;
function new_Task(){
    let Task_Name = document.querySelector("#Task_Name_input").value;
    if(Task_Name.length !=0)
    {

        let div = document.createElement("div");
        document.querySelector(".Tasks").appendChild(div);
    
        
        //Name
        let output_Task_Name = document.createElement("p");
        div.setAttribute("id","Task_"+ count_Tasks);
        div.appendChild(output_Task_Name);
        output_Task_Name.textContent = Task_Name;


        //Timer
        let timer = document.createElement("span");
        timer.textContent = "00 :00 : 00";
        div.appendChild(timer);

        Start_Stop_Timer(div , "Task_"+ count_Tasks);
        count_Tasks++;

    //black and light mode ,light = 1 , black = else
        if(flag === 1 ){

            div.setAttribute("class","task-style black_border");
            output_Task_Name.setAttribute("class","black_color");
            timer.setAttribute("class","black_color");
        }
        else{
            div.setAttribute("class","task-style white_border");
            output_Task_Name.setAttribute("class","white_color");
            timer.setAttribute("class","white_color");
        }

        document.querySelector("#Task_Name_input").value = ""; // clear input
    }   
}

function black_mode(){
    let black = document.querySelector("#black-mode");
    black.addEventListener("click",function(){
        flag = 2;
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";

        document.querySelectorAll(".buttons button")[0].style.backgroundColor = "white";
        document.querySelectorAll(".buttons button")[0].style.color = "black";

        document.querySelectorAll(".buttons button")[1].style.backgroundColor = "white";
        document.querySelectorAll(".buttons button")[1].style.color = "black";



    let Tasks_style = document.querySelectorAll(".task-style");
    for(let i=0 ;i<Tasks_style.length;i++)    
    {

        document.querySelectorAll(".task-style")[i].classList.remove("black_border");
        document.querySelectorAll(".task-style")[i].classList.add("white_border");

        document.querySelectorAll(".task-style p")[i].classList.remove("black_color");
        document.querySelectorAll(".task-style p")[i].classList.add("white_color");


        document.querySelectorAll(".task-style span")[i].classList.remove("black_color");
        document.querySelectorAll(".task-style span")[i].classList.add("white_color");

    }

        document.querySelector("#black-mode").style.display = "none";
        document.querySelector("#white-mode").style.display = "block";



    })
}

function white_mode(){
    let white = document.querySelector("#white-mode");
    white.addEventListener("click",function(){
        flag = 1;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";

        document.querySelectorAll(".buttons button")[0].style.backgroundColor = "black";
        document.querySelectorAll(".buttons button")[0].style.color = "white";

       
        document.querySelectorAll(".buttons button")[1].style.backgroundColor = "black";
        document.querySelectorAll(".buttons button")[1].style.color = "white";

        let Tasks_style = document.querySelectorAll(".task-style");
        for(let i=0 ;i<Tasks_style.length;i++)    
        {
            document.querySelectorAll(".task-style")[i].classList.remove("white_border");
            document.querySelectorAll(".task-style")[i].classList.add("black_border");


            document.querySelectorAll(".task-style p")[i].classList.remove("white_color");
            document.querySelectorAll(".task-style p")[i].classList.add("black_color");


            document.querySelectorAll(".task-style span")[i].classList.remove("white_color");
            document.querySelectorAll(".task-style span")[i].classList.add("black_color");
        }


        document.querySelector("#white-mode").style.display = "none";
        document.querySelector("#black-mode").style.display = "block";
    });
}

function Timer(boradTime){
    var sec = 0 , min = 0 , hour = 0;

    inteval =  setInterval(function(){
        sec++;
        if(sec===60){
            sec = 0;
            min++;
        }
        if(min===60){
            min = 0;
            hour++;
        }
        if(hour===24){
            sec = 0;
            min = 0;
            hour = 0;
        }
        document.querySelector(boradTime).textContent =  hour + " : " + min + " : " + sec;
    },1000);
}
var i = 0;
function Start_Stop_Timer(Task , id){
    let toggel = 0;
    Task.addEventListener("click",function(){

            if(toggel % 2 === 0){
                let borad = "#"+id+" span";
                Timer(borad);
                console.log("start")
            }
            if(toggel % 2 === 1){
                clearInterval(inteval);
               
                console.log("stop");
            }
            toggel++;
    });
}

addTask();
cancel_OR_save();
black_mode();
white_mode();


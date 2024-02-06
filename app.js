let qnbox=document.querySelector(".qn-box");
let anserbox=document.querySelector(".ans-box");
let nextbtn=document.querySelector(".next-btn");
console.log(nextbtn);
let prevbtn=document.querySelector(".prev-btn");
let scorecard=document.querySelector(".score-card");
let alert=document.querySelector(".alert");
let timer=document.querySelector(".timer");


let questionindex=0;
let myscore=0;
let quizover=false;

let questionsarr=[
    {
        question:"1.Which of the following is not a Java features?",
        choices:["Dynamic","Architecture Neutral", "Use of pointers","Object-oriented"],
        answer:"Use of pointers"
    },
    {
    
    question:"2.In which memory a String is stored, when we create a string using new operator?",
    choices:["Stack","String memory", "heap memory","random storage space"],
    answer:"heap memory"
},
{
    question:"3.Which of the following is not a Java features?",
    choices:["Dynamic","Architecture Neutral", "Use of pointers","Object-oriented"],
    answer:"Use of pointers"
},
{

question:"4.In which memory a String is stored, when we create a string using new operator?",
choices:["Stack","String memory", "heap memory","random storage space"],
answer:"heap memory"
}
];





const showquestion=()=>{
    let questiondetails=questionsarr[questionindex].question;

    qnbox.innerText=questiondetails;
   
    
};

function showchoices(){
    anserbox.innerHTML="";
    
    for(let i=0;i<questionsarr[questionindex].choices.length;i++){
        let newdivs=document.createElement("div");
        newdivs.innerHTML=questionsarr[questionindex].choices[i];
        
      
        
        newdivs.classList.add("options-of-qs");  //created divs and made class for div and append to anser box 
        anserbox.appendChild(newdivs);

        newdivs.addEventListener("click",()=>{
            if(newdivs.classList.contains("selected")){
                newdivs.classList.remove("selected");
        
            }
            else{
                newdivs.classList.add("selected");
            };

        });
    // 
    }
    

    
  
};






function displayalert(msg){
    alert.style.display="block";
    alert.textContent=msg;
    setTimeout(()=>{
        alert.style.display="none";
    },2000);

};
showquestion();
showchoices();



const validatesner=()=>{
    const selectedchoice=document.querySelector(".options-of-qs.selected");
    
    if(selectedchoice.innerText===questionsarr[questionindex].answer){
        displayalert("Correct Answer");
        myscore++;

        
    }
    else{
    displayalert(`Wrong Answer! ${questionsarr[questionindex].answer} is the correct Answer!`);
    };
    questionindex++;
    if(questionindex<questionsarr.length){
    
        showquestion();
        showchoices();
    
 
    }
    else{
        showscore();
        quizover=true;
    
    };
        
};
const showscore=()=>{
    qnbox.innerText="";
    anserbox.innerText="";
    scorecard.innerText=`your score is ${myscore} out of ${questionsarr.length}`;
    nextbtn.innerText="play again";
    displayalert("you have completed quiz");
    
};
nextbtn.addEventListener("click",()=>{
    
    let selectedchoice=document.querySelector(".options-of-qs.selected");
    if(!selectedchoice && nextbtn.textContent=="next"){
        displayalert("Select Answer")
        return;
    }
    if(quizover){
       
        nextbtn.textContent="Next";
        scorecard.textContent="";
        questionindex=0;
        showquestion();
        showchoices();
        quizover=false;
        scorecard=0;

    }
    else{
        validatesner();
    };
    
   

});
















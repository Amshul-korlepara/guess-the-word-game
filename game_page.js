var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
 var player1_score=0;
 var player2_score=0;
 var player_question_turn=player1_name;
 var player_answer_turn=player2_name;
document.getElementById("player1_name").innerHTML=player1_name+" : "; 
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score; 
document.getElementById("player2_score").innerHTML=player2_score; 
document.getElementById("player1_name").innerHTML=player1_name+" : "; 
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;

function send(){
    word_value=document.getElementById("word").value;
    word_lowercase=word_value.toLowerCase();
     char1=word_lowercase.charAt(1);
     length_divide_2=Math.floor(word_lowercase.length/2);
     char2=word_lowercase.charAt(length_divide_2);
     char3=word_lowercase.charAt(word_lowercase.length-1);
    remove1=word_lowercase.replace(char1,"_");
    remove2=remove1.replace(char2,"_");
    remove3=remove2.replace(char3,"_");
    question="<h4 id='word_display'>Q. "+remove3+"</h4>";
    input_box="<br> Answer: <input id='Answer' type='text'>";
    check_button="<br> <br> <button onclick='Check()' class='btn btn-primary'>Check</button";
    row=question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function Check() {
    Answer_find=document.getElementById("Answer").value;
    Answer_check=Answer_find.toLowerCase();
    if (Answer_check==word_lowercase) {
        if (player_answer_turn==player1_name) {
            player1_score+=1;
            document.getElementById("player1_score").innerHTML=player1_score; 
 
        }
else{
    player2_score+=1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
    }
    if(player_answer_turn==player1_name){
player_answer_turn=player2_name;
player_question_turn=player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player_answer_turn;
document.getElementById("player_question").innerHTML="Question turn - "+player_question_turn;

    }
    else{
        player_answer_turn=player1_name;
        player_question_turn=player2_name;
        document.getElementById("player_answer").innerHTML="Answer turn - "+player_answer_turn;
        document.getElementById("player_question").innerHTML="Question turn - "+player_question_turn;
         
    }
    document.getElementById("output").innerHTML="";
}

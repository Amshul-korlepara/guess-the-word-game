function login(){
    playerone=document.getElementById("player1_name").value;
    playertwo=document.getElementById("player2_name").value;
    localStorage.setItem("player1_name",playerone);
    localStorage.setItem("player2_name",playertwo);
    window.location.replace("game_page.html");
}
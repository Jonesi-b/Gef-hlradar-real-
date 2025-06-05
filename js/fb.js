function saveChoice(value) {
    
    let totalPoints = parseInt(localStorage.getItem("totalPoints")) || 0;
    totalPoints += parseInt(value);   
    localStorage.setItem("totalPoints", totalPoints);

   
}
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
console.log("Current HTML file:", currentPage)
    let totalPoints = localStorage.getItem("totalPoints");

    totalPoints = totalPoints ? parseInt(totalPoints) : 0;

    console.log("Total Points Retrieved:", totalPoints); 
    let resultText = "";
     if(currentPage==='Ergebnis.html'){
    if (totalPoints <= 5) {
        resultText = "Mach weiter so, hab nen wunderschönen Tag!";
    } else if (totalPoints <= 8 ) {
        resultText = "Du fühlst dich ein wenig gestresst. Sei Achtsam";
    } else if (totalPoints <= 12) {
        resultText = "Du spürst deutlichen Stress. Mach bedeutend langsamer, fang mit etwas an was dir Freude bereitet ";
    } else  {
        resultText = "Du bist sehr gestresst, du brauchst eine Pause! Tu dir was Gutes.";
    }
    }
if(currentPage==='Aergebnis.html'){
        if (totalPoints <= 5) {
        resultText = "Mach weiter so, hab nen wunderschönen Tag!";
    } else if (totalPoints <= 8 ) {
        resultText = "Du fühlst dich ein wenig ängstlich. Sei Achtsam";
    } else if (totalPoints <= 12) {
        resultText = "Du spürst deutliche Angst. Probiere dich in Achtsamkeitsübungen und fokussiere dich im hier und jetzt";
    } else  {
        resultText = "Du spürst sehr starke Angst, zieh dich aus der Situation raus hol dir evtl Hilfe bei Personen die dir nahe stehen";
    }
    }
    if(currentPage==='Sergebnis.html'){
        if (totalPoints <= 5) {
        resultText = "Mach weiter so, hab nen wunderschönen Tag!";
    } else if (totalPoints <= 8 ) {
        resultText = "Du fühlst ein wenig Schmerzen. Sei Achtsam";
    } else if (totalPoints <= 12) {
        resultText = "Du spürst Schmerzen. Mach bedeutend langsamer, fang mit etwas an was dir Freude bereitet und dich ablenkt";
    } else  {
        resultText = "Du hast starke Schmerzen, dein Körper braucht Erholung";
    }
    }

    // Display the result in the HTML
    document.getElementById("resultMessage").textContent = resultText;
});

function resetValues() {
    localStorage.removeItem("totalPoints"); // Correct way to remove the stored value
}

function chooseQuestions(quest){
    window.location.href = quest;
}
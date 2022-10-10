function z_indexALaNormal(){
    let modals=document.querySelector(".mandal.afficherM1, .mandal.afficherM2, .mandal.afficherM3 , .mandal.afficherM4");
    modals.classList.remove("afficherM1","afficherM2","afficherM3","afficherM4");

}
function fermerModal(){
    let modalApresClick= document.querySelector(".mandals.afficherM");
    modalApresClick.classList.remove("afficherM");
    z_indexALaNormal();
    
}
document.getElementById("B1").addEventListener("click", function(){
    document.querySelector(".mandals").classList.toggle("afficherM");
    document.getElementById("M1").classList.toggle("afficherM1");
});
document.getElementById("B2").addEventListener("click", function(){
    document.querySelector(".mandals").classList.toggle("afficherM");
    document.getElementById("M2").classList.toggle("afficherM2");
});
document.getElementById("B3").addEventListener("click", function(){
    document.querySelector(".mandals").classList.toggle("afficherM");
    document.getElementById("M3").classList.toggle("afficherM3");
});
document.getElementById("B4").addEventListener("click", function(){
    document.querySelector(".mandals").classList.toggle("afficherM");
    document.getElementById("M4").classList.toggle("afficherM4");
});
document.querySelector(".contour").addEventListener("click",fermerModal);

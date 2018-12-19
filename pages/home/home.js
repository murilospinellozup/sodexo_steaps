

$(".clickFlip").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$(".clickFlipCancel").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})
 
    

document.getElementById("FDCard_numberOfficers").addEventListener("keyup", execCalcForm);
document.getElementById("FDCard_valuePerOfficers").addEventListener("keyup", execCalcForm);
document.getElementById("MEALCard_numberOfficers").addEventListener("keyup", execCalcForm);
document.getElementById("MEALCard_numberOfficers").addEventListener("keyup", execCalcForm);
document.getElementById("MEALCard_valuePerOfficers").addEventListener("keyup", execCalcForm);


function execCalcForm(){

    moneyMask($('#FDCard_valuePerOfficers'));
    moneyMask($('#MEALCard_valuePerOfficers'));

    normalMask($('#FDCard_numberOfficers'));
    normalMask($('#MEALCard_numberOfficers'));

    FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();


    $("#lFDCard_valuePerOfficers").text(buildTextCurrent(parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)));
    $("#lMEALCard_numberOfficers").text(buildTextCurrent(parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)));

    if((FDCard_numberOfficers != "0" && FDCard_numberOfficers != "" && FDCard_valuePerOfficers != "0.00") || (MEALCard_numberOfficers != "0" &&MEALCard_numberOfficers != "" && MEALCard_valuePerOfficers != "0.00")){
        enableItem($("#confirmInitial"))
    } else {
        disableItem($("#confirmInitial"))
    }
}


$("#confirmInitial").click(function(){
	setPage("register", darkTitle); 
})
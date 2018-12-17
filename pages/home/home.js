

$(".clickFlip").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$(".clickFlipCancel").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$( "#FDCard_numberOfficers, #FDCard_valuePerOfficers, #MEALCard_numberOfficers, #MEALCard_numberOfficers, #MEALCard_valuePerOfficers" ).keyup(function() {
     
     
    let FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    let FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    let MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    let MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

    
    $('#FDCard_numberOfficers').bind('keydown',mask.normal)
    $('#FDCard_valuePerOfficers').bind('keydown',mask.money)
    $('#MEALCard_numberOfficers').bind('keydown',mask.normal)
    $('#MEALCard_valuePerOfficers').bind('keydown',mask.money)

    $("#lFDCard_valuePerOfficers").text(buildTextCurrent(parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)));
    $("#lMEALCard_numberOfficers").text(buildTextCurrent(parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)));

    if((FDCard_numberOfficers != "0" && FDCard_numberOfficers != "" && FDCard_valuePerOfficers != "0.00") || (MEALCard_numberOfficers != "0" &&MEALCard_numberOfficers != "" && MEALCard_valuePerOfficers != "0.00")){
        $("#btnConfirmArea").show();
        $("#noValueArea").hide();
    } else {
        $("#btnConfirmArea").hide();
        $("#noValueArea").show();
    }
 
  });



$("#confirmInitial").click(function(){
	setPage("register", darkTitle); 
})
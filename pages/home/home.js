

$(".clickFlip").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$(".clickFlipCancel").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$( "#FDCard_numberOfficers, #FDCard_valuePerOfficers, #MEALCard_numberOfficers, #MEALCard_numberOfficers, #MEALCard_valuePerOfficers" ).keyup(function() {
     
     
    FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

    
    $('#FDCard_numberOfficers').bind('keydown',mask.normal)
    $('#FDCard_valuePerOfficers').bind('keydown',mask.money)
    $('#MEALCard_numberOfficers').bind('keydown',mask.normal)
    $('#MEALCard_valuePerOfficers').bind('keydown',mask.money)

    $("#lFDCard_valuePerOfficers").text(buildTextCurrent(parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)));
    $("#lMEALCard_numberOfficers").text(buildTextCurrent(parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)));

    if((FDCard_numberOfficers != "0" && FDCard_numberOfficers != "" && FDCard_valuePerOfficers != "0.00") || (MEALCard_numberOfficers != "0" &&MEALCard_numberOfficers != "" && MEALCard_valuePerOfficers != "0.00")){
        enableItem($("#confirmInitial"))
    } else {
        disableItem($("#confirmInitial"))
    }
 
  });



$("#confirmInitial").click(function(){
	setPage("register", darkTitle); 
})
$("#FDCard_numberOfficers, #FDCard_valuePerOfficers, #MEALCard_numberOfficers, #MEALCard_numberOfficers, #MEALCard_valuePerOfficers").keyup(function() {
    validationFields()
});

function validationFields() {
    var allitsOk = true;

    let FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    let FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    let MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    let MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

    $("#lFDCard_numberOfficers").text(FDCard_numberOfficers);
    $("#lFDCard_valuePerOfficers").text(FDCard_valuePerOfficers);

    $("#lMEALCard_numberOfficers").text(MEALCard_numberOfficers);
    $("#lMEALCard_valuePerOfficers").text(MEALCard_valuePerOfficers);


    $('#FDCard_numberOfficers').bind('keydown', mask.normal)
    $('#FDCard_valuePerOfficers').bind('keydown', mask.money)
    $('#MEALCard_numberOfficers').bind('keydown', mask.normal)
    $('#MEALCard_valuePerOfficers').bind('keydown', mask.money)

    if ((FDCard_numberOfficers != "0" && FDCard_numberOfficers != "" && FDCard_valuePerOfficers != "0.00") || (MEALCard_numberOfficers != "0" && MEALCard_numberOfficers != "" && MEALCard_valuePerOfficers != "0.00"))
        enableItem($("#confirmChangeValues"))
    else {
        allitsOk = false
        disableItem($("#confirmChangeValues"))
    }

    $("#FDCard_numberXvalue").text(buildTextCurrent(parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)));
    $("#MEALCard_numberXvalue").text(buildTextCurrent(parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)));


    if (allitsOk == true && $("#confirmterms")[0].checked == true)
        enableItem($("#finishBuy"))
    else disableItem($("#finishBuy"))
}

$("#confirmterms").click(function() {
    validationFields()
})

$("#letmChangeValues").click(function() {
    $(this).addClass("hide")
    $("#confirmChangeValues").removeClass("hide")

    $(".input_rules").removeClass("hide")
    $(".input_label_rules").addClass("hide")
});


$("#confirmChangeValues").click(function() {
    $(this).addClass("hide")
    $("#letmChangeValues").removeClass("hide")

    $(".input_rules").addClass("hide")
    $(".input_label_rules").removeClass("hide")
});

validationFields()

$("#finishBuy").click(function(){
	setPage("finish_order", whiteTitle); 
})

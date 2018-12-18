$("#FDCard_numberOfficers, #FDCard_valuePerOfficers, #MEALCard_numberOfficers, #MEALCard_numberOfficers, #MEALCard_valuePerOfficers").keyup(function() {
    validationFields()
});


$("#FDCard_numberOfficers").val(FDCard_numberOfficers);
$("#FDCard_valuePerOfficers").val(FDCard_valuePerOfficers);
$("#MEALCard_numberOfficers").val(MEALCard_numberOfficers);
$("#MEALCard_valuePerOfficers").val(MEALCard_valuePerOfficers);

$("#total_order").val(totalBuild())

function totalBuild(){
    return "Total R$ "+ buildTextCurrent((parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)) + (parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)))

}

function validationFields() {
    var allitsOk = true;

    FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

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

    $("#total_order").text(totalBuild())

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
    saveOrder(()=>{
        setPage("finish_order", whiteTitle); 
    })
})

function saveOrder(calback){

    let url = `http://solitary-mountain-3623.getsandbox.com/order`
    
    FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

    REST(url,
        "POST", { "Content-Type": "application/json" },
        JSON.stringify(
                {
                    "cards": [
                            {
                                "type": "MEAL",
                                "tot_func": FDCard_numberOfficers,
                                "value": FDCard_valuePerOfficers,
                                "total": parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)
                            },
                            {
                                "type": "FOOD",
                                "tot_func": MEALCard_numberOfficers,
                                "month_value": MEALCard_valuePerOfficers,
                                "total": parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers)
                            }
                        ],
                    "totalPrice": (parseInt(FDCard_numberOfficers) * parseFloat(FDCard_valuePerOfficers)) + (parseInt(MEALCard_numberOfficers) * parseFloat(MEALCard_valuePerOfficers))
                }
        ),
    
         (data) => {

            if(data.barCode && data.orderId){
                barCode = data.barCode
                orderId = data.orderId
                calback()
            }

         }, true);
    
    }

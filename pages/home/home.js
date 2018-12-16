

$(".clickFlip").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

$(".clickFlipCancel").click(function(){
    $(this).closest(".flip-container").toggleClass("letFlip")
})

var mask = {
    money: function() {
        var el = this
        ,exec = function(v) {
        v = v.replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"0.0$1");
        else if (2 == len)
        v = v.replace(/(\d)/,"0.$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'.$1');
        }
        return v;
        };
   
        setTimeout(function(){
        el.value = exec(el.value);
        },1);
    },
    normal: function() {
        var el = this
        ,exec = function(v) {
        v = v.replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'$1');
        }
        return v;
        };
   
        setTimeout(function(){
        el.value = exec(el.value);
        },1);
    }
   } 

$( "#FDCard_numberOfficers, #FDCard_valuePerOfficers, #MEALCard_numberOfficers, #MEALCard_numberOfficers, #MEALCard_valuePerOfficers" ).keyup(function() {
     
    
    let FDCard_numberOfficers = $("#FDCard_numberOfficers").val();
    let FDCard_valuePerOfficers = $("#FDCard_valuePerOfficers").val();

    let MEALCard_numberOfficers = $("#MEALCard_numberOfficers").val();
    let MEALCard_valuePerOfficers = $("#MEALCard_valuePerOfficers").val();

    
    $('#FDCard_numberOfficers').bind('keydown',mask.normal)
    $('#FDCard_valuePerOfficers').bind('keydown',mask.money)
    $('#MEALCard_numberOfficers').bind('keydown',mask.normal)
    $('#MEALCard_valuePerOfficers').bind('keydown',mask.money)

    if((FDCard_numberOfficers != "0" && FDCard_numberOfficers != "" && FDCard_valuePerOfficers != "0.00") || (MEALCard_numberOfficers != "0" &&MEALCard_numberOfficers != "" && MEALCard_valuePerOfficers != "0.00")){
        $("#btnConfirmArea").show();
        $("#noValueArea").hide();
    } else {
        $("#btnConfirmArea").hide();
        $("#noValueArea").show();
    }
 
  });



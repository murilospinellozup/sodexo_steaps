
$("#addrs_cep").mask('00000-000');

$(".form-control").keyup(function(){
    var allValuesSetted = true;

    $(".inputLabel").remove();
    $(".rulesinput").remove();

    $(".form-control").each(function(){
        if($(this).val() != ""){
            $(`<h5 class="inputLabel">${$(this).attr("placeholder")}</h5>`).insertBefore($(this));
        }

    })


    $(".required").each(function(){
        if($(this).val() == ""){
            allValuesSetted = false 
        }
    })


    if($("#addrs_cep").val().trim().length < 9){
        $(`<h5 class="text-danger rulesinput">Informe CEP válido</h5>`).insertBefore($("#addrs_cep"))
        allValuesSetted = false
    }

    if(allValuesSetted)
        enableItem($("#confirm_address"))
    else 
        disableItem($("#confirm_address"))
})

$("#confirm_address").click(function(){
	setPage("officers_inserted", whiteTitle); 
})
$(".rulesinput").remove();

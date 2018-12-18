
$("#addrs_cep").mask('00.000-000');

$("#addrs_cep").val(cep)
$("#addrs_address").val(logradouro)
$("#addrs_number").val(numero) 
$("#addrs_neighborhood").val(bairro)
$("#addrs_state").val(uf)
$("#addrs_city").val(municipio)

pageRules()

$(".form-control").change(function(){
    
    pageRules()

})

function pageRules(){
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
}

$("#confirm_address").click(function(){
    
    let url = `http://solitary-mountain-3623.getsandbox.com/associateStaff`

    REST(url,
        "POST", { "Content-Type": "application/json" },
        JSON.stringify(
            {
                "documentList": documentList
            }
        ),

        (data) => setPage("officers_inserted", whiteTitle) , true);

})
$(".rulesinput").remove();

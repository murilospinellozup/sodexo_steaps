
 
  
  mask_documentUser( $('#REG_document'))
  mask_telephone($("#REG_phone"))


$(".form-control").keyup(function(){
    var allValuesSetted = true;

    $(".inputLabel").remove();
    $(".rulesinput").remove();

    $(".form-control").each(function(){
        if($(this).val() == ""){
            allValuesSetted = false 

        } else {
            $(`<h5 class="inputLabel">${$(this).attr("placeholder")}</h5>`).insertBefore($(this));
        }

    })

    if($("#REG_name").val().trim().split(" ").length < 2){
        $(`<h5 class="text-danger rulesinput">Informe nome e sobrenome</h5>`).insertBefore($("#REG_name"))
        allValuesSetted = false
    }

    if(!validteEmail($("#REG_email").val())){
        $(`<h5 class="text-danger rulesinput">Informe e-mail válido</h5>`).insertBefore($("#REG_email"))
        allValuesSetted = false
    }

    if(!validCNPJ($("#REG_document").val()) && !validCPF($("#REG_document").val())){
        $(`<h5 class="text-danger rulesinput">Informe CPF ou CNPJ válido</h5>`).insertBefore($("#REG_document"))
        allValuesSetted = false
    }

    if($("#REG_phone").val().replace(/\D/g, '').length < 10){
        $(`<h5 class="text-danger rulesinput">Informe um telefone válido</h5>`).insertBefore($("#REG_phone"))
        allValuesSetted = false
    }

    if(allValuesSetted)
        enableItem($("#confirm_register"))
    else 
        disableItem($("#confirm_register"))
})

$("#confirm_register").click(function(){
	setPage("resume_order", darkTitle); 
})
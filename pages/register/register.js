
 
  
  mask_documentUser( $('#REG_document'))
  mask_telephone($("#REG_phone"))


$(".required").keyup(function(){
    var allValuesSetted = true;

    $(".inputLabel").remove();

    $(".required").each(function(){
        if($(this).val() == ""){
            allValuesSetted = false 

        } else {
            $(`<h5 class="inputLabel">${$(this).attr("placeholder")}</h5>`).insertBefore($(this));
        }

    })

    if(allValuesSetted)
        enableItem($("#confirm_register"))
    else 
        disableItem($("#confirm_register"))
})

$("#confirm_register").click(function(){
	setPage("resume_order", darkTitle); 
})

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
        enableItem($("#confirm_address"))
    else 
        disableItem($("#confirm_address"))
})

$("#confirm_address").click(function(){
	setPage("officers_inserted", whiteTitle); 
})

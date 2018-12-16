
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
        $("#confirm_register").removeClass("backgroundDisable");
    else 
        $("#confirm_register").addClass("backgroundDisable");
})
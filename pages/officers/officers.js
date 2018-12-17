
$(".form-control").keyup(function(){
    var allValuesSetted = true;

    $(".inputLabel").remove();

    $(".form-control").each(function(){
        if($(this).val() == ""){
            allValuesSetted = false 

        } else {
            $(`<h5 class="inputLabel">${$(this).attr("placeholder")}</h5>`).insertBefore($(this));
        }

    }) 

    if(allValuesSetted)
        enableItem($("#btnSaveDocumentOfficers"))
    else 
        disableItem($("#btnSaveDocumentOfficers"))
})

$("#btnSaveDocumentOfficers, #btnChangeDocumentOfficers").click(function(){
    $("#btnSaveDocumentOfficers").toggleClass("hide")
    $("#btnChangeDocumentOfficers").toggleClass("hide")
    $("#document_officer_edtarea").toggleClass("hide")
    $("#confirm_officers_document").toggleClass("hide")
    $("#documentsList").toggleClass("hide")
})
 

$("#document_officers").keyup(() =>{
    let documents = $("#document_officers").val().trim().split("\n")
    $("#documentsList").html("")

    documents.forEach(element => {
        $("#documentsList").append(`<h4 class="text-primary document_office_item">${element}</h4>`)
    })
})

$("#confirm_officers_document").click(function(){
	setPage("addresss_selection", darkTitle); 
})

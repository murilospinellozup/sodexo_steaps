
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

$("#btnChangeDocumentOfficers").click(() => toggleArea() )

$("#btnSaveDocumentOfficers").click(function(){
    toggleArea()
    saveOfficers()
})


function toggleArea(){
    $("#btnSaveDocumentOfficers").toggleClass("hide")
    $("#btnChangeDocumentOfficers").toggleClass("hide")
    $("#document_officer_edtarea").toggleClass("hide")
    $("#confirm_officers_document").toggleClass("hide")
    $("#documentsList").toggleClass("hide")
}
 

$("#document_officers").keyup(() => {
 documentList = $("#document_officers").val().trim().split("\n")
    $("#documentsList").html("")

    documentList.forEach(element => $("#documentsList").append(`<h4 class="text-primary document_office_item">${element}</h4>`))
}) 

function staffsList(list){
    $("#documentsList").html("");
    
    list.forEach(element => 
        $("#documentsList").append(`<h4 class="text-primary document_office_item">${element.document}<br>${element.name} - ${element.birthdate}</h4><br>`)
    )
}

function saveOfficers(){
        
    let url = `https://solitary-mountain-3623.getsandbox.com/associateStaff`

    REST(url,
        "POST", { "Content-Type": "application/json" },
        JSON.stringify(
            {
                "documentList": documentList
            }
        ),

        (data) => {
            if(data.staffs)
                staffsList(data.staffs)

        }, true);
}

$("#confirm_officers_document").click(function(){
    setPage("addresss_selection", darkTitle);
})

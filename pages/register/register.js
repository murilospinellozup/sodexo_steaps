
 
  
  mask_documentUser( $('#REG_document'))
  mask_telephone($("#REG_phone"))


$(".form-control").keyup(function(){
    checkFields()
})


$("#REG_document").keyup(function(){
    if($("#REG_document").val().length == 14)
        getDocumentCPFtoCNPJ()

    if (validCNPJ($("#REG_document").val()))
        getAddressByCNPJ($("#REG_document").val())
})

function checkFields(){
    var allValuesSetted = true;

    $(".inputLabel").remove();
    $(".rulesinput").remove();

    REG_name = $("#REG_name").val()
    REG_email = $("#REG_email").val()
    REG_document = $("#REG_document").val()
    REG_phone = $("#REG_phone").val()

    $(".form-control").each(function(){
        if($(this).val() == "")
            allValuesSetted = false 
        else
            $(`<h5 class="inputLabel">${$(this).attr("placeholder")}</h5>`).insertBefore($(this));
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
}

$("#confirm_register").click(function(){

    saveUser(() => {
        setPage("resume_order", darkTitle)
    }) 
})

function saveUser(calback){

let cpf = $("#REG_document").val().replace(/[^\d]+/g,'')
let url = `http://solitary-mountain-3623.getsandbox.com/users`

REST(url,
    "POST", { "Content-Type": "application/json" },
    JSON.stringify(
        {
            "name": REG_name,
            "email": REG_email,
            "cpfOrCnpj": REG_document,
            "phone": REG_phone
        }
    ),

     (data) => calback(), true);

}

function getDocumentCPFtoCNPJ(){
    // 11111111111

    let cpf = $("#REG_document").val().replace(/[^\d]+/g,'')
    let url = `http://solitary-mountain-3623.getsandbox.com/getCnpjByCPF/${cpf}`

	REST(url,
		"GET", { "Content-Type": "application/json" },
		null,

		 (data) => {

            if(data && data.cnpj){
                getAddressByCNPJ(data.cnpj)
            }

		}, false);
}


function getAddressByCNPJ(cnpj){
    // 27865757000102

    let url = `http://solitary-mountain-3623.getsandbox.com/getAddressByDocument/${cnpj}`

	REST(url,
		"GET", { "Content-Type": "application/json" },
		null,

		 (data) => {

            if(data){

                if(data.bairro)
                    bairro = data.bairro

                if(data.cep)
                    cep = data.cep

                if(data.logradouro)
                    logradouro = data.logradouro

                if(data.municipio)
                    municipio = data.municipio

                if(data.numero)
                    numero = data.numero 

                if(data.uf)
                    uf = data.uf 
            }
            

		}, false);
}

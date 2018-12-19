

let setPage = (name, themeTitle) =>{
    $('#container').load(`pages/${name}/${name}.html`)
    $("#themeTitle").html(themeTitle)
}

// global vars to use inside of project (steps)

var FDCard_numberOfficers = "0"
var FDCard_valuePerOfficers = "0"
var MEALCard_numberOfficers = "0"
var MEALCard_valuePerOfficers = "0"

var REG_name = ""
var REG_email = ""
var REG_document = ""
var REG_phone = ""

var bairro = ""
var cep = ""
var logradouro = ""
var municipio = ""
var numero = ""
var uf = ""

var documentList = []

var barCode = ""
var orderId = ""

// theme titles with specific color or other style in top menu

let darkTitle = `
<div class="col" align="center">
   <img src="./assets/images/group-25.svg" class="Group-25">
</div>` 

let whiteTitle = `
<div class="col" align="center" style="background: white;padding-top: 13px;padding-bottom: 24px;margin-top: -17px;">
   <img src="./assets/images/sodexo-logo.svg" class="Group-25">
</div>` 

// automatic steps
$(document).ready(function () {
	setPage("home", darkTitle); 
});


function buildTextCurrent(floatValue) {
    return `${floatValue.toFixed(2)}/mês`;
}

function mask_documentUser(element){

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length > 11 ? '00.000.000/0000-00' : '000.000.000-009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };

      element.mask(SPMaskBehavior, spOptions);
}

function validteEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function validCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'')
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		// cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}


function mask_telephone(element){

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 0.0000-0000' : '(00) 0000-00009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };

      element.mask(SPMaskBehavior, spOptions);
}


     function moneyMask(input) {
        
        v = input.val().replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"0.0$1");
        else if (2 == len)
        v = v.replace(/(\d)/,"0.$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'.$1');
        }
        input.val(v); 
    }

    function normalMask(input) {
        
        v = input.val().replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'$1');
        }
        input.val(v); 
   } 

   function disableItem(element){
		element.prop("disabled",true);
		element.addClass("backgroundDisable");
   }
   
   function enableItem(element){
		element.prop("disabled", false);
		element.removeClass("backgroundDisable");
   }
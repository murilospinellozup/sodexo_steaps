

let setPage = (name, themeTitle) =>{
    $('#container').load(`pages/${name}/${name}.html`)
    $("#themeTitle").html(themeTitle)
}


var FDCard_numberOfficers = ""
var FDCard_valuePerOfficers = ""

var MEALCard_numberOfficers = ""
var MEALCard_valuePerOfficers = ""


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

var mask = {
    money: function() {
        var el = this
        ,exec = function(v) {
        v = v.replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"0.0$1");
        else if (2 == len)
        v = v.replace(/(\d)/,"0.$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'.$1');
        }
        return v;
        };
   
        setTimeout(function(){
        el.value = exec(el.value);
        },1);
    },
    normal: function() {
        var el = this
        ,exec = function(v) {
        v = v.replace(/\D/g,"");
        v = new String(Number(v));
        var len = v.length;
        if (1== len)
        v = v.replace(/(\d)/,"$1");
        else if (len > 2) {
        v = v.replace(/(\d{2})$/,'$1');
        }
        return v;
        };
   
        setTimeout(function(){
        el.value = exec(el.value);
        },1);
    }
   } 

   function disableItem(element){
		element.prop("disabled",true);
		element.addClass("backgroundDisable");
   }
   
   function enableItem(element){
		element.prop("disabled", false);
		element.removeClass("backgroundDisable");
   }
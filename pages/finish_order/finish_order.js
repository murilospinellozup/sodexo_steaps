
$("#setofficers").click(function(){
	setPage("officers", darkTitle); 
})

$("#barCode").html(barCode)
$("#orderId").html(orderId)

$("#copy").click(function(){

	$("#t").show()
	var t = document.getElementById('t')
	t.innerHTML = barCode
	t.select()

	try {
	  var successful = document.execCommand('copy')
	  var msg = successful ? 'successfully' : 'unsuccessfully'
	  console.log('text coppied ' + msg)
	  alert("Código copiado!")
	} catch (err) {
	  console.log('Unable to copy text')
	}
	
	t.innerHTML = ''
	$("#t").hide()
}) 
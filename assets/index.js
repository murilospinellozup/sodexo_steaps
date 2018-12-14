

let setPage = (name) => $('#container').load(`pages/${name}/${name}.html`)


// automatic steps
$(document).ready(function () {
	setPage("home");
});
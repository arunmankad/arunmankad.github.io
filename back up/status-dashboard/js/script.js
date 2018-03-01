$(function(){


	var headertextExt = [],
	headersExt = document.querySelectorAll("#nobleExterior th"),
	tablerowsExt = document.querySelectorAll("#nobleExterior th"),
	tablebodyExt = document.querySelector("#nobleExterior tbody");

	for(var i = 0; i < headersExt.length; i++) {
	  var current = headersExt[i];
	  headertextExt.push(current.textContent.replace(/\r?\n|\r/,""));
	} 
	for (var i = 0, row; row = tablebodyExt.rows[i]; i++) {
	  for (var j = 0, col; col = row.cells[j]; j++) {
		col.setAttribute("data-th", headertextExt[j]);
	  } 
	}

});
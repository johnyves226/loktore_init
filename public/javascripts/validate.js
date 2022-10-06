
function addField( table ){

	var tableRef = document.getElementById(table);
	var newRow   = tableRef.insertRow(-1);
  
	var newCell  = newRow.insertCell(0);
	var newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "designation");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(1);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "Quantite");
	newElem.setAttribute("type", "number");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(2);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "price");
	newElem.setAttribute("type", "number");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(3);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("type", "button");
	newElem.setAttribute("id", "TextInpu");
	newElem.setAttribute("value", "Delete Row");
	newElem.setAttribute("onclick", 'DeleteRow(this)')
	newCell.appendChild(newElem);

  }


function DeleteRow( button ) {
	var row = button.parentNode.parentNode;
  var tbody = row.parentNode;
  tbody.removeChild(row);
}

function addFields( table ){

	var tableRef = document.getElementById(table);
	var newRow   = tableRef.insertRow(-1);
  
	var newCell  = newRow.insertCell(0);
	var newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "designation");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(1);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "Quantite");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(2);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("name", "price");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(3);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("type", "button");
	newElem.setAttribute("id", "TextInpu");
	newElem.setAttribute("value", "Delete Row");
	newElem.setAttribute("onclick", 'DeleteRow(this)')
	newCell.appendChild(newElem);

  }


  
function addCol( table ){

	var tableRef = document.getElementById(table);
	var newRow   = tableRef.insertRow(-1);
  
	var newCell  = newRow.insertCell(0);
	var newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("class", "col-md-8");
	newElem.setAttribute("name", "Ordonance");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);

	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("classe", "col-md-8");
	newElem.setAttribute("name", "posologie");
	newElem.setAttribute("placeholder", "posologie");
	newElem.setAttribute("type", "text");	
	newCell.appendChild(newElem);

  
	newCell = newRow.insertCell(1);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("classe", "fw-normal mb-1");
	newElem.setAttribute("name", "price");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(2);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("id", "TextInput");
	newElem.setAttribute("classe", "text-muted mb-0");
	newElem.setAttribute("name", "insurance_paid");
	newElem.setAttribute("type", "text");
	newCell.appendChild(newElem);
  
	newCell = newRow.insertCell(3);
	newElem = document.createElement( 'input' );
	newElem.setAttribute("type", "button");
	newElem.setAttribute("id", "TextInpu");
	newElem.setAttribute("value", "Delete Row");
	newElem.setAttribute("onclick", 'DeleteRow(this)')
	newCell.appendChild(newElem);

  }

  
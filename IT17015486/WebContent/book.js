/**
 * 
 */

function addDetails() {

	var name = document.getElementById(name).value;
	var author = document.getElementById(author).value;
	var category = document.getElementById(category).value;
	var price = document.getElementById(price).value;
	alert('This is called !' + name + author + category + price);
	jQuery.ajax({
		url : "/addBook",
		type : "POST",
		data : {
			name : name,
			author : author,
			category : category,
			price : price
		},
		contentType : "application/json",
		dataType : 'json',
		success : function(data, textStatus, errorThrown) {
			// here is your json.
			// process it
			$("#title").text(data.title);
			$("#price").text(data.price);

		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#title").text("Sorry! Book not found!");
			$("#price").text("");
		},
		timeout : 120000,
	});
};
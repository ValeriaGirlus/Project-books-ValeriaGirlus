
//open database and create table

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
		// elimina a tabela
	tx.executeSql('DROP TABLE books');

	//cria a table se não existir
    tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, opinion)');
 });

// definir os contadores

var counter1 = 0                                                     
document.getElementById("counter1").innerHTML = counter1;
var counter2 = 0
document.getElementById("counter2").innerHTML = counter2;

//qdo clico na start page, no icon dos livros, comecar a aparecer a lista dos livros

$("#startButton").click(function(){
	$("#startPage").hide();
	$("#bookContainer").show();
	$(".buttons").show();
});

var like = new Array();

// funcao comum para o botao like e dislike, em baixo esta especificados para cada botao

var inAnimation = false;
$(".buttons button.like, button.dislike").click(function(){
	

	$allBooks = $(".book");
	$book = $(".book.active");
	$next = $book.next(".book");


	if( $allBooks.index($book) == $allBooks.length-1){
		$next = $allBooks.eq(0);
		$("#bookContainer").hide();                                                                                                           
		$("#results").show();
		$(".buttons").hide();

	}
	
	// quando consulto o database ver se o botao que eu cliquei no livro foi like ou dislike

	console.log($book);
	// vamos buscar o ID ao nosso hiddenfield
	$id = $('.hiddenFieldId',$book).text();

	// vamos buscar a opinion ao nosso custom attribute
	$opinion = $(this).attr('data-opinion');

	db.transaction(function (tx) {
		//insert na table que criámos
		tx.executeSql('INSERT INTO books(id, opinion) VALUES(?,?)',[$id,$opinion]);
	});


 	 $book.fadeOut(500,function(){
		$book.removeClass("active");
		$(window).scrollTop(0);

		$next.fadeIn(500,function(){
			$next.addClass("active");
		});
	});
});


// para o botão like contabilizar no contador
var like = true
$(".buttons button.like").click(function(){
	
	
	$("#counter1").text(++counter1);


});

//para o botao dislike contabilizar no contador
var dislike = false
$(".buttons button.dislike").click(function(){

	
	$("#counter2").text(++counter2);
});

// qdo clicar na seta da esquerda aparecer o livro anterior

$(".buttons button.left").click(function(){

	$allBooks = $(".book");
	$book = $(".book.active");
	$previous = $book.prev(".book");


	if( $allBooks.index($book) == $allBooks.index(0)){
		$("#bookContainer").hide();                                                                                                           
		$("#startPage").show();
		$(".buttons").hide();

	}
	
 	 $book.fadeOut(500,function(){
		$book.removeClass("active");
		$(window).scrollTop(0);

		$previous.fadeIn(500,function(){
			$previous.addClass("active");


	});
});
});

//para a seta da direita passar de um livro para outro sem fazer like ou dislike

$(".buttons button.right").click(function(){
	
	$allBooks = $(".book");
	$book = $(".book.active");
	$next = $book.next(".book");


	if( $allBooks.index($book) == $allBooks.length-1){
		$next = $allBooks.eq(0);
		$("#bookContainer").hide();                                                                                                           
		$("#results").show();
		$(".buttons").hide();

	}
	

 	 $book.fadeOut(500,function(){
		$book.removeClass("active");
		$(window).scrollTop(0);

		$next.fadeIn(500,function(){
			$next.addClass("active");
		});
	});
});

// qdo volto para tras fazer com que o contador tire o like ou o dislike

$(".buttons button.left").click(function(){
	
	if ((like = true) && (counter1 > 0)){
		$("#counter1").text(--counter1);
	}

	else if (counter2 > 0) {
		$("#counter2").text(--counter2);
	}

	});


// usar ajax para introduzir livros no html

var APIKey = "AIzaSyAyhR7xEq9E5-SVG86aTPbhmYY33fQjFW8";
var UserID = "112222390179590765655";
var ShelfID = "1002";



function LoadData(book){
	var html = `
		<div class="book col-xs-6 col-xs-offset-3 " >
			<div class="capa col-centered">
				<img class="capa1" src="">
			</div>
			<div class="corpus">
 				<input type="hidden" class="hiddenFieldId"></input>
				<h1 id="title"></h1>
				<br>
				Author:<h2 class="author" id= "autorgoogle"></h2>
				<br>
				<p></p>
				<br>
				Category:<h2 class="category"></h2>
				<br>
				<div class="row">
					<div class="sites col-centered">
						<a class="googleplay" ><img class= "googleplayimg" src= "https://lh3.googleusercontent.com/DglqS-eYHQYXnj8M8tmzh3JcKDXcidSo3IzgyCZzci8ZTV9Pmuk8vvIFh9XHOztC3Q=w300"></a>
					</div>
				</div>
		</div>`;

	
	$("#bookContainer").append(html);  
	$bookHTML = $('.book').eq(-1);
	$(".hiddenFieldId",$bookHTML).text(book.id);
	$('h1', $bookHTML).text(book.volumeInfo.title);
	$('h2', $bookHTML).text(book.volumeInfo.authors);
	$('p', $bookHTML).text(book.volumeInfo.description);
	$('.capa1', $bookHTML).attr("src", book.volumeInfo.imageLinks.thumbnail);
	$('.googleplay', $bookHTML).attr("href", book.volumeInfo.infoLink);
	$('.category', $bookHTML).text(book.volumeInfo.categories);
	//console.log(1);
	addToAuthors(book.volumeInfo.authors);
	addToTitles(book.volumeInfo.title);
	addToCategories(book.volumeInfo.categories);
	
}    

$.ajax({
	url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey

}).done(function(data){
	//console.log(data);
	$.each(data.items, function(index,item){
	
		LoadData(item);
	});
	$('.book:first-of-type').addClass('active');
});

// consultar database ao clicar no botao

$('#consultDb').click(function(){
	console.log(1); // para ver se o botao esta a ser clicado
	db.transaction(function (tx) {
	console.log(2);
		//buscar todos os resultados da nossa table
		tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   		$.each(results.rows,function(index,item){
	   			//output de todas as rows/todos os resultados
				console.log(item);
			});
		}, null);
	});
});

var typing = false;
var current = null;
var currentIndex = 0;

$('#tbSearch, #tbFilter').keyup(function(event){
	//keyup dos inputs (indica que o utilizador estÃ¡ a escrever)
});



function autoSearch(){
	//nova pesquisa (por contador ou apÃ³s pressionar Enter)
}

function getData(){
	//recolha de dados dos inputs/selects e efectuar pedido AJAX para recebermos os livros
}


// se quiserem implementar o gif de LOADING 
//https://stackoverflow.com/questions/1964839/how-can-i-create-a-please-wait-loading-animation-using-jquery



// adicionar os autores a lista 
function addToAuthors(authors){
//console.log(authors);
	$.each(authors,function(index,author){
		var authorname = `
			<li><a href="#">`+ author +`</a></li>
			`;
    	$("#authors").append(authorname);

    	}); 
};

// adicionar os titulos dos livros
function addToTitles(title){
//console.log(titles);
		var titlename = `
			<li><a href="#">`+ title +`</a></li>
			`;
    	$("#titles").append(titlename);
};


// adicionar as categorias a lista de categorias 
function addToCategories(category){

		var categoryname = `
			<li><a href="#">`+ category +`</a></li>
			
			`;
    	$("#categories").append(categoryname);

}; 















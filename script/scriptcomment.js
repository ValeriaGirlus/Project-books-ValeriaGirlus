// javascript - para passar de um livro para outro ao clicar no botão like ou dislike ou repeat //
/*

function Like(button) {
	
	var book = button.parentElement.parentElement.parentElement.parentElement;
	
	console.log(book.classList);
	book.classList.remove("active");

	var nextbook = book.nextElementSibling;
	console.log(nextbook);
	nextbook.classList.add("active");

}

function Dislike(button) {

	var book = button.parentElement.parentElement.parentElement.parentElement;
	book.classList.remove("active");

	var nextbook = book.nextElementSibling;
	nextbook.classList.add("active");

}


function Repeat(button) {

	console.log(button);
	var book = button.parentElement.parentElement.parentElement;
	book.classList.remove("active");
	console.log(book);

	var newbook = book.previousElementSibling.previousElementSibling.previousElementSibling;
	console.log(newbook);
	newbook.classList.add("active");

}

*/

/* jquery //


var counter1 = 0
document.getElementById("counter1").innerHTML = counter1;
var counter2 = 0
document.getElementById("counter2").innerHTML = counter2;



$(".buttons button.like").click(function(){
	$allBooks = $(".book");
	$parent = $(this).parents(".book");

	var index = $allBooks.index($parent);
	$next = $parent.next(".book");

	if (index >= $allBooks.length-1) {
		$next = $allBooks.eq(0);

	}

	$parent.fadeOut(500,function(){
		$parent.removeClass("active");
		$next.fadeIn(500,function(){
			$next.addClass("active");
		});
	});

	$("#counter1").text(++$counter1);

});


$counter1 = 0;
$counter2 = 0;
 
$(".buttons button.dislike").click(function(){
	$allBooks = $(".book");
	$parent = $(this).parents(".book");

	var index = $allBooks.index($parent);
	$next = $parent.next(".book");

	if (index >= $allBooks.length-1) {
		$next = $allBooks.eq(0);

	}

	$parent.fadeOut(500,function(){
		$parent.removeClass("active");
		$next.fadeIn(500,function(){
			$next.addClass("active");
		});
	});

	$("#counter2").text(++$counter2);

 });


$(".bookList button.repeat").click(function(){
	$allBooks = $(".book");
	$parent = $(this).parents(".book");

	var index = $allBooks.index($parent);
	$next = $parent.next(".book");

	if (index >= $allBooks.length-1) {
		$next = $allBooks.eq(0);

	}

	$parent.fadeOut(500,function(){
		$parent.removeClass("active");
		$next.fadeIn(500,function(){
			$next.addClass("active");
		});
	});

	$counter1 = 0;
	$counter2 = 0;

	$("#counter1").text($counter1);
	$("#counter2").text($counter2);

});

*/

// criar um dictionary para os livros //


// var book1 = { 
// 	name: "Madame Curie", 
// 	author: "Eva Curie", 
// 	description: "Written by Curie's daughter, the renowned international activist Eve Curie, this biography chronicles Curie's legendary achievements in science, including her pioneering efforts in the study of radioactivity and her two Nobel Prizes in Physics and Chemistry. It also spotlights her remarkable life, from her childhood in Poland, to her storybook Parisian marriage to fellow scientist Pierre Curie, to her tragic death from the very radium that brought her fame.", 
// 	cover: "https://images-na.ssl-images-amazon.com/images/I/51PC8ek8YbL._SX311_BO1,204,203,200_.jpg",
// 	wikipedia: "https://en.wikipedia.org/wiki/Marie_Curie",
// 	wikipediaimg: "http://www.pharmacy.qu.edu.sa/en/Services/PublishingImages/wiki%20pedia.png",
// 	goodreads: "https://www.goodreads.com/book/show/341166.Madame_Curie",
// 	goodreadsimg: "https://static.wixstatic.com/media/e3b74d_1f42e439c2a3497db3410c593f49a5c7~mv2.png",
// 	category: "Biography & Autobiography"

// };


// var book2 = {  
// 	name: "1984",
// 	author: "George Orwell",
// 	description: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of ´negative utopia´ -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.",
// 	cover: "https://flavorwire.files.wordpress.com/2011/06/georgeorwellxobeygiantprintset-1984coverbyshepardfairey.jpeg",	  
// 	wikipedia: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
// 	wikipediaimg: "http://www.pharmacy.qu.edu.sa/en/Services/PublishingImages/wiki%20pedia.png",
// 	goodreads: "https://www.goodreads.com/book/show/5470.1984",
// 	goodreadsimg: "https://static.wixstatic.com/media/e3b74d_1f42e439c2a3497db3410c593f49a5c7~mv2.png",
// 	category: "Fiction"
// };

// var book3 = { 
// 	name: "Memoirs of a geisha",
// 	author: "Arthur Golden",
// 	description: "In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.",
// 	cover: "https://upload.wikimedia.org/wikipedia/en/0/09/Memoirs_of_a_Geisha_Poster.jpg",
// 	wikipedia: "http://www.goodreads.com/book/show/929.Memoirs_of_a_Geisha",
// 	wikipediaimg: "http://www.pharmacy.qu.edu.sa/en/Services/PublishingImages/wiki%20pedia.png",
// 	goodreads: "http://www.goodreads.com/book/show/929.Memoirs_of_a_Geisha",
// 	goodreadsimg: "https://static.wixstatic.com/media/e3b74d_1f42e439c2a3497db3410c593f49a5c7~mv2.png",
// 	category:"Fiction"
// };


/*
function loadData() {

	$book1 = $(".book").eq(0);
	$book2 = $(".book").eq(1);
	$book3 = $(".book").eq(2);
 
	$("h1", $book1).text(book1.name);
	$("h2", $book1).text(book1.author);
	$("p", $book1).text(book1.description);
	$(".capa", $book1).attr("src",book1.cover);
	$(".wikipedia", $book1).attr("href",book1.wikipedia);
	$(".wikipediaimg", $book1).attr("src",book1.wikipediaimg);
	$(".goodreads", $book1).attr("href",book1.goodreads);
	$(".goodreadsimg", $book1).attr("src",book1.goodreadsimg);
	$(".amazon", $book1).attr("href",book1.amazon);
	$(".amazonimg", $book1).attr("src",book1.amazonimg);


	$("h1", $book2).text(book2.name);
	$("h2", $book2).text(book2.author);
	$("p", $book2).text(book2.description);
	$(".capa", $book2).attr("src",book2.cover);
	$(".wikipedia", $book2).attr("href",book2.wikipedia);
	$(".wikipediaimg", $book2).attr("src",book2.wikipediaimg);
	$(".goodreads", $book2).attr("href",book2.goodreads);
	$(".goodreadsimg", $book2).attr("src",book2.goodreadsimg);
	$(".amazon", $book2).attr("href",book2.amazon);
	$(".amazonimg", $book2).attr("src",book2.amazonimg);


	$("h1", $book3).text(book3.name);
	$("h2", $book3).text(book3.author);
	$("p", $book3).text(book3.description);
 	$(".capa", $book3).attr("src",book3.cover);
	$(".wikipedia", $book3).attr("href",book3.wikipedia);
	$(".wikipediaimg", $book3).attr("src",book3.wikipediaimg);
	$(".goodreads", $book3).attr("href",book3.goodreads);
	$(".goodreadsimg", $book3).attr("src",book3.goodreadsimg);
	$(".amazon", $book3).attr("href",book3.amazon);
	$(".amazonimg", $book3).attr("src",book3.amazonimg);


};

loadData();
	
*/

// var library = new Array(book1, book2, book3); 

// function loadDataWithHTML (){
	
// 	var HTMLtoInsert = `
// 		<div class="book col-xs-6 col-xs-offset-3 " >
// 			<div class="capa col-centered">
// 				<img class="capa" >
// 			</div>
// 			<div class="corpus">
// 				<input type="hidden" class="hiddenFieldId"></input>
// 				<h1 id="title"></h1>
// 				<br>
// 				Author:<h2 class="author" id="authorfirsts"></h2>
// 				<br>
// 				<p></p>
// 				<br>
// 				Category:<h2 class="category"></h2>
// 				<br>
// 				<div class="row">
// 					<div class="sites col-centered">
// 						<a class="wikipedia" ><img class= "wikipediaimg" ></a>
// 						<a class="goodgreads"><img class="goodreadsimg" ></a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>`;


// 	jQuery.each(library,function(index,value){
// 		$("#bookContainer").append(HTMLtoInsert);
// 		$currentBook = $(".book").eq(index);

// 		$("h1",$currentBook).text(value.name);
// 		$("h2",$currentBook).text(value.author);
// 		$("p",$currentBook).text(value.description);
// 		$(".category",$currentBook).text(value.category);
// 		$(".capa",$currentBook).attr("src", value.cover);
// 		$(".wikipedia",$currentBook).attr("href", value.wikipedia);
// 		$(".wikipediaimg",$currentBook).attr("src", value.wikipediaimg);
// 		$(".goodreads",$currentBook).attr("href", value.goodreads);
// 		$(".goodreadsimg",$currentBook).attr("src", value.goodreadsimg);
		

// 	});

// 	//dar a classe activo ao livro 1
// 	    $(".book").eq(0).addClass("active");
// };

// loadDataWithHTML();    

// para o botao restart no final de todos os livros mas tirei pois tenho o home para voltar ao inicio

/*

$("#repeatButton").click(function(){
	$("#results").hide();
	$("#startPage").show();
	

	$counter1 = 0;
	$counter2 = 0;

	$("#counter1").text($counter1);
	$("#counter2").text($counter2);


});

*/   

/*
var opinion = "like"

var html = "<p> Opinion:";
if(opinion == "like"){
	html += "like";

}

html += "<p>";

var html = "<p> Opinion:" + (opinion == "like" ? "like" : "") + "<p>";

*/
     
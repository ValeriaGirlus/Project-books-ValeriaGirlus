<!DOCTYPE html>
<html>
<head>
	<title>Booklist</title>
	<meta charset="utf-8">
	<meta name="author" content="Valeria Girlus">
	<link rel="stylesheet" type="text/css" href="bootstrap.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<br>
	<div class="topnav" id="myTopnav">
		<div class="home"><a href="#home">Home</a></div>
  		<div class="categories"><a href="#categories">Categories</a></div>
  		<div class="favorites"><a href="#favorites">Favorites</a></div>
  		
  		<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
	</div>
	<br>
	<header>
		<div class="row"><h1 class= "header col-centered">Booklist</h1></div>

	</header>
	<div class="container-fluid" id="startPage"><button type="button" class="btn btn-link" id="startButton"><img src="books.png"></button>
		<p class="quote">"I do belive that something very magical can happen when you read a good book"<br>J.K.Rowling</p>
	</div>

	<div class="row container-fluid bookList" id="bookContainer"></div>

	<div class="row">
		<div class="buttons col-xs-8 col-md-offset-2 col-centered">
			<button type="button" class="like btn btn-success"><i class="glyphicon glyphicon-thumbs-up"></i></button>
			<button type="button" class="dislike btn btn-danger"><i class="glyphicon glyphicon-thumbs-down"></i></button>
			<button type="button" class="favorite btn-link" ><i class="glyphicon glyphicon-star-empty"></i></button>
		</div>
	</div>
	<div class="row container-fluid" id="results">
		<h3 id="t4">Results</h3>
		<div class="counters col-centered">
			<i class="glyphicon glyphicon-thumbs-up" id="g1"><label id="counter1"></label></i>
			<i class="glyphicon glyphicon-thumbs-down" id="g2"><label id="counter2"></label></i>
		</div>
		<br>
		<br>
		<div class="repeat col-centered">
			<button type="button" class="btn btn-link" id="repeatButton">Return to first page</button>
		</div>
	</div>
	<footer class="footer">Valeria Girlus - 2017</footer>	
	<script type="text/javascript" src="jquery-3.2.1.js"></script>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>

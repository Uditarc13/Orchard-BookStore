function getBookByGenre(genre){
			var xhttp=new XMLHttpRequest();
			xhttp.onreadystatechange=function(){
			if(this.readyState==4 && this.status==200){	
	
				var data=JSON.parse(this.responseText);
				generateTiles(data);
			}
		};
		xhttp.open("GET","/bin/BookByGenreServlet?genreName="+genre,true);
		xhttp.send();
		}
function getBookByPublisher(publisher){
			var xhttp=new XMLHttpRequest();
			xhttp.onreadystatechange=function(){
			if(this.readyState==4 && this.status==200){
								
				var data=JSON.parse(this.responseText);
				generateTiles(data);
		
			}
		};
		xhttp.open("GET","/bin/BookByPublisherServlet?publisherName="+publisher,true);
		xhttp.send();
		}
function generateTiles(data){
			var html='<section id="products"';
			for (x in data) {
					html+=['<section class="product-tile">',
		    	'<div class="product-block">',
		        	'<div class="image-block">', 
		           		'<div class="product-image">',
		                	'<img src="/content/dam/BookStore/en/images/books/abc.jpg>',
		                '</div>',
						'<div class="hover-block">',
		                	'<a href="http://www.google.com"><button class="add-to-cart" target="_blank">ADD TO CART</button></a>',
		                    '<a href="http://www.google.com"><button class="view-detail">VIEW DETAILS</button></a>',
		                '</div>',
		                '<div class="bestseller-label">',
		                    '<img src="https://www.sapnaonline.com/static/images/sapna/bestseller.svg">',
		                '</div>',
						'<div class="discount-label">',
		                   	'<label>30%</label>',
		                '</div>',
		            '</div>',
		            '<div class="product-detail">',
		               	'<div class="book-name"><b>',data[x].name,'</b></div>',
		                '<div class="hover-product-detail">',
		                	'<label class="creator"><i>by',data[x].author,'</i></label>',
		                    '<br>',
		                    '<label><b>Language</b></label>',
		                    '<label class="language"><i>',data[x].language,'</i></label>',
		                '</div>',
		                '<div class="price">&#8377;', data[x].price,'/-</div>',
		            '</div>',
		            '<div class="new-product-label">',
		               	'<label>New</label>',
		            '</div>',
		       '</div>',
			'</section>'].join("\n");
			}
			html+='</section>';
			document.getElementById("ab").innerHTML =html;  
		}
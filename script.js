<script>
var SlideIMG = document.getElementById("SlideIMG");

var pics = new Array(

       "Image1.jpg",
	   "Image.jpg",
	   "Image4.jpg",
	   "Image5.jpg",
	   "Image7.jpg"
	   );

var len = pics.length;
 var i = 0;
 
    function imageslide(){
		
		
		if(i > len-1){
			
			i = 0;
		}
		
		SlideIMG.src = pics[i];
		i++;
		setTimeout('imageslide()',3000);
	}

</script>

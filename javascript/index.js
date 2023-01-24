/*slideshow 1*/
var slider_img = document.querySelector('.slider-img');
var images = ["MAA_img_1.jpg","MAA_img_2.jpg","MAA_img_4.jpg","MAA_img_6.jpg","MAA_img_8.jpg","MAA_img_16.jpg","MAA_img_10.jpg","MAA_img_11.jpg","MAA_img_15.jpg","MAA_img_9.jpg","MAA_img_17.jpg","MAA_img_19.jpg"];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "IMAGES/"+images[i]);
	
}

/*mission colours*/
document.getElementsByClassName("mission")[0].style.background="#333333";
document.getElementsByClassName("mission")[1].style.background="#ca4343";
document.getElementsByClassName("mission")[2].style.background="#981f1f";


document.getElementsByClassName("heading")[0].style.color="#6a6b6a";
document.getElementsByClassName("heading")[3].style.color="#6a6b6a";




/*slideshow 2*/
/*
var sIndex = 0;
sSlides(); // call showslide method



function sSlides()
{
	var x;

	// get the array of divs' with classname image-sliderfade
	var s = document.getElementsByClassName("member_box");
	
	

	for (x = 0; x < s.length; x++) {
		s[x].style.display = "none";
	}

	// increase by 1, Global variable
	sIndex++;

	// check for boundary
	if (sIndex > s.length)
	{
		sIndex = 1;
	}

	s[sIndex - 1].style.display = "block";

	setTimeout(sSlides, 12000);
}
*/
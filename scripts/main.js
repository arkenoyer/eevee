document.querySelector('html').onclick = function() {
	alert('Yes! Pet Eevee!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/eevee.png') {
		myImage.setAttribute ('src','images/eevee2.png');
	} else {
		myImage.setAttribute ('src','images/eevee.png');
	}
}
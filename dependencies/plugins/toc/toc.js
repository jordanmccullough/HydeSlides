(function(){
	// alert("t of c");

	var tocLocation = document.querySelector('script[src$="toc.js"]').src;  // this js file path

	
	tocLocation = tocLocation.replace(/toc\.js(\?.*)?$/, '');   // the js folder path

	console.log(tocLocation);

	var notesPopup = window.open(tocLocation + 'index.html', 'HydeSlides Table of Contents', 'width=400,height=200' );
})();
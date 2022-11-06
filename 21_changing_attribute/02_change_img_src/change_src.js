function change_src() {
	var arr document.getElementsByTagName("img");
	for (var x =0 ; arr.length; x++ ) {
		arr[x].src = "demo.jpg";
	}
}

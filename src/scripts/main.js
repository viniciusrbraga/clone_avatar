function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

    var seta = document.getElementById("myArrow");
    if (seta.classList.contains('down')) {
        document.getElementById("myArrow").classList.remove('down');
        document.getElementById("myArrow").classList.add('up');
    } else {
        document.getElementById("myArrow").classList.remove('up');
        document.getElementById("myArrow").classList.add('down');
    }
}

function funcao() {
    document.getElementById("burger-menu").classList.toggle("mostra");    
    document.getElementById("hero").classList.toggle("mostra"); 
    document.getElementById("informations").classList.toggle("mostra");        
    document.getElementById("banner").classList.toggle("mostra");        
    document.getElementById("banner-mobile").classList.toggle("mostra");        
    document.getElementById("footer").classList.toggle("mostra");        
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function(){
	$('#burger-btn').click(function(){
		$(this).toggleClass('open');
	});
});
var burgerIcon = $("#burgerIcon");
var logoDesktop = $(".logo");
var navbar = $("#navbar");


/* Open when someone clicks on the span element */
function openOverlayMenu() {
    document.getElementById("overlayNav").style.height = "100%";
    burgerIcon.hide();
    logoDesktop.hide();
    navbar.hide();

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("overlayNav").style.height = "0%";
    burgerIcon.show();
    logoDesktop.show();
    navbar.show();
}


$("#overlayNav").click(closeNav);

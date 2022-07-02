function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function activeLink() {
    let currentPage = window.location.href;
    if (currentPage.endsWith('addTask.html')) {
        document.getElementById('addTask').classList.add('active');
    }
    if (currentPage.endsWith('Board.html')) {
        document.getElementById('board').classList.add('active');
    }
    if (currentPage.endsWith('backlog.html')) {
        document.getElementById('backlog').classList.add('active');
    }
    if (currentPage.endsWith('help.html')) {
        document.getElementById('help').classList.add('active');
    }
    if (currentPage.endsWith('design.html')) {
        document.getElementById('design').classList.add('active');
    }

}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
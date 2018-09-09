// Toggle between  shwoing and hiding the sidebar when clicking the menu icon
var sidebar = document.getElementById("sidebar");
function w3_open()
{
    if(sidebar.style.display == "block")
        sidebar.style.display = "none";
    else
        sidebar.style.display = "block";
}

// Close the sidebar with the close button
function w3_close()
{
    sidebar.style.display = "none";
}

// Go the the previous page
function goBack()
{
    window.history.back();
}
function toggleStyleSheet() {
    // Get style element by ID
    style_sheet = document.getElementById("currentStyleSheet");

    // Check the current stylesheet file name
    sheet_name = style_sheet.getAttribute("href");

    // Determine new stylesheet file name
    new_sheet_name = (sheet_name === "style-one.css") ? "style-two.css" : "style-one.css";

    // Replace stylesheet with new stylesheet
    style_sheet.setAttribute("href", new_sheet_name);

    // For persistence when page is refreshed. save new stylesheet name to localStorage
    localStorage.setItem("stylesheet", new_sheet_name);
}

window.onload = function() {
    // Get stylesheet name from local storage hint
    stored_sheet = localStorage.getItem("stylesheet");

    // Get html style element by ID and replace href attribute of html element if not first load of page
    if (stored_sheet != null) {
        document.getElementById("currentStyleSheet").setAttribute("href", stored_sheet);
    } else { // On first load, default to first style
        document.getElementById("currentStyleSheet").setAttribute("href", "style-one.css");
        localStorage.setItem("stylesheet", "style-one.css");
    }
}
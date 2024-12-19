// dropdown menu script.


function filterAircraftsByManufacturer() {
    const dropdown = document.getElementById("aircraftt-dropdown");
    const selecteValue = dropdown.ariaValueMax;
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (selectedValye === "all" || section.id === selectedBalue.substring(1)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function searchAircrafts() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const sections = document.querySelectorAll("section");

    // filter for search.
    sections.forEach(section => {
        const listItems = section.querySelectorAll("ul.aircraft-list li");
        let matchFound = false;

        
        listItems.forEach(item => {
            const linkText = item.textContent.toLowerCase();
            if (linkText.includes(searchTerm)) {
                item.style.display = "block"; // shows matches for search term
                matchFound = true;
            } else {
                item.style.display = "none"; // hides anything that doesn't match search term
            }
        });

        // no matches will show blank... 
        if (!matchFound) {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    });
}
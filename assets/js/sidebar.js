window.addEventListener("DOMContentLoaded", async function() {
    // Function to fetch sidebar content
    const getSidebar = async () => {
        const response = await fetch('partials/sidebar.html');
        return await response.text();
    };

    // Insert sidebar HTML into the container
    const sidebarHTML = await getSidebar();
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;

    // Get the current page filename (excluding query params)
    const currentPage = window.location.pathname.split("/").pop();

    // Select all the menu items in the sidebar
    const links = document.querySelectorAll(".menu-item");

    // Loop through each link and add 'active' class if the link's href matches the current page
    links.forEach(link => {
        const href = link.getAttribute("href").split("/").pop();  // Get the last part of the href (file name)
        if (href === currentPage) {
            link.classList.add("active");  // Add the 'active' class to the matching link
        }
    });
});

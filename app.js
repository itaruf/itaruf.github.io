// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle tab switching with better performance
function switchTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block'; // Display the clicked tab
    }

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Remove active class from all tabs
    });

    const selectedTab = document.querySelector('.tab[data-target="' + tabId + '"]');
    if (selectedTab) {
        selectedTab.classList.add('active'); // Add active class to the clicked tab
    }
}

// Set up event listeners for tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const tabId = this.getAttribute('data-target');
        switchTab(tabId);
    });
});

// Animate buttons on click to give feedback
document.querySelectorAll('.bubbly-button').forEach(button => {
    button.addEventListener('click', function () {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 700); // Animation lasts 700ms
    });
});

// Navigation bar becomes sticky on scroll
window.onscroll = function () { makeSticky() };
const header = document.getElementById("myHeader");
const sticky = header.offse

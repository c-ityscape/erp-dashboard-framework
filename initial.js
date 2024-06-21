document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const hamburger = document.querySelector('.hamburger');
    
    function toggleSidebar() {
        mainContent.classList.toggle('expanded');
        sidebar.classList.toggle('hidden');
    }

    function toggleContent(contentId) {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            if (content.id === contentId + '-content') {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            } else {
                content.style.display = 'none';
            }
        });
    }

    function handleResize() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
            hamburger.style.display = 'block';
        } else {
            sidebar.classList.remove('hidden');
            hamburger.style.display = 'none';
        }
    }

    // Toggle sidebar on hamburger click
    hamburger.addEventListener('click', toggleSidebar);

    // Add click event listeners to sidebar menu items
    const menuItems = document.querySelectorAll('.menu nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
            toggleContent(event.target.textContent.toLowerCase());
        });
    });

    // Handle initial load and window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Generate dummy data for the chart
    function generateDummyData() {
        return [150, 220, 180, 300, 270, 230, 200];
    }

    // Function to create the bar chart using Chart.js
    function createBarChart(data) {
        const ctx = document.getElementById('contactsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [{
                    label: 'Number of Contacts',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Contacts'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Days'
                        }
                    }
                }
            }
        });
    }

    // Generate dummy data and create the initial bar chart
    const dummyData = generateDummyData();
    createBarChart(dummyData);
});

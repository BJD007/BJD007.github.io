document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running");

    // Dark mode toggle
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    } else {
        console.error("Dark mode button not found");
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Change nav background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.style.backgroundColor = window.scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
        }
    });

    // Project data
    const projects = [
        {
            "title": "AI-Powered Radar System",
            "description": "Developed an advanced radar system using AI for enhanced object detection and tracking.",
            "image": "https://via.placeholder.com/400x200.png?text=AI+Radar+System",
            "link": "#"
        },
        {
            "title": "Autonomous Drone Navigation",
            "description": "Created a system for autonomous drone navigation in complex urban environments.",
            "image": "https://via.placeholder.com/400x200.png?text=Drone+Navigation",
            "link": "#"
        },
        {
            "title": "Robotics in Healthcare",
            "description": "Implemented robotic solutions for assisting in medical procedures and patient care.",
            "image": "https://via.placeholder.com/400x200.png?text=Healthcare+Robotics",
            "link": "#"
        }
    ];

    // Load projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        console.log("Projects grid found");
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'projects-item';
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="projects-item-image">
                <div class="projects-item-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="cta-button">Learn More</a>
                </div>
            `;
            projectsGrid.appendChild(projectElement);
        });
    } else {
        console.error("Projects grid not found");
    }

    // Blog post data
    const blogPosts = [
        {
            "title": "The Future of AI in Robotics",
            "date": "August 1, 2024",
            "category": "AI",
            "summary": "Exploring the latest trends and future prospects of AI integration in robotics.",
            "link": "#"
        },
        {
            "title": "Advancements in Radar Technology",
            "date": "July 15, 2024",
            "category": "Technology",
            "summary": "Discussing recent breakthroughs in radar technology and their applications.",
            "link": "#"
        },
        {
            "title": "Ethics in AI Development",
            "date": "July 1, 2024",
            "category": "AI Ethics",
            "summary": "Addressing the ethical considerations in AI development and implementation.",
            "link": "#"
        }
    ];

    // Load blog posts
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        console.log("Blog grid found");
        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p class="post-meta">${post.date} | ${post.category}</p>
                <p>${post.summary}</p>
                <a href="${post.link}" class="cta-button">Read More</a>
            `;
            blogGrid.appendChild(postElement);
        });
    } else {
        console.error("Blog grid not found");
    }

// Timeline data
const timelineEvents = [
    {
        year: "2007",
        title: "Started Bachelor's Degrees",
        description: "Began my journey in Mechanical Engineering at Vellore Institue of Technology."
    },
    {
        year: "2008",
        title: "Started Double Bachelor's Degrees",
        description: "Began my journey in Information Technology at Vellore Institue of Technology."
    },
    {
        year: "2011",
        title: "Graduated in Bachelor of Technology Mechanical Engineering",
        description: "Completed my Bachelor's degree with a focus on AI and Machine Learning."
    },
    {
        year: "2011",
        title: "Graduated in Bachelor of Technology Information Techology",
        description: "Completed my Bachelor's degree with a focus on AI and Machine Learning."
    },
    {
        year: "2011",
        title: " Campus Placement in TATA Technologies",
        description: " GET to Application Engineer"
    },
    {
        year: "2012",
        title: " Started working for Chryler LLC",
        description: " Application Engineer."
    },
    {
        year: "2013",
        title: "Started Master's Degrees",
        description: "Began my journey in Mechanical Engineering at Vellore Institue of Technology."
    },
    {
        year: "2014",
        title: "Graduared Master's Degree",
        description: "Earned my Master's in Mechatronics from the National University of Singapore."
    },
    {
        year: "October 2017",
        title: "Co-founded Hertzwell",
        description: "Started my journey as an entrepreneur, focusing on AI and radar technology."
    },
    {
        year: "Jan 2021",
        title: "Major Project Success",
        description: "Hertzwell becomes revenue generating venture"
    },
    {
        year: "2023",
        title: " Started my PhD Journey from Bircham International University",
        description: "Ongoing"
    },
    {
        year: "2024",
        title: " Hertzwell becomes World Number 1 in Object Detection Model for AV Application. ",
        description: " Still is the Leader in NuScenes leaderboard "
    }
];

    // Load timeline events
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        console.log("Timeline container found");
        timelineEvents.forEach(event => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3 class="date">${event.year}</h3>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
        });
    } else {
        console.error("Timeline container not found");
    }
});

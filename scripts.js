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
            "image": "images/project1.jpg",
            "pdfLink": "pdfs/ai_radar_system.pdf"
        },
        {
            "title": "Autonomous Drone Navigation",
            "description": "Created a system for autonomous drone navigation in complex urban environments.",
            "image": "images/project2.jpg",
            "pdfLink": "pdfs/drone_navigation.pdf"
        },
        {
            "title": "Robotics in Healthcare",
            "description": "Implemented robotic solutions for assisting in medical procedures and patient care.",
            "image": "images/project3.jpg",
            "pdfLink": "pdfs/healthcare_robotics.pdf"
        }
    ];

    // Function to load projects
    function loadProjects(containerId) {
        const projectsGrid = document.getElementById(containerId);
        if (projectsGrid) {
            console.log(`Projects grid found: ${containerId}`);
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'projects-item';
                projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="projects-item-image">
                    <div class="projects-item-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.pdfLink}" class="cta-button" target="_blank">View Details</a>
                    </div>
                `;
                projectsGrid.appendChild(projectElement);
            });
        } else {
            console.error(`Projects grid not found: ${containerId}`);
        }
    }

    // Load projects on main page
    loadProjects('projects-grid');

    // Load all projects on all-projects page
    loadProjects('all-projects-grid');

    // Blog post data
    const blogPosts = [
        {
            "title": "The Future of AI in Robotics",
            "date": "August 1, 2024",
            "category": "AI",
            "summary": "Exploring the latest trends and future prospects of AI integration in robotics.",
            "image": "images/futureofaiinrobotics.png",
            "pdfLink": "pdfs/ai_robotics_future.pdf"
        },
        {
            "title": "Advancements in Radar Technology",
            "date": "July 15, 2024",
            "category": "Technology",
            "summary": "Discussing recent breakthroughs in radar technology and their applications.",
            "image": "images/advnacement.jpg",
            "pdfLink": "pdfs/radar_tech_advancements.pdf"
        },
        {
            "title": "Ethics in AI Development",
            "date": "July 1, 2024",
            "category": "AI Ethics",
            "summary": "Addressing the ethical considerations in AI development and implementation.",
            "image": "images/ethicsinai.jpeg",
            "pdfLink": "pdfs/ai_ethics.pdf"
        }
    ];

    // Function to load blog posts
    function loadBlogPosts(containerId) {
        const blogGrid = document.getElementById(containerId);
        if (blogGrid) {
            console.log(`Blog grid found: ${containerId}`);
            blogPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'blog-post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="blog-post-image">
                    <div class="blog-post-content">
                        <h3>${post.title}</h3>
                        <p class="post-meta">${post.date} | ${post.category}</p>
                        <p>${post.summary}</p>
                        <a href="${post.pdfLink}" class="cta-button" target="_blank">Read Full Post</a>
                    </div>
                `;
                blogGrid.appendChild(postElement);
            });
        } else {
            console.error(`Blog grid not found: ${containerId}`);
        }
    }

    // Load blog posts on main page
    loadBlogPosts('blog-grid');

    // Load all blog posts on all-blogs page
    loadBlogPosts('all-blogs-grid');

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

    // Hobbies data
    const hobbies = [
        {
            "title": "Fitness",
            "description": "Dedicated to maintaining a healthy lifestyle through various fitness activities.",
            "image": "images/wellbeing.jpg",
            "blogLink": "hobbies/fitness_blog.html"
        },
        {
            "title": "Traveling",
            "description": "Exploring new cultures and places around the world.",
            "image": "images/travel.jpg",
            "blogLink": "hobbies/traveling_blog.html"
        },
        {
            "title": "Music",
            "description": "Expressing creativity through rhythm and music.",
            "image": "images/drumming.jpg",
            "blogLink": "hobbies/music_blog.html"
        },
        {
            "title": "Language Learning",
            "description": "Passionate about learning new languages and exploring different cultures.",
            "image": "images/languagelearning.svg",
            "blogLink": "hobbies/language_learning_blog.html"
        }
    ];

    // Load hobbies
    const hobbiesGrid = document.getElementById('hobbies-grid');
    if (hobbiesGrid) {
        console.log("Hobbies grid found");
        hobbies.forEach(hobby => {
            const hobbyElement = document.createElement('div');
            hobbyElement.className = 'hobby-item';
            hobbyElement.style.backgroundImage = `url('${hobby.image}')`;
            hobbyElement.innerHTML = `
                <div class="hobby-item-content">
                    <h3>${hobby.title}</h3>
                    <p>${hobby.description}</p>
                    <a href="${hobby.blogLink}" class="cta-button">Read Blog</a>
                </div>
            `;
            hobbiesGrid.appendChild(hobbyElement);
        });
    } else {
        console.error("Hobbies grid not found");
    }
});

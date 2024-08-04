// Dark mode toggle
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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
    nav.style.backgroundColor = window.scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
});

// Project data
const projects = [
    {
        "title": "AI-Powered Radar System",
        "description": "Developed an advanced radar system using AI for enhanced object detection and tracking.",
        "image": "project1.jpg",
        "link": "#"
    },
    {
        "title": "Autonomous Drone Navigation",
        "description": "Created a system for autonomous drone navigation in complex urban environments.",
        "image": "project2.jpg",
        "link": "#"
    },
    {
        "title": "Robotics in Healthcare",
        "description": "Implemented robotic solutions for assisting in medical procedures and patient care.",
        "image": "project3.jpg",
        "link": "#"
    }
];

// Load projects
const workGrid = document.getElementById('work-grid');
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'work-item';
    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="cta-button">Learn More</a>
    `;
    workGrid.appendChild(projectElement);
});

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
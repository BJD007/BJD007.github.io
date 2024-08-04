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
    "title": "Project 1",
    "description": "Description of project 1",
    "image": "project1.jpg",
    "link": "#"
  },
  {
    "title": "Project 2",
    "description": "Description of project 2",
    "image": "project2.jpg",
    "link": "#"
  },
  {
    "title": "Project 3",
    "description": "Description of project 3",
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
    "title": "Blog Post 1",
    "date": "August 1, 2024",
    "category": "AI",
    "summary": "Summary of blog post 1",
    "link": "#"
  },
  {
    "title": "Blog Post 2",
    "date": "July 15, 2024",
    "category": "Robotics",
    "summary": "Summary of blog post 2",
    "link": "#"
  },
  {
    "title": "Blog Post 3",
    "date": "July 1, 2024",
    "category": "Technology",
    "summary": "Summary of blog post 3",
    "link": "#"
  }
];

// Load blog posts
const blogGrid = document.getElementById('blog-grid');
blogPosts.slice(0, 3).forEach(post => {
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
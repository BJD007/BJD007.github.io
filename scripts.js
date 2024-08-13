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
            year: "May 2005",
            title: "Academic Excellence Award",
            description: "Recognized by the Chief Minister of Assam, India, for outstanding academic performance during school years."
        },
        {
            year: "July 2007",
            title: "Embarked on Academic Excellence",
            description: "Began a dual degree journey in Mechanical Engineering at the prestigious Vellore Institute of Technology."
        },
        {
            year: "July 2008",
            title: "Expanded Horizons with Dual Specialization",
            description: "Started a second major in Information Technology at Vellore Institute of Technology."
        },
        {
            year: "December 2008",
            title: "Cent Percent Attendance Award",
            description: "Won this pretigious and priced award for 100% attendence in the Academic Year"
        },
        {   year: "June 2009",
            title: "Internship at Worth Trust",
            description: "Gained hands-on experience in social work and community service, contributing to various projects aimed at empowering underprivileged individuals."
        },

        {
            year: "May 2009",
            title: "Best Hardware Project Award by Vellore Institute of Technology",
            description: "Awarded for innovative project work during undergraduate studies."
        },
        {
            year: "July 2010",
            title: "Internship at NTTF",
            description: "Acquired practical skills in technical training and development, focusing on engineering and technology education."
        },
        {
            year: "December 2010",
            title: "Internship at Oil India Limited",
            description: "Worked on engineering projects in the oil and gas sector, gaining insights into industrial operations and management."
        },
        {
            year: "June 2011",
            title: "Milestone Achievement: Mechanical Engineering",
            description: "Successfully completed Bachelor of Technology in Mechanical Engineering, laying the foundation for a career in innovation."
        },
        {
            year: "August 2011",
            title: "Double Success: Information Technology Degree",
            description: "Graduated with a Bachelor of Technology in Information Technology, equipping myself with a unique blend of mechanical and digital expertise."
        },
        {
            year: "August 2011",
            title: "First Career Step: TATA Technologies",
            description: "Secured a position as Graduate Engineer Trainee, quickly advancing to Application Engineer at the renowned TATA Technologies."
        },
        {
            year: "July 2012",
            title: "Distinguished Employee Recognition Award by TATA",
            description: "Received for exemplary work and dedication to projects at TATA Technologies."
        },
        {
            year: "August 2012",
            title: "Global Exposure: Chrysler LLC",
            description: "Joined Chrysler LLC as an Application Engineer, diving into the heart of automotive innovation."
        },
        {
            year: "June 2013",
            title: "Fiat Chrysler Spotlight Award",
            description: "Honored for exceptional performance and contributions during my tenure at Chrysler."
        },
        {
            year: "August 2013",
            title: "Advanced Studies: Master's Degree",
            description: "Elevated my expertise by pursuing a Master's in Mechatronics at the National University of Singapore."
        },
        {
            year: "October 2014",
            title: "Master's Degree Accomplished",
            description: "Graduated with distinction in Mechatronics from NUS, bridging the gap between mechanical systems and cutting-edge technology."
        },
        {
            year: "October 2014",
            title: "Robotics Pioneer: Infinium Robotics",
            description: "Embarked on a transformative journey in robotics, contributing to groundbreaking projects at Infinium Robotics."
        },
        {
            year: "November 2016",
            title: "Extraordinary Performance Recognition at Infinium Robotics",
            description: "Awarded for outstanding contributions to the company’s innovative projects."
        },
        {
            year: "October 2017",
            title: "Entrepreneurial Leap: Co-founded Hertzwell",
            description: "Took the bold step of co-founding Hertzwell, focusing on revolutionary AI and radar technology for autonomous systems."
        },
        {
            year: "January 2019",
            title: "Breakthrough: Hertzwell's Commercial Success",
            description: "Led Hertzwell to become a revenue-generating venture, marking a significant milestone in the company's growth."
        },
        {
            year: "January 2023",
            title: "Pursuing the Pinnacle: Doctoral Studies",
            description: "Commenced PhD in Artificial Intelligence at Bircham International University, pushing the boundaries of AI research."
        },
        {
            year: "March 2024",
            title: "Global Recognition: World No. 1 in AV Object Detection",
            description: "Hertzwell achieved world leadership in the NuScenes leaderboard for Object Detection in Autonomous Vehicles, solidifying its position at the forefront of AI technology."
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
        },
        {
            "title": "Competitions",
            "description": "Participated Competitions and Currently ongoing ones.",
            "image": "images/competition.jpg",
            "blogLink": "hobbies/competition.html"
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

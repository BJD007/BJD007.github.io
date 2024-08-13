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
            "title": "GitHub Projects",
            "description": "Uncover the cutting-edge projects hosted on my GitHub, where I bring ideas to life through code and collaboration, demonstrating expertise in AI, ML, and beyond.",
            "image" : " images/github.avif",
            //"pdfLink": "pdfs/ai_radar_system.pdf"
            "pdfLink": "https://github.com/BJD007?tab=repositories"
        },
        {
            "title": "Kaggle Projects",
            "description": "Explore the high-impact projects I've tackled on Kaggle, where competition meets creativity, and data-driven solutions lead to real-world breakthroughs.",
            "image" : " images/kaggle.webp",
            "pdfLink": "https://www.kaggle.com/competitions"
        },
        {
            "title": "LinkedIn Projects",
            "description": "Dive into the innovative projects showcased in my LinkedIn profile, where each endeavor reflects my commitment to pushing boundaries and achieving excellence.",
            "image" : " images/linked.webp",
            "pdfLink": "https://www.linkedin.com/in/bhaskarjdutta/details/projects/"
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
            "title": "Publications",
            "date": "Updated as of 2023",
            "category": "Publications",
            "summary": "Discover my latest contributions to various profession organizations, where cutting-edge research meets real-world impact. These publications showcase my work in pushing the boundaries of AI, ML, and radar technologies, reflecting a deep commitment to innovation and excellence.",
            "image": "images/publications.jpeg",
            "pdfLink": "https://www.linkedin.com/in/bhaskarjdutta/details/publications/"
        },
        {
            "title": "Conferences",
            "date": "Updated as of 2023",
            "category": "Conferences",
            "summary": "Explore my featured presentations from leading conferences, where I share groundbreaking insights into computer vision and robotics. This section highlights key moments from global platforms, showcasing my role in driving forward the next generation of intelligent systems.",
            "image": "images/conferences.jpg",
            "pdfLink": "hobbies/conferences.html"
        },
        {
            "title": "Patents",
            "date": "Updated as of 2022",
            "category": "Patents",
            "summary": "Learn about my patented innovations that are revolutionizing the automotive industry. This patent introduces a new approach to radar technology, offering unparalleled accuracy and efficiency, and setting a new standard for safety and performance in modern vehicles.",
            "image": "images/patents.jpeg",
            "pdfLink": "https://ppubs.uspto.gov/pubwebapp/ ",
            "pdfLink" : "https://patentscope.wipo.int/search/en/search.jsf"
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
                        <a href="${post.pdfLink}" class="cta-button" target="_blank"> Dive-in</a>
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
            "blogLink": "https://www.fitbit.com/user/9GZ5NC"
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
            "blogLink": "https://www.duolingo.com/profile/Polyglot_007"
        },
        {
            "title": "Book Reading",
            "description": "Passionate about reading everything under the sun",
            "image": "images/book-reading.jpg",
            "blogLink": "https://www.goodreads.com/user/show/168320684-bhaskar-jyoti"
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
                    <a href="${hobby.blogLink}" class="cta-button">Explore</a>
                </div>
            `;
            hobbiesGrid.appendChild(hobbyElement);
        });
    } else {
        console.error("Hobbies grid not found");
    }
});

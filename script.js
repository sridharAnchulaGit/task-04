document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-link').addEventListener('click', function(e) {
      e.preventDefault();
      loadAboutMeContent();
      scrollToSection('dynamic-content');
    });
    
  });
  
  function loadAboutMeContent() {
    const content = `
      <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate web developer with a background in computer science.</p>
        <h3>Education</h3>
        <p>Bachelor's in Computer Science from KL University</p>
        <p>Master's in Software Engineering</p>
        <h3>Professional Experience</h3>
        <p>Front-End Developer at Tech Company</p>
        <p>Web Developer Intern at Startup</p>
      </section>
    `;
    document.getElementById('dynamic-content').innerHTML = content;
  }
  
  function loadProjectsContent() {
    const content = `
      <section id="projects">
        <h2>Projects</h2>
        <p>This is the Projects section. Showcase your projects here with descriptions and links to live demos or repositories.</p>
      </section>
    `;
    document.getElementById('dynamic-content').innerHTML = content;
  }
  
  function loadContactContent() {
    const content = `
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the Contact section. Add your contact details or a contact form here.</p>
      </section>
    `;
    document.getElementById('dynamic-content').innerHTML = content;
  }
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
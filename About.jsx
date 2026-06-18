import React from 'react';
import './About.css';

const SKILLS = [
  { category: 'Frontend',  items: ['React.js', 'Angular', 'JavaScript (ES6+)', 'TypeScript', 'JQuery', 'HTML5 / CSS3'] },
  { category: 'Backend',   items: ['ASP.NET Core', '.NET MVC', 'C#', 'REST APIs', 'GraphQL'] },
  { category: 'Database',  items: ['MySQL', 'SQL'] },
  { category: 'Tools',     items: ['Git / GitHub', 'Docker', 'Postman', 'VS Code', 'Visual Studio', 'IIS Hosting'] },
];

const STATS = [
  { value: '2+',  label: 'Years Experience' },
  { value: '5+', label: 'Projects Completed' },
  { value: '8+',  label: 'Technologies' },
];

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <span className="section-subtitle">Get to know me</span>
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="deco-line" />

      <div className="about__grid">
        {/* Left – description */}
        <div className="about__bio">
          <p className="about__para">
            Hi! I'm a passionate <strong>Software Developer</strong> based in India, with a love
            for building elegant, performant, and user-centric web applications. I thrive at the
            intersection of engineering and creativity — turning complex problems into clean,
            intuitive solutions.
          </p>
          <p className="about__para">
            With hands-on experience in both frontend and backend technologies, I enjoy building
            full-stack products from the ground up. I'm constantly learning, exploring new
            frameworks, and sharpening my craft.
          </p>
          <p className="about__para">
            When I'm not coding, you'll find me contributing to open-source projects, reading
            about emerging tech trends, or brewing the perfect cup of coffee ☕.
          </p>

          {/* Stats */}
          <div className="about__stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat-card">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – skills */}
        <div className="about__skills">
          <h3 className="about__skills-title">
            <span className="about__skills-title-prefix">// </span>Tech Stack
          </h3>
          <div className="about__skills-grid">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="about__skill-group">
                <span className="about__skill-category">{category}</span>
                <ul className="about__skill-list">
                  {items.map((item) => (
                    <li key={item} className="about__skill-item">
                      <span className="about__skill-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

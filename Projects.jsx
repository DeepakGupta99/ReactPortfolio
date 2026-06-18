import React, { useState } from 'react';
import './Projects.css';

/* ── Replace these with your real projects ── */
const PROJECTS = [
  {
    id: 1,
    title:       'WOW - Woy Of Working(CRM System)',
    status:      'Completed',
    description:
      'WOW (Way of Working) is a web-based project and resource management application developed for Prosares Solutions to manage customers, engagements, projects, and employee records. It provides task and ticket management, timesheet tracking, leave approval workflows, and project status monitoring. The system also includes centralized master management and an integrated calendar for improved visibility and operational efficiency.',
    tags:        ['React', 'JavaScript', 'Dotnet Core Web API', 'C#', 'SQL'],
    github:      'https://github.com/yourusername/ecommerce',
    live:        'https://your-ecommerce.vercel.app',
    icon:        '🛒',
  },
  {
    id: 2,
    title:       'Tata Digital - Resource Management',
    status:      'Completed',
    description:
      'Tata Digital – Resource Management is a web-based workforce and resource management application designed to manage resources, projects, vendors, departments, tasks, and organizational hierarchies through multi-level mapping. I developed resource onboarding and offboarding workflows with manager approval processes, along with timesheet and calendar modules for daily effort tracking. The system also includes automated utilities that generate and email periodic Excel reports containing resource allocation, project mapping, and utilization details.',
    tags:        ['JQuery', 'Dotnet Core Web API', 'C#', 'SQL'],
    github:      'https://github.com/yourusername/chat-app',
    live:        'https://your-chat.vercel.app',
    icon:        '💬',
  },
  {
    id: 3,
    title:       'Tata Capital - Document Movement Tracking System',
    status:      'Completed',
    description:
      'Tata Capital – Document Movement Tracking System (DMTS) is a web-based application designed to track the complete lifecycle of physical documents across branches, storage centers, and writers. I developed modules for bulk data uploads, barcode generation, POD creation and tracking, transaction history management, and integrations with courier services such as Blue Dart. The system enables end-to-end document movement tracking, automated utilities, and operational monitoring while ensuring visibility and accountability at every stage of the workflow.',
    tags:        ['JQuery', 'Dotnet Core Web API', 'C#', 'SQL'],
    github:      'https://github.com/yourusername/task-manager',
    live:        null,
    icon:        '📋',
  },
  {
    id: 5,
    title:       'Portfolio CMS',
    status:      'Working',
    description:
      'Headless CMS built from scratch to manage portfolio content dynamically, with an admin panel and media uploads.',
    tags:        ['React', 'HTML', 'CSS3', 'JavaScript'],
    github:      'https://github.com/yourusername/portfolio-cms',
    live:        null,
    icon:        '🧩',
  },
  {
    id: 6,
    title:       'Vulnerability Management System',
    status:      'Completed',
    description:
      'Production-ready Django API boilerplate with JWT auth, role-based access control, rate limiting, and Swagger docs.',
    tags:        ['Django', 'Python', 'MySQL', 'HTML', 'CSS3', 'JavaScript'],
    github:      'https://github.com/yourusername/api-starter',
    live:        null,
    icon:        '🔧',
  },
];

const STATUS_COLORS = {
  Completed: { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.35)', text: '#4ade80' },
  Working:   { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.35)', text: '#fbbf24' },
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Completed', 'Working'];

  const visible = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-subtitle">What I've built</span>
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="deco-line" />

        {/* Filter tabs */}
        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {visible.map((project) => {
            const sc = STATUS_COLORS[project.status];
            return (
              <div key={project.id} className="project-card">
                {/* Header */}
                <div className="project-card__header">
                  <span className="project-card__icon">{project.icon}</span>
                  <span
                    className="project-card__status"
                    style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                  >
                    {project.status === 'Working' ? '⚡ In Progress' : '✓ Completed'}
                  </span>
                </div>

                {/* Body */}
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer"
                     className="project-card__link project-card__link--github">
                    {/* GitHub icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.23-.02-2.23-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
                    </svg>
                    GitHub
                  </a>
                  {/* {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                       className="project-card__link project-card__link--live">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )} */}
                </div>

                {/* Hover glow */}
                <div className="project-card__glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to a string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * can freely use on your site.
 */
import image from "../images/christopher-gower-m_HRfLhgABo-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, updated to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Interactive Sorting Algorithm Visualizer",
    description:
      "A web-based tool that visualizes various sorting algorithms. It provides step-by-step animations and explanations to help users understand how each algorithm works.",
    url: "https://example.com/sorting-visualizer",
  },
  {
    title: "Responsive Personal Portfolio Website",
    description:
      "A personal portfolio website showcasing my web development projects, skills, and experience. Built with modern web technologies and optimized for performance.",
    url: "https://example.com/portfolio",
  },
  {
    title: "Full-Stack E-commerce Application",
    description:
      "Developed a full-featured e-commerce application with user authentication, product management, shopping cart, and order processing functionalities. Utilizes the MERN stack.",
    url: "https://example.com/e-commerce-app",
  },
  {
    title: "Open Source Project Contributions",
    description:
      "Active contributor to various open source projects. Engaged in tasks such as bug fixing, feature development, and documentation improvements.",
    url: "https://github.com/yourusername?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

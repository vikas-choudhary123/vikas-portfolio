import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
  {
    imgSrc: '/images/food-order.png',
    title: 'Food Order Application',
    tags: ['API', 'Development'],
    projectLink: 'https://food-daily.netlify.app/'
  },
  {
    imgSrc: '/images/vikas-portfolio.png',
    title: 'Portfolio',
    tags: ['API'],
    projectLink: ''
  },
  {
    imgSrc: '/images/book-store.png',
    title: 'Book Store Web',
    tags: ['Development', 'API'],
    projectLink: ''
  }
];


const Work = () => {
  return (
    <section
    id='project' 
    className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
        My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink} ,key) => (
            <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

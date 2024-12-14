import React from 'react'
import SkillCard from './SkillCard';

function Skill() {

    const skillItem = [
        {
          imgSrc: '/images/html-1.svg',
          label: 'Html',
          desc: 'Structure Markup'
        },
        {
          imgSrc: '/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '/images/python-5.svg',
          label: 'Python',
          desc: 'Backend Logic'
        },
        {
          imgSrc: '/images/mysql-3.svg',
          label: 'MySql',
          desc: 'Data Storage'
        },
      ];
  return (
    <section id='skills' className="section">
        <div className="container">


            <h2 className="headline-2">
            Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc}, key)  => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>


        </div>
    </section>
  )
}

export default Skill
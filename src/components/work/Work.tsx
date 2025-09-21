import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <div className="section__subtitle">Most Recent</div>

        <Works />
    </section>
  )
}

export default Work
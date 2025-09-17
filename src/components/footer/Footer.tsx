import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Ibnu</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/aththobarii" className="footer__social-link" target='_blank'>
            <i className='bx bxl-instagram'></i>
        </a>

        <a href="https://www.tiktok.com/@aththobari" className="footer__social-link" target='_blank'>
            <i className="bx bxl-tiktok"></i>
        </a>

        <a href="https://youtube.com/@Ice_Tea117" className="footer__social-link" target='_blank'>
            <i className='bx bxl-youtube'></i>
        </a>
            </div>
            
            <span className='footer__copy'>&#169; CrypticalCoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          
        </p>
        <p className='footer-subscription-text'>
          You may unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/#top' className='social-logo'>
              RB
              <i class="fas fa-guitar"></i>
            </Link>
          </div>
          <small class='website-rights'>Ryan Brooks © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/ryanbrooks99'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/ryanbrooks0101/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
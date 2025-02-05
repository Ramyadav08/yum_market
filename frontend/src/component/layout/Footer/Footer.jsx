import React from 'react';
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';
import './footer.css';

function Footer() {
  return (
    <footer id='footer'>
        <div className='leftFooter'>
            {/* <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt='playStore'></img>
            <img src={appStore} alt='appStore'></img> */}
        
        </div>
        <div className='midFooter'>
           <h1>YUM MARKET</h1>
           <p>High Quality is our priority</p>
           <p>Copyrights 2023 &copy;yum_market</p>
        </div>
        <div className='rightFooter'>
          <h4>Follow Us</h4>
          <a href='#' >Instagram</a>
          <a href='#' >LinkedIn</a>
          <a href='#' >Facebook</a>
        </div>
    </footer>
  )
}

export default Footer

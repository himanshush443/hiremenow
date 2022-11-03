import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby 8-bit sus hoodie viral meditation messenger bag four loko
            cronut waistcoat hammock yr brunch. Wolf tote bag bruh chicharrones,
            jianbing af +1 umami pabst. Umami af skateboard, lo-fi taxidermy DSA
            twee trust fund seitan bicycle rights.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

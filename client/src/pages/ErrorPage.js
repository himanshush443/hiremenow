import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <Link to='/'>Homepage</Link>
      </div>
    </Wrapper>
  );
};
export default ErrorPage;

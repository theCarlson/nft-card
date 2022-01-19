import avatar from '../images/image-avatar.png';

const CardUser = () => {
  return (
    <div className='card-content_user'>
      <img className='card-content_user-avatar' src={avatar} alt='Avatar' />
      <div className='card-content_user-name'>
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default CardUser;

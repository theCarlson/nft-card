import Card from './components/layout/Card';
import CardContent from './components/CardContent';
import CardDetails from './components/CardDetails';
import CardMeta from './components/CardMeta';
import CardUser from './components/CardUser';
import './App.css';

const App = () => {
  return (
    <div className='container'>
<<<<<<< HEAD
      <div className='card'>
        <div className='card-content'>
          <div className='card-content_overlay'></div>
          <svg
            className='card-content_overlay-eye'
            width='48'
            height='48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='none' fill-rule='evenodd'>
              <path d='M0 0h48v48H0z' />
              <path
                d='M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z'
                fill='#FFF'
                fill-rule='nonzero'
              />
            </g>
          </svg>
          <img className='card-content_img' src={nftImg} alt='' />
        </div>

        <div className='card-content_details'>
          <p className='card-content_details-title'>Equilibrium #3429</p>

          <p className='card-content_details-explanation'>
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>

        <div className='card-content_meta'>
          <div className='card-content_meta-left'>
            <svg
              className='card-content_meta-left-pendant'
              viewBox='0 3 15 15'
              width='11'
              height='18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z'
                fill='#00FFF8'
              />
            </svg>
            <p>0.041ETH</p>
          </div>
          <div className='card-content_meta-right'>
            <svg
              className='card-content_meta-left-clock'
              viewBox='0 2 20 15'
              width='17'
              height='17'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z'
                fill='#8BACD9'
              />
            </svg>
            <p>3 days left</p>
          </div>
        </div>

        <div className='card-content_user'>
          <img className='card-content_user-avatar' src={avatar} alt='Avatar' />
          <div className='card-content_user-name'>
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
=======
      <Card>
        <CardContent />
        <CardDetails />
        <CardMeta />
        <CardUser />
      </Card>
>>>>>>> e4cf92113581ed7cc4447586e52762d02d5687cf
    </div>
  );
};

export default App;

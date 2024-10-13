import '../css/prevwork.css';
import PortOne from '../assets/portfolio/phar.png'
import PortTwo from '../assets/portfolio/delce.png'
import PortThree from '../assets/portfolio/donation.png'
import PortFour from '../assets/portfolio/health.png'
import PortFive from '../assets/portfolio/nadai.png'
import PortSix from '../assets/portfolio/vipsport.png'
// import PortSeven from '../assets/portfolio/pharmacy.png'
import PortEight from '../assets/portfolio/bry.png'
import PortNine from '../assets/portfolio/everything.png'
import PropTypes from 'prop-types'



const PrevWork = ({sliceValue}) => {

  const portArray = [
    {
      id: 1,
      imgUrl: PortOne,
      siteLink: '',
      siteName: 'Pharmacy Website Landing Page',
      siteCategory: 'Landing Page',
    },
    {
      id: 2,
      imgUrl: PortThree,
      siteLink: 'https://donation-website.vercel.app/',
      siteName: 'Donation Website ',
      siteCategory: 'Website Design/Front End Deveelopment',
    },
    {
      id: 3,
      imgUrl: PortFour,
      siteLink: 'https://www.fshealth.com/',
      siteName: 'Health website',
      siteCategory: 'Website Design',
    },
    {
      id: 4,
      imgUrl: PortTwo,
      siteLink: 'https://delcerose24.com/',
      siteName: 'Personal Website | Online Store',
      siteCategory: 'Website Design',
    },
    {
      id: 5,
      imgUrl: PortSix,
      siteLink: 'https://vipsportbets.com/',
      siteName: 'Live Sport Odd website ',
      siteCategory: 'Website Development | React, Node, Express',
    },
    {
      id: 6,
      imgUrl: PortNine,
      siteLink: 'https://everythinglitterandglam.com/',
      siteName: 'Clothing Ecommerce website ',
      siteCategory: 'Website Design / Wordpress',
    },
    {
      id: 7,
      imgUrl: PortEight,
      siteLink: 'https://brycigars.com/',
      siteName: 'Ecommerce website ',
      siteCategory: 'Website Design / Wordpress',
    },
    {
      id: 8,
      imgUrl: PortOne,
      siteLink: 'https://sledgelifecoaching.com/',
      siteName: 'Pharmacy Website Landing Page',
      siteCategory: 'Landing Page',
    },
    {
      id: 9,
      imgUrl: PortFive,
      siteLink: 'https://nadaiapparel.com/',
      siteName: 'Ecommerce Website',
      siteCategory: 'Landing Page',
    },

  ]
  return (
    <>




      <section className='ports'>
        <div className="port-header">
          <div className='port-header-cont'>
            <div className='port-header-cleft'>
              <span>
                <h2 className='text-clip'>Explore my Works</h2>

                <p>Each project highlights my approach to problem solving, creativity and tecnical expertise. <br />
                  Explore to surprise </p>
              </span>
            </div>
            <div className='port-header-cright'>
              <span>
                <a href=''>
                  View All
                </a>
              </span>
            </div>
          </div>

        </div>


        <div className='port-prev'>
          <div className='port-prev-grid'>



            {
              portArray?.slice(0, sliceValue).map(port => {
                return (
                  <>
                    <div className='p-port-gcont' key={port.id}>
                      <a href={port.siteLink}>
                        <img src={port.imgUrl} alt={port.siteName} />

                        <div className='p-port-gbody'>
                          <span>
                            <h1>{port.siteName}</h1>
                            <p>{port.siteCategory}</p>
                          </span>
                          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" height={30} width={30} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

PrevWork.propTypes = {
  sliceValue: PropTypes.number.isRequired
}

export default PrevWork;

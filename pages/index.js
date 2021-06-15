import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Button from '../components/button'
import ChangeFeature from '../components/changeFeature'
import NextStep from '../components/nextStep'
import Roundworks from '../components/roundworks'
import { motion } from 'framer-motion'

export default function Home() {

  //Set the navigation to sticky when you scroll past it
  const [isSticky, setSticky] = useState(false);  
  const handleScroll = () => {
    setSticky(document.querySelector('.navigation').getBoundingClientRect().top-20 <= 0);
  }  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    }
  }, []);


  // Set active states when clicked
  const [values, setValues] = useState({
      moreInfo: true, 
      whatCanIChange: false,
      signOffForm: false,
      whatHappensNext: false,
  })
  const handleActiveChange = e => {
      // Reset all state to false
      setValues({moreInfo: false, whatCanIChange: false, signOffForm: false, whatHappensNext: false });
      // Get the currently clicked button
      const {area} = e.target.dataset;
      // update the relevant state to true
      setValues({ [area]: true} );
  }

  // Set active states when scrolled over
  const handleScrollActive = e => {
    const scrollElems = [
      'moreInfo',
      'whatCanIChange',
      'signOffForm',
      'whatHappensNext'
    ];
    scrollElems.map((elem, i) => {
      if(document.getElementById(elem).getBoundingClientRect().top-20 <= 100) {
        setValues({moreInfo: false, whatCanIChange: false, signOffForm: false, whatHappensNext: false });
        setValues({ [elem]: true} );
      }
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollActive);
    
    return () => {
      window.removeEventListener('scroll', () => handleScrollActive);
    }
  }, []);

    
  const nextSteps = [
    'Send website imagery and branding to your designer',
    'Provide assets that we need, certificates, testimonials etc.',
    'Review the copywriting concept quickly',
    'Provide access to any third party accounts (MailChimp, etc)',
    'Review your staging links and offer feedback quickly',
    'Find out where your email and domain names are',
  ];

  const changeFeatures = [
    {
      "feature": "Minor Copy",
      "outcome": "positive"
    },
    {
      "feature": "Imagery",
      "outcome": "positive"
    },
    {
      "feature": "Call To Actions",
      "outcome": "positive"
    },
    {
      "feature": "Branding",
      "outcome": "negative"
    },
    {
      "feature": "Layout Changes",
      "outcome": "negative"
    },
    {
      "feature": "Colour Scheme",
      "outcome": "negative"
    },
  ];



  // let padRef = useRef({});

  // function handleClearSignature() {
  //     padRef.current.clear();
  // }

  // const [signature, setSignature] = useState(false);

  return (

    <Layout>

        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Adtrak Sign Off Form</title>
            <meta
            name="description"
            content="Adtrak Sign off Form"
            />
            <meta name="og:title" content="Adtrak Sign off Form" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>        

        <motion.div 
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <Header 
            heading="Website Sign Off"
            subheading="Complete the form below to move to the next stage of your journey with Adtrak."
          />

          <section>
            <Container>
              <div className="px-6 md:px-20">
                <div className="md:flex md:justify-between md:items-center p-6 mx-auto font-light text-white bg-secondary-dark lg:p-10 xl:p-16 mt-[-30px]">
                  <p className="xl:text-lg xl:w-2/3 2xl:w-1/2">
                    <span className="block text-secondary-light lg:inline">Need another look? </span> 
                    Click the link to review your design again before signing it off to code.
                  </p>
                  <div className="md:justify-center md:flex md:w-3/12 lg:w-auto">
                    <Button
                      buttonLabel="View design"
                      destination="/"
                    />
                  </div>                
                </div>
              </div>
            </Container>
          </section>

          <section className="navigation">
            <div className={` px-6 border-b border-gray-100 md:px-20 ${isSticky ? 'md:sticky-navigation' : ''}`}>
              <Container>
                <ul className="w-full sm:flex sm:justify-between xl:w-2/3 xl:mx-auto">
                  <li className="3xl:w-1/4">
                    <a
                        href="#moreInfo"
                        onClick={handleActiveChange}
                        data-area="moreInfo"
                        className={`block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to transition ${values.moreInfo ? 'text-primary border-primary' : 'border-transparent'}`}>
                        More Information
                    </a>
                  </li>

                  <li className="3xl:w-1/4">
                    <a
                        href="#what-can-i-change"
                        onClick={handleActiveChange}
                        data-area="whatCanIChange"
                        className={`block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to transition ${values.whatCanIChange ? 'text-primary border-primary' : 'border-transparent'}`}>
                        What Can I Change?
                    </a>
                  </li>

                  <li className="3xl:w-1/4">
                    <a
                        href="#signoff-form"
                        onClick={handleActiveChange}
                        data-area="signOffForm"
                        className={`block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to transition ${values.signOffForm ? 'text-primary border-primary' : 'border-transparent'}`}>
                        Signoff Form
                    </a>
                  </li>

                  <li className="3xl:w-1/4">
                    <a
                        href="#what-happens-next"
                        onClick={handleActiveChange}
                        data-area="whatHappensNext"
                        className={`block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to transition ${values.whatHappensNext ? 'text-primary border-primary' : 'border-transparent'}`}>
                        What Happens Next
                    </a>
                  </li>
                </ul>
              </Container>
            </div>
          </section>


          <section id="moreInfo" className="mb-4 border-b border-gray-100">
            <Container>
              <div className="p-6 md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 md:mx-auto content">
                <p>By agreeing to the terms of this document and signing as below, I am happy with the design of my new website and will not look to make any further changes during the development stage, or before it goes live.</p>

                <p>Any structural, functionality or development changes after signing this document may be subject to a charge of £100 per hour. Minor copy or imagery changes are not affected by this.</p>

                <p>We want to produce the best website possible for you that meets your end requirements. In order to do this effectively, Adtrak will design all unique pages and create copy in order for you to make any changes that you feel are necessary.</p>

                <p>Changes before the development stage are easier to implement, and as such, all parties involved need to be happy with the design before development begins.</p>
              </div>
            </Container>
          </section>


          <section id="whatCanIChange">

            <Container>
            
              <div className="p-6 md:mx-auto md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 lg:text-center">

                <h2 className="mb-4">What can I change?</h2>
                
                <p className="mx-auto lg:w-2/3">We understand you may still want to change elements of your site going forwards. The table below details what you can and can’t change after the sign off process.</p>
              
                <table className="w-full my-8 text-left">
                  <thead>
                    <tr>
                      <td>Item</td>
                      <td className="text-center">Can it change?</td>
                    </tr>
                  </thead>
                  <tbody>
                    {changeFeatures.map((item, i) => {
                      return (
                        <ChangeFeature 
                          key={i}
                          featureTitle={item.feature}
                          outcome={item.outcome}
                        />
                      )
                    })}
                  </tbody>
                </table>

                <p className="mx-auto opacity-50">If you have any questions about specific things you may wish to change that aren’t listed in the table then please contact your Adtrak account manager.</p>

              </div>

            </Container>
          </section>


          <section id="signOffForm" className="bg-gray-100">
            <Container>
              
              <div className="p-6 md:p-20 md:mx-auto lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 lg:text-center">
                
                <h2 className="mb-4">Sign Off Form</h2>

                <div className="mx-auto lg:w-2/3 content">
                  <p>Ready to sign off? Great!</p>
                  <p>Complete the form below to notify your Account Manager and Client Team that you're ready to move onto the next stage of the project.</p>
                </div>

                <form id="form" encType="multipart/form-data" action="https://formspree.io/f/xbjqykyw" method="POST" className="flex flex-wrap my-6 -m-1 overflow-x-hidden text-left ">

                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Name *</span>
                    <input required type="text" className="w-full" name="Name" placeholder="Name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Company Name *</span>
                    <input required type="text" className="w-full" name="Company Name" placeholder="Company name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Position In Company *</span>
                    <input required type="text" className="w-full" name="Position In Company" placeholder="Position in company *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Email Address *</span>
                    <input required type="email" className="w-full" name="Email" placeholder="Email address *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Website Name *</span>
                    <input required type="text" className="w-full" name="Website Name" placeholder="Website Name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Web Address *</span>
                    <input required type="url" className="w-full" name="Web Address" placeholder="Web Address *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Your Adtrak account manager *</span>
                    <select className="w-full" name="Account Manager">
                      <option value="Aaron Robb" defaultValue>Aaron Robb</option>
                      <option value="Ben Shaw">Ben Shaw</option>
                      <option value="Chris Robinson">Chris Robinson</option>
                      <option value="Luke COrner">Luke Corner</option>
                      <option value="Paul O'Donoghue">Paul O'Donoghue</option>
                      <option value="Xavier Hodgetts">Xavier Hodgetts</option>
                      <option value="Unsure">Unsure / Not Listed Here</option>
                    </select>
                  </label>
                  <label className="w-full p-3">
                    <input required type="checkbox" className="" name="Confirmation Statement" value="I am happy with the design of my new website, please proceed to the development / code phase." />
                    <span className="ml-2 opacity-75">I am happy with the design of my new website, please proceed to the development / code phase.</span>
                  </label>

                  {/* <label className="w-full p-3 sig-pad">
                    
                    <span className="">Your signature *</span>
                    
                    <SignatureCanvas
                      penColor='black'
                      ref={padRef}
                      clearOnResize={true}
                      canvasProps={{
                        width: 310, 
                        height: 150, 
                        className: 'sigCanvas bg-white border border-gray-300'
                      }}
                    />
                    
                    <button arial-label="Clear signature pad" className="px-2 py-1 mt-3 opacity-50 text-2xs" onClick={() => {handleClearSignature()}}>Clear signature</button>
                    
                    <button arial-label="Finished signature" className="px-2 py-1 mt-3 text-2xs" onClick={() => {
                      let signature = document.querySelector('.sigCanvas').toDataURL('image/png');
                      document.querySelector('.sig-pad').classList.add('opacity-50', 'pointer-events-none');
                      setSignature(signature);
                    }}>Finish signature</button>
                    
                  </label> */}
                  
                  {/* <input required type="hidden" className="signature-image" value={signature} name="signature" /> */}
                  
                  <input type="text" name="_gotcha" className="hidden" />
                  
                  <div className="w-full p-3">
                    <input type="submit" className="p-3 text-white transition duration-300 cursor-pointer bg-primary focus:text-white" value="Send Enquiry" />
                  </div>

                </form>
                
              </div>

            </Container>

          </section>

          <section id="whatHappensNext" className="bg-secondary">

            <Container>

              <div className="p-6 text-white md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-2/3 lg:px-0 lg:mx-auto">
                
                <div className="mx-auto text-center">

                  <h2 className="mb-4">What happens next?</h2>
                  
                  <div className="mx-auto lg:w-2/3 content">
                    <p>Once you've signed off your design, we'll begin to code your website. This transforms the design into a fully functioning, accessible website.</p>
                    <p className="text-secondary-light">In the meantime, we ask that you...</p>
                  </div>
                  
                </div>

                <div className="flex flex-wrap mt-6">

                  {nextSteps.map((step, i) => {
                    return(
                        <NextStep key={i} step={step} />                      
                    )
                  })}

                </div>

              </div> 

            </Container>           


            <Roundworks />
            
          </section>
          
        </motion.div>

    </Layout>

  )
}

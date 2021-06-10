import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Button from '../components/button'
import SignatureCanvas from 'react-signature-canvas'
import { useRef, useState } from 'react'
import Container from '../components/container'
import IconThumb from '../components/iconThumb'
import { motion } from 'framer-motion'

export default function Home() {

  let padRef = useRef({});

  function handleClearSignature() {
      padRef.current.clear();
  }

  const [signature, setSignature] = useState(false);

  return (

    <Layout>

        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Adtrak Signoff Form</title>
            <meta
            name="description"
            content="Adtrak Signoff Form"
            />
            <meta name="og:title" content="Adtrak Signoff Form" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>        

        <motion.div 
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <Header />

          <section>
            <Container>
              <div className="px-6 md:px-20">
                <div className="md:flex md:justify-between md:items-center p-6 mx-auto font-light text-white bg-secondary-dark lg:p-10 xl:p-16 mt-[-30px]">
                  <p className="xl:text-lg xl:w-2/3 2xl:w-1/2">
                    <span className="block text-secondary-light lg:inline">Need another look? </span> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus. 
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

          <section className="px-6 border-b border-gray-100 md:px-20">
            <Container>
              <ul className="w-full sm:flex sm:justify-between xl:w-2/3 xl:mx-auto">
                <li className="3xl:w-1/4">
                  <a href="#more-information" className="block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to text-primary border-primary">More Information</a>
                </li>
                <li className="3xl:w-1/4">
                  <a href="#what-can-i-change" className="block p-4 pl-0 border-b-2 border-transparent md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to">What Can I Change?</a>
                </li>
                <li className="3xl:w-1/4">
                  <a href="#signoff-form"  className="block p-4 pl-0 border-b-2 border-transparent md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to">Sign Off Form</a>
                </li>
                <li className="3xl:w-1/4">
                  <a href="#what-happens-next"  className="block p-4 pl-0 border-b-2 border-transparent md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to">What Happens Next?</a>
                </li>
              </ul>
            </Container>
          </section>


          <section id="more-information" className="mb-4 border-b border-gray-100">
            <Container>
              <div className="p-6 md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 md:mx-auto content">
                <p>By agreeing to the terms of this document and signing as below, I am happy with the design of my new website and will not look to make any further changes during the development stage, or before it goes live.</p>

                <p>Any structural, functionality or development changes after signing this document may be subject to a charge of £100 per hour. Minor copy or imagery changes are not affected by this.</p>

                <p>We want to produce the best website possible for you that meets your end requirements. In order to do this effectively, Adtrak will design all unique pages and create copy in order for you to make any changes that you feel are necessary.</p>

                <p>Changes before the development stage are easier to implement, and as such, all parties involved need to be happy with the design before development begins.</p>
              </div>
            </Container>
          </section>


          <section id="what-can-i-change">

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
                    <tr>
                      <td>Minor copy</td>
                      <td><IconThumb outcome="positive" /></td>
                    </tr>
                    <tr>
                      <td>Images</td>
                      <td><IconThumb outcome="positive" /></td>
                    </tr>
                    <tr>
                      <td>Another item</td>
                      <td><IconThumb outcome="positive" /></td>
                    </tr>
                    <tr>
                      <td>Something else</td>
                      <td><IconThumb outcome="positive" /></td>
                    </tr>
                    <tr>
                      <td>Another thing</td>
                      <td><IconThumb outcome="negative" /></td>
                    </tr>
                    <tr>
                      <td>Item goes here</td>
                      <td><IconThumb outcome="negative" /></td>
                    </tr>
                    <tr>
                      <td>Can I change this</td>
                      <td><IconThumb outcome="negative" /></td>
                    </tr>
                  </tbody>
                </table>

                <p className="mx-auto opacity-50">If you have any questions about specific things you may wish to change that aren’t listed in the table then please contact your Adtrak account manager.</p>

              </div>

            </Container>
          </section>


          <section id="signoff-form" className="bg-gray-100">
            <Container>
              
              <div className="p-6 md:p-20 md:mx-auto lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 lg:text-center">
                
                <h2 className="mb-4">Sign Off Form</h2>

                <p className="mx-auto lg:w-2/3">Ready to sign off? Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ultricies fringilla.</p>

                <form id="form" encType="multipart/form-data" action="https://formspree.io/f/YOURAPI" method="POST" className="flex flex-wrap my-6 -m-1 overflow-x-hidden text-left ">

                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Name *</span>
                    <input required type="text" className="w-full" name="name" placeholder="Name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Company Name *</span>
                    <input required type="text" className="w-full" name="company_name" placeholder="Company name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Position In Company *</span>
                    <input required type="text" className="w-full" name="position_in_company" placeholder="Position in company *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Email Address *</span>
                    <input required type="email" className="w-full" name="email" placeholder="Email address *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Website Name *</span>
                    <input required type="text" className="w-full" name="website_name" placeholder="Website Name *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Web Address *</span>
                    <input required type="url" className="w-full" name="web_address" placeholder="Web Address *" />
                  </label>
                  <label className="w-full p-3 md:w-1/2">
                    <span className="">Your Adtrak account manager *</span>
                    <select className="w-full" name="account_manager">
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
                    <input required type="checkbox" className="" name="confirmation" />
                    <span className="ml-2 opacity-75">I am happy with the design of my new website, please proceed to the development / code phase.</span>
                  </label>

                  <label className="w-full p-3 sig-pad">
                    <span className="">Your signature *</span>
                    <SignatureCanvas
                      penColor='black'
                      ref={padRef}
                      canvasProps={{
                        width: 310, 
                        height: 150, 
                        className: 'sigCanvas bg-white border border-gray-300'
                      }}
                    />
                    <button arial-label="Clear signature pad" className="px-2 py-1 mt-3 text-2xs" onClick={() => {handleClearSignature()}}>Clear signature</button>
                    <button arial-label="Finished signature" className="px-2 py-1 mt-3 text-2xs" onClick={() => {
                      let signature = padRef.current.toDataURL('image/png');
                      let sigPad = document.querySelector('.sig-pad').classList.add('opacity-50', 'pointer-events-none');
                      setSignature(signature);
                    }}>Finish signature</button>
                  </label>
                  
                  <input required type="hidden" className="signature-image" value={signature} name="signature" />
                  
                  <input type="text" name="_gotcha" className="hidden" />
                  
                  <div className="w-full p-3">
                    <input type="submit" className="p-3 text-white transition duration-300 cursor-pointer bg-primary focus:text-white" value="Send Enquiry" />
                  </div>

                </form>
                
              </div>

            </Container>

          </section>

          <section id="what-happens-next" className="bg-secondary">

            <Container>

              <div className="p-6 text-white md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-2/3 lg:px-0 lg:mx-auto">
                
                <div className="mx-auto text-center">

                  <h2 className="mb-4">What happens next?</h2>
                  
                  <p className="mx-auto lg:w-2/3">Ready to sign off? Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ultricies fringilla.</p>
                  
                </div>

                <div className="flex flex-wrap mt-6">

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                  <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
                    <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                      <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                      <p className="px-4">Send website imagery to your designer</p>
                    </div>
                  </div>

                </div>

              </div> 

            </Container>           


            <Container>
              <div className="p-6 lg:p-20">
                
                <div className="items-center justify-between p-6 text-white lg:p-20 bg-secondary-dark md:flex">

                  <Image src="/images/roundworks.png" alt="Partnered with Roundworks IT" width={199} height={44} />

                  <div className="my-4 md:px-8 md:my-0 xl:text-lg">

                    <p className="">We've partnered with Roundworks for IT Support.</p>

                    <p>Lorem ipsum dalor sit amet</p>
                    
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      buttonLabel="Find out more"
                      destination="https://itsupport.adtrak.co.uk/"
                    />
                  </div>

                </div>
                
              </div>
              
            </Container>
            
          </section>
          
        </motion.div>

    </Layout>

  )
}

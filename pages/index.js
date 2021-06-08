import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import IconThumb from '../components/iconThumb'
import { motion } from 'framer-motion'

export default function Home() {

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
              <div className="w-11/12 p-6 mx-auto font-light text-white bg-secondary-dark md:p-20 mt-[-20px]">
                <p>
                  <span className="text-secondary-light">Need another look? </span> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus. 
                </p>
                <Link href="/">
                    <a className="inline-block p-3 mt-2 text-white bg-primary">View design</a>
                </Link>
              </div>
            </Container>
          </section>

          <section className="mb-4 border-b border-gray-100">
            <Container>
              <ul className="p-6 md:p-20">
                <li>
                  <a href="#" data-scroll="more-information" className="block p-4 pl-0 border-b-2 sm:inline-block scroll-to text-primary border-primary">More Information</a>
                </li>
                <li>
                  <a href="#" data-scroll="what-can-i-change" className="block p-4 pl-0 border-b-2 border-transparent sm:inline-block scroll-to">What Can I Change?</a>
                </li>
                <li>
                  <a href="#" data-scroll="sign-off-form" className="block p-4 pl-0 border-b-2 border-transparent sm:inline-block scroll-to">Sign Off Form</a>
                </li>
                <li>
                  <a href="#" data-scroll="what-happens-next" className="block p-4 pl-0 border-b-2 border-transparent sm:inline-block scroll-to">What Happens Next?</a>
                </li>
              </ul>
            </Container>
          </section>

          <section className="mb-4 border-b border-gray-100">
            <Container>
              <div className="p-6 md:p-20 md:w-1/3 md:mx-auto content">
                <p>By agreeing to the terms of this document and signing as below, I am happy with the design of my new website and will not look to make any further changes during the development stage, or before it goes live.</p>

                <p>Any structural, functionality or development changes after signing this document may be subject to a charge of £100 per hour. Minor copy or imagery changes are not affected by this.</p>

                <p>We want to produce the best website possible for you that meets your end requirements. In order to do this effectively, Adtrak will design all unique pages and create copy in order for you to make any changes that you feel are necessary.</p>

                <p>Changes before the development stage are easier to implement, and as such, all parties involved need to be happy with the design before development begins.</p>
              </div>
            </Container>
          </section>


          <section>
            <div className="p-6 mx-auto md:p-20 lg:w-1/3">

              <h2 className="mb-4">What can I change?</h2>
              
              <p>We understand you may still want to change elements of your site going forwards. The table below details what you can and can’t change after the sign off process.</p>
            
              <table className="w-full my-8">
                <thead>
                  <tr>
                    <td>Item</td>
                    <td>Can it change?</td>
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

              <p className="mx-auto opacity-50 lg:w-1/3">If you have any questions about specific things you may wish to change that aren’t listed in the table then please contact your Adtrak account manager.</p>

            </div>
          </section>


          <section className="p-6 bg-gray-100 md:p-20">
            <Container>
              <div className="mx-auto lg:w-1/3">
                <h2 className="mb-4">Sign Off Form</h2>

                <p>Ready to sign off? Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ultricies fringilla.</p>

                <form id="form" action="https://formspree.io/f/YOURAPI" method="POST" className="flex flex-wrap my-6 -m-1 overflow-x-hidden">

                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Name *</span>
                    <input required type="text" className="w-full" name="name" placeholder="Name" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Company Name *</span>
                    <input required type="text" className="w-full" name="company_name" placeholder="Company name" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Position In Company *</span>
                    <input required type="text" className="w-full" name="position_in_company" placeholder="Position in company" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Email Address *</span>
                    <input required type="email" className="w-full" name="email" placeholder="Email address" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Website Name *</span>
                    <input required type="text" className="w-full" name="website_name" placeholder="Website Name" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Web Address *</span>
                    <input required type="url" className="w-full" name="web_address" placeholder="Web Address" />
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span className="sr-only">Your Adtrak account manager *</span>
                    <select name="account_manager">
                      <option value="Aaron Robb" defaultValue>Aaron Robb</option>
                      <option value="Ben Shaw">Ben Shaw</option>
                      <option value="Chris Robinson">Chris Robinson</option>
                      <option value="Luke COrner">Luke Corner</option>
                      <option value="Paul O'Donoghue">Paul O'Donoghue</option>
                      <option value="Xavier Hodgetts">Xavier Hodgetts</option>
                      <option value="Unsure">Unsure / Not Listed Here</option>
                    </select>
                  </label>
                  <label className="w-full p-1 md:w-1/2">
                    <span>I am happy with the design of my new website, please proceed to the development / code phase.</span>
                    <input required type="checkbox" className="w-full" name="confirmation" />
                  </label>
                  
                  <input type="text" name="_gotcha" className="hidden" />
                  <div className="w-full p-1">
                    <input type="submit" className="transition duration-300 bg-gray-200 border-black cursor-pointer hover:text-white focus:text-white focus:text-black hover:bg-black" value="Send Enquiry" />
                  </div>

                </form>
                
              </div>


            
            </Container>
          </section>

          <section className="bg-secondary">

            <div className="p-6 text-white md:p-20">
              
              <div className="mx-auto lg:w-1/3">

                <h2 className="mb-4">What happens next?</h2>
                
                <p>Ready to sign off? Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ultricies fringilla.</p>
                
              </div>

              <div className="flex flex-wrap ">

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

                <div className="w-full p-3 px-0 sm:w-1/2 lg:w-1/3">
                  <div className="p-3 bg-white bg-opacity-10">
                    <p>Send website imagery to your designer</p>
                  </div>
                </div>

              </div>

            </div>            

            <Container>
              <div className="p-6 lg:p-20">
                <div className="p-6 text-white md:p-20 bg-secondary-dark">
                  //weve partnered with roundworks
                </div>
              </div>
              
            </Container>
            
          </section>








        </motion.div>

        <Container>

          

        </Container>

        <Footer />

    </Layout>

  )
}

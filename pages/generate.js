import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SeoHead from '../components/seoHead'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import { motion } from 'framer-motion'

export default function Home() {

  // Router to get Figma URL
  const router = useRouter();

  const [copySuccess, setCopySuccess] = useState('');

  const generateLink = (e) => {
    // Grab the values from our inputs
    let desktopFigmaUrl = document.getElementById('desktopFigmaUrl').value;
    let mobileFigmaUrl = document.getElementById('mobileFigmaUrl').value;

    if(mobileFigmaUrl == "") {
      document.querySelector('.mobile-figma-link').classList.add('hidden');
    }
    else {
      document.querySelector('.mobile-figma-link').classList.remove('hidden');
      document.querySelector('.mobile-figma-link').href = mobileFigmaUrl;
    }
    
    // Add the values to our email links
    document.querySelector('.desktop-figma-link').href = desktopFigmaUrl;

    // Generate and set the signoff URL
    let signOffUrl = "https://adtrak-signoff.vercel.app/?figma="+desktopFigmaUrl;
    document.getElementById('sign-off-url').value = signOffUrl;

    setCopySuccess('Copied! Paste this into an email to send to the client.');

    document.querySelector('.signoff-link').href = signOffUrl;
    var range = document.createRange();
    range.selectNode(document.querySelector('.complete-email'));
    window.getSelection().removeAllRanges(); // Clear selection
    window.getSelection().addRange(range); // Select the text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Clear selection
  }


  return (

    <Layout>

        <SeoHead 
          title="Generate Sign Off Link | Adtrak Media Limited"
          description="Sign off your design and we'll proceed to build your brand new website"
        />       

        <motion.div 
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <Header 
            heading="Link Generator"
            subheading="Enter your Figma prototype URL below to generate your unique Sign Off link."
          />

          <section>
            <Container>
              <div className="px-6 md:px-20">
                <div className="w-full 3xl:flex md:flex-wrap md:justify-center p-6 mx-auto font-light text-white bg-secondary-dark lg:p-10 xl:p-16 mt-[-30px]">
                  
                  <label className="flex-wrap items-center justify-center block p-4 3xl:flex 3xl:justify-end 3xl:w-4/5 text-secondary-dark">
                    <div className="flex flex-col items-center 3xl:items-start 3xl:w-full">

                      <span className="block w-full mb-4 text-center 3xl:text-left 3xl:mr-4 text-secondary-light">Your Mobile Figma prototype URL:</span>
                      <input id="mobileFigmaUrl" type="url" className="w-13/16" placeholder="https://www.figma.com/proto/..." />
                      
                      <span className="block w-full mt-8 mb-4 text-center 3xl:text-left 3xl:mr-4 text-secondary-light">Your Desktop Figma prototype URL:</span>
                      <input id="desktopFigmaUrl" type="url" className="w-13/16" placeholder="https://www.figma.com/proto/..." />
                      
                      <input id="sign-off-url" type="text" className="w-full mt-4 font-light text-center text-white border-0 opacity-25 3xl:text-left selected:bg-primary-dark text-2xs focus:bg-none focus:outline-none bg-secondary-dark" />
                    </div>
                  </label>

                  <label className="relative flex flex-wrap items-center justify-center p-4 3xl:justify-start 3xl:w-1/5">
                    
                    <button 
                      onClick={generateLink}
                      className="inline-block p-3 text-center text-white transition bg-primary hover:opacity-90 hover:no-underline"
                    >
                      Generate &amp; copy email
                    </button>
                    <p className="absolute w-full mt-2 text-center text-white transform -translate-x-1/2 -bottom-4 3xl:bottom-2 left-1/2 text-2xs">{copySuccess}</p>
                  </label>                  
                  
                </div>
              </div>
            </Container>
          </section>

          <section id="moreInfo" className="mb-4 border-b border-gray-100 opacity-75">
            <Container>
              <div className="p-6 md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-1/2 lg:px-0 md:mx-auto content">

                <div className="complete-email">
                
                  <p>Hi [Client Name],</p>

                  <p>Please find the links to the concepts below so you can look through them at your own leisure.</p>

                  <p><a className="underline mobile-figma-link text-primary" href="">Mobile Demo</a></p>

                  <p><a className="underline desktop-figma-link text-primary" href="">Desktop Demo</a></p>

                  <p>In order to progress your project to the next stage, we require you to sign off the design. By signing off your design, you're telling us that you're happy with the layout, colour scheme and overall design of the website.</p>

                  <p>Once you have signed the website off, we'll begin building your website. Please complete the <a className="underline signoff-link text-primary" href="">signoff form here</a> to notify us that you'd like to move to the development stage.</p>

                  <p>Thanks</p>

                  <p>[Your Name]</p>

                </div>
                
              </div>
            </Container>
          </section>
          
        </motion.div>

    </Layout>

  )
}

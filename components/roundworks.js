import Container from '../components/container'
import Button from '../components/button'
import Image from 'next/image'

export default function Roundworks ({ classModifiers }) {
    return (
        <Container>
            <div className="p-6 lg:p-20">
            
            <div className={`items-center justify-between p-6 text-white lg:p-20 bg-secondary-dark md:flex ${classModifiers}`}>

                <Image src="/images/roundworks.png" alt="Partnered with Roundworks IT" width={199} height={44} />

                <div className="my-4 md:px-8 md:my-0 xl:text-lg">

                <p className="text-secondary-light">Need help with your IT equipment or Emails?</p>
                
                <p>We've partnered with Roundworks IT to help you.</p>
                
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
    )
}
import Container from './container'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-secondary pb-[40px] xl:pb-[60px]">
            <Container>
                <div className="flex items-center justify-between p-6 md:py-8 md:px-20">
                    
                    <Image
                    src="/images/adtrak-logo.svg"
                    alt="Adtrak Logo"
                    width={160}
                    height={35}
                    />

                    <a href="tel:" className="p-4 font-bold bg-secondary-light text-primary-dark">0115 959 8900</a>

                </div>

                <div className="w-full p-6 mt-8 text-white md:px-20 md:flex md:items-center md:flex-wrap">

                    <div className="w-full md:w-1/2 md:pr-4">

                        <h1 className="mb-4">Website Sign Off</h1>
                    
                        <p>Complete the form below to move to the next stage of your journey with Adtrak.</p>

                    </div>
                    
                    <div className="w-full mt-8 md:w-1/2">
                        <Image
                        src="/images/process.svg"
                        alt="Sign off process"
                        width={999}
                        height={189}
                        />
                    </div>

                </div>
            </Container>
        </header>
    )
}
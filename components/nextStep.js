import Image from 'next/image'

export default function nextStep({ step }) {
    return (
        <div className="w-full p-3 px-0 sm:p-3 sm:w-1/2 lg:w-1/3">
            <div className="flex p-3 bg-black md:p-5 bg-opacity-10">
                <Image src="/images/target.svg" alt="Bullet Point" width={30} height={30} />
                <p className="px-4">{step}</p>
            </div>
        </div>
    )
}
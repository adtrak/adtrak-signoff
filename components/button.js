export default function button({ newTab, destination, buttonLabel }) {
    return (
       
        <a 
            target="_blank"
            className="inline-block p-3 mx-auto mt-2 text-center text-white transition bg-primary hover:opacity-90 hover:no-underline"
            href={destination}
        >
            {buttonLabel}
        </a>
        
    )
}
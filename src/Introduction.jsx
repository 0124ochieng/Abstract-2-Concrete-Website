import banner from './assets/webBanner.png';


function Introduction() {

    return(
        <div>
            <header>
                <h1>
                    Abstract To Concrete
                </h1>
                <h3>Making ideas and reality merge</h3>
            </header> 
            <hr/>   
                <img className='quote-image' src={banner} alt='quote'/>
            <hr/>
            
        </div>
    )
}
export default Introduction;
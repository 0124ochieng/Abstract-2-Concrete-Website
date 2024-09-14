import banner from './assets/twitterPost.png';

function Introduction() {

    return(
        <div>
            <header>
                <h1>
                    Abstract To Concrete
                </h1>
                <h3>Merging Ideas and Reality</h3>
            </header> 
            <hr/>   
                <img className='quote-image' src={banner} alt='quote'/>
            <hr/>
            
        </div>
    )
}
export default Introduction;
function Newsletter() {

    const newsletter =  <form>
                            <p>Would you like to receive our weekly updates? hit the subsribe button below.</p>
                            <input placeholder="Email" className="input"/>
                            <button className="subscribe">Subscribe</button>
                        </form>

    const handleClick = (e) => e.target.innerHTML = newsletter;

    return(
        <div>

            <button onClick={(e) => handleClick(e)} className="newsletter">Newsletter</button>

            <div className="newsletterDiv">
               
            </div>
        </div>
    )
}
export default Newsletter;
function Specials() {
    return(
        <section id="specials">
            <div id="specials-heading">
                <h2>Specials</h2>
                <button id="specials-button">
                    Online Menu
                </button>
            </div>
            <div id="specials-inner">  
                <div className="specials-item">
                    <img src="/src/components/assets/greek salad.jpg" alt="" />
                    <div>
                        <div className="title-price">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <b>Order a delivery <i className="fas fa-motorcycle"></i></b>
                    </div>
                </div>
                <div className="specials-item">
                    <img src="/src/components/assets/bruchetta.svg" alt="" />
                    <div>
                        <div className="title-price">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <b>Order a delivery <i className="fas fa-motorcycle"></i></b>
                    </div>
                </div>
                <div className="specials-item">
                    <img src="/src/components/assets/lemon dessert.jpg" alt="" />
                    <div>
                        <div className="title-price">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <b>Order a delivery <i className="fas fa-motorcycle"></i></b>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specials;
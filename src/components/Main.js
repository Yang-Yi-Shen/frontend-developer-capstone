import GreekSalad from '../assets/greek salad.jpg'

function Main() {
    return (
      <main>
        <section id="specials">
          <h2>Specials</h2>
          <button>Online Menu</button>
          <div className="specials-div">
            <div className="specials-card">
              <img src={GreekSalad} alt=""></img>
              <h3>Greek Salad</h3>
              <p>THe famous Greek salad of crispy lettuce, peppers, olive and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crountons</p>
              <b><p>Order a delivery</p></b>
            </div>
            <div className="specials-card">
              <img src={GreekSalad} alt=""></img>
              <h3>Greek Salad</h3>
              <p>THe famous Greek salad of crispy lettuce, peppers, olive and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crountons</p>
              <b><p>Order a delivery</p></b>
            </div>
          </div>
        </section>
        <section id="testimonials"></section>
        <section id="about"></section>
      </main>
    );
  }
  
  export default Main;
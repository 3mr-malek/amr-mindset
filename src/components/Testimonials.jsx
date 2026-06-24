import image from "../assets/image.png";
function Testimonials() {
  return (
    <section className="section" id="results">
      <h2>Success Stories</h2>

      <div className="cards">

        <div className="card">
         <img
         src={image}
         alt="neek"
         className="TEST"
       />

        </div>

        <div className="card">
          <p>
            "Best investment I ever made."
          </p>
        </div>

        <div className="card">
          <p>
            "I finally escaped addiction."
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
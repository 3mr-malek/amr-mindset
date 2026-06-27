import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpeg";
import review5 from "../assets/review5.jpeg";
import review6 from "../assets/review6.jpeg";

function Reviews() {
  const reviews = [
    review1,
    review2,
    review3,
    review5,
    review4,
    review6,
  ];

  return (
    <section className="reviews-section" id="results">
      <span className="section-label">
        النتائج
      </span>


      <p className="reviews-text">
        دي مجرد جزء صغير من الرسائل اللي بتوصلني من الناس
        اللي بدأت رحلة التعافي وغيرت حياتها.
      </p>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review}
              alt={`review-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
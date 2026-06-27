import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="badge">اتعافي من الإدمان و ابني افحل نسخة منك</span>

        <h1>
          اكسر إدمانك
          <br />
       
          <span className="gold"> و متضيعش عمرك</span>
        </h1>

        <p className="hero-sub">مهمتي إنك تتعافى من إدمان الاباحية و تبني ثقتك في نفسك من  جديد و تختصر على نفسك وقت كبير مع الادمان
          وتعيش حياة أقوى وأنضف مما تتخيل
        </p>

        <div className="hero-buttons">
         
          <Link
            to="/course/recovery"
            className="primary-btn start-btn"
          >
 ابدأ رحلة التعافي دلوقتي     
      </Link>
          
        </div>
         
       
      </div>
   
    </section>
       
  );
}

export default Hero;
// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-overlay"></div>

//       <div className="hero-content">
//         <span className="badge">
//           🧠 Helping Men Become Stronger 🧠
//         </span>

//         <h1>
//         Break your <span className="Porn"><span className="Po">Po</span><span className="rn">rn</span></span>Addiction.

//           <br />
//                     <br />

//          Be The Man You Respect.
//         </h1>

//         <p className="info">
//         <span className="My-Mission">My Mission: </span> 
//          Helping men quit porn addiction,recover their mental health
//          build confidence,be disciplined and make a stronger life.
//         </p>

//         <div className="hero-buttons">
//         <a
//   href="https://docs.google.com/forms/d/e/1FAIpQLSfGLFHIdv1eb2HBTDVzO3T9bYK4R9qqkRh9PkefbAIsPnRq2Q/viewform?usp=header"
//   target="_blank"
//   rel="noreferrer"
// >
//   <button className="primary-btn">
//     Join The Course
//   </button>
// </a>
//           <button className="secondary-btn">
//             Watch Content
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


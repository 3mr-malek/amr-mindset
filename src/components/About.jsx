import Test from "../assets/Test.jpeg";
import Test2 from "../assets/test2.jpeg";

function About() {
  return (
    <section className="section" id="about">

      <span className="section-label"></span>
      <h2> Amr Mindset</h2>
      <p className="about-text">
        مش مجرد نصايح و كلام بقوله و خلاص , دا اسلوب حياة و منهج تفكير جديد هزرعه فيك و اللي هيخليك تتغير عن كل اللي حواليك و تبقا فعلا افحل و اقوى نسخة من نفسك
      </p>
      {/* <img src={Test} alt="عمرو" className="profile-image" /> */}
      <img src={Test2} alt="عمرو" className="profile-image" />

      <div className="stats">
        <div>
          <h3>46+</h3>
          <p>طالب </p>
        </div>
        <div>
          <h3>6hours+</h3>
          <p>مدة الكورس </p>
        </div>
      </div>
  
    </section>
  );
}

export default About;
// import Test from "../assets/Test.jpeg";
// function About() {
//   return (
//     <section className="section" id="about">
//   <img
//   src={Test}
//   alt="Amr"
//   className="profile-image"
// />
//       <h2>About Me</h2>

//       <p className="about-text">
//         My mission is helping young men quit porn addiction,
//         build discipline, confidence and become stronger.
//       </p>

//       <div className="stats">
//         <div>
//           <h3>46+</h3>
//           <p>Students</p>
//         </div>

//         <div>
//           <h3>18K+</h3>
//           <p>Revenue</p>
//         </div>

//         <div>
//           <h3>100+</h3>
//           <p>Videos</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
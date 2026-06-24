import { Link } from "react-router-dom";

function Courses() {
  return (
    <section className="section" id="courses">
      <span className="section-label">الكورسات</span>
      <h2>ابدأ من هنا</h2>

      <div className="course-home-cards">

        <div className="home-card home-featured">
          <h3>كورس التعافي</h3>

          <p>
            منظومة متكاملة للتعافي من إدمان البورن
            وإعادة بناء حياتك من الصفر.
          </p>

          <Link
            to="/course/recovery"
            className="primary-btn"
          >
            اعرف التفاصيل
          </Link>
        </div>

        <div className="home-card">
          <h3>ابنِ الرجل</h3>

          <p>
            ثقة، انضباط، ونمو حقيقي. قريباً.
          </p>

          <button className="coming-btn">
            قريباً
          </button>
        </div>

      </div>
    </section>
  );
}

export default Courses;
// function Courses() {
//   return (
//     <section className="section" id="courses">
//       <h2>Courses</h2>

//       <div className="cards">

//         <div className="card">
//           <h3>Recovery Course</h3>

//           <p>
//             Complete system to quit porn addiction and
//             rebuild your life.
//           </p>

//           <button>Enroll Now</button>
//         </div>

//         <div className="card">
//           <h3>Build The Man</h3>

//           <p>
//             Confidence, discipline and masculine growth.
//           </p>

//           <button>Coming Soon</button>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Courses;
function RecoveryCourse() {
  return (
    <div className="course-page">

      <section className="course-hero">
        <h1>كورس  من إدمان الإباحية</h1>

        <p>
            مش مجرد فيديوهات بتشوفها و انت بتاكل ... دي منظومة كاملة و فكر جديد تماما مسمعتوش في حتة قبل كدا 
        </p>
      </section>

      <section className="course-video">

        <h2>الفيديو التعريفي</h2>

        <div className="video-container">
            <p className="video-note">
                شوف الفيديو دا عشان تفهم كل حاجه موجودة في الكورس و يجاوب على كل أسالتك
</p>
          <iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/fkdnoL44Nhc"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
        </div>

      </section>

      <section className="packages">
  <h1>اختر الباقة المناسبة </h1>
  <h3>معاك 48 ساعة تقدر ترجع فيهم فلوسك </h3>

  <div className="cards">

    {/* الباقة الأولى */}
    <div className="card">
      <h3> الباقة الاولى</h3>

      <p>✔ الكورس كامل</p>
      <p>✔ وصول مدى الحياة</p>

      <div className="price-box">
        <span className="old-price">850 جنيه</span>
        <h2>398 جنيه</h2>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfGLFHIdv1eb2HBTDVzO3T9bYK4R9qqkRh9PkefbAIsPnRq2Q/viewform?usp=header"
        target="_blank"
        rel="noreferrer"
        className="primary-btn"
      >
        اشترك الآن -
      </a>
    </div>

    {/* الباقة الثانية */}
    <div className="card featured-card">
      <div className="recommended">
        الأكثر اختياراً 🔥
      </div>

      <h3>الباقة المميزة</h3>

      <p>✔ الكورس كامل</p>
      <p>✔ وصول مدى الحياة</p>
      <p>✔ جميع تحديثات الكورس بتنزلك مجانا</p>
      <p>✔ رقم الواتساب الشخصي بتاعي</p>
      <p>✔ جروب واتساب</p>
      <p>✔ مكالمة 1 شخصية  </p>

      <div className="price-box">
        <span className="old-price">997 جنيه</span>
        <h2>498 جنيه</h2>
      </div>
      <p className="popular-text">
  أفضل قيمة مقابل السعر
</p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfGLFHIdv1eb2HBTDVzO3T9bYK4R9qqkRh9PkefbAIsPnRq2Q/viewform?usp=header"
        target="_blank"
        rel="noreferrer"
        className="primary-btn"
      >
        اشترك الآن - 
      </a>
    </div>

    {/* المنتورشيب */}
    <div className="card mentorship-card">
      <h3>Mentorship</h3>

     <ul className="package-list">
  <li>✔ كل مميزات الباقة المميزة</li>
  <li>✔ متابعة شخصية مباشرة اسبوعية</li>
  <li>✔ خطة تعافي مخصصة</li>
  <li>✔   مخصص ليك حسب نظامك هقولك تمشي فيه ازاي PDF</li>
  <li>✔   خطة 3 الي 6 شهور هقولك تعمل فيهم ايه </li>
  <li>✔ مكالمة اسبوعية للمتابعة  </li>
  <li>✔ حرفيا مش هسيبك غير لما تبطل</li>
  <li>✔ بنسبة اكبر من 95% ببقا ضامن ليك انك تبطل </li>
  <li>✔ أولوية في الرد</li>
  <li>✔ توجيه مفصل لبناء العادات والانضباط</li>
</ul>
      <div className="price-box">
        <span className="old-price">2500 جنيه</span>
        <h2>1498 جنيه</h2>
      </div>
        <p className="popular-text">
 مش هاخد اي حد سجل هنا عشان تخش مقابلة معايا و نحدد مع بعض 
</p>

      <button className="coming-btn">
        قريباً
      </button>
    </div>

  </div>
</section>
    </div>
  );
}

export default RecoveryCourse;

const MorningPrayer = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Morning Prayer Assembly</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our day begins with a morning assembly that instills values of discipline, unity, and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg font-semibold mb-8">
                सयौं थुँगा फूलका हामी, एउटै माला नेपाली ।<br/>
                सार्वभौम भइ फैलिएका, मेची-माहाकाली ॥<br/><br/>

                प्रकृतिका कोटि-कोटि सम्पदाको आंचल ।<br/>
                वीरहरूका रगतले, स्वतन्त्र र अटल ॥<br/><br/>

                ज्ञानभूमि, शान्तिभूमि, तराई, पहाड, हिमाल ।<br/>
                अखण्ड यो प्यारो हाम्रो मातृभूमि नेपाल ॥<br/><br/>

                बहुल जाति भाषा धर्म संस्कृति छन् विशाल  ।<br/>
                अग्रगामी राष्ट्र हाम्रो जय जय नेपाल॥<br/><br/>        </p>
              {/* <p className="mt-4">
                The assembly includes prayers, the national anthem, important announcements, and sometimes special performances by students. It's an essential part of our holistic education approach.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Promotes punctuality and discipline</li>
                <li>Cultivates a sense of belonging and unity</li>
                <li>Provides a platform for students to develop leadership skills</li>
                <li>Celebrates achievements and shares important information</li>
              </ul> */}
            </div>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-lg shadow-lg">
            <img
              src="prayer.jpg"
              alt="Students in morning prayer assembly"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningPrayer;

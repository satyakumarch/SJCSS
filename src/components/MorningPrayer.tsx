import { Music2 } from "lucide-react";

const MorningPrayer = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Daily Tradition
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Morning Prayer Assembly
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Our day begins with a morning assembly that instills values of discipline,
            unity, and spiritual growth in every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Anthem Text */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Music2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">राष्ट्रिय गान</h3>
                  <p className="text-white/50 text-xs">National Anthem of Nepal</p>
                </div>
              </div>

              <div className="text-white/80 leading-loose text-base font-medium space-y-4">
                <p>
                  सयौं थुँगा फूलका हामी, एउटै माला नेपाली ।<br />
                  सार्वभौम भइ फैलिएका, मेची-माहाकाली ॥
                </p>
                <p>
                  प्रकृतिका कोटि-कोटि सम्पदाको आंचल ।<br />
                  वीरहरूका रगतले, स्वतन्त्र र अटल ॥
                </p>
                <p>
                  ज्ञानभूमि, शान्तिभूमि, तराई, पहाड, हिमाल ।<br />
                  अखण्ड यो प्यारो हाम्रो मातृभूमि नेपाल ॥
                </p>
                <p>
                  बहुल जाति भाषा धर्म संस्कृति छन् विशाल ।<br />
                  अग्रगामी राष्ट्र हाम्रो जय जय नेपाल ॥
                </p>
              </div>
            </div>

            {/* Assembly highlights */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Discipline", desc: "Punctuality & order" },
                { label: "Unity", desc: "Sense of belonging" },
                { label: "Leadership", desc: "Student development" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-accent font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prayer Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="prayer.jpg"
                alt="Students in morning prayer assembly"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm">Daily Morning Assembly</p>
                  <p className="text-white/70 text-xs mt-1">
                    Building character and community every morning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningPrayer;

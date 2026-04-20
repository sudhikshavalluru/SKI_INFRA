import { motion } from 'motion/react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import lift2 from '../assets/images/LIFT 2.jpg';
import build2 from '../assets/images/BUILD 2.jpg';
import road2 from '../assets/images/ROAD2.avif';
import layout2 from '../assets/images/layout.webp';
import ceo from '../assets/images/ceo.jpeg';

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-6">About SKI</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl mx-auto">We are more than just a lift service company. We are your partners in safety, efficiency, and innovation.</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Sri Karthikeya Infra (SKI) began with a simple mission: to provide the highest quality engineering and infrastructure services with a focus on customer satisfaction and safety.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Over the years, we have expanded our expertise from lift systems to comprehensive civil construction, layout development, and road infrastructure. Today, we manage a diverse portfolio of projects, serving everything from residential communities to large-scale industrial complexes.</p>
              <div className="space-y-4">
                {['Certified and highly trained technicians', 'State-of-the-art diagnostic tools', 'Commitment to international safety standards', 'Customer-centric approach to every project'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={lift2} alt="Lift" className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover" />
                <img src={build2} alt="Construction" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={road2} alt="Road" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                <img src={layout2} alt="Layout" className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-72 h-72 shrink-0 rounded-3xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
              <img src={ceo} alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Leadership</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founder & CEO</h2>
              <p className="text-lg text-gray-600 leading-relaxed">With a vision to transform infrastructure and vertical mobility in India, our founder established Sri Karthikeya Infra with a commitment to quality, safety, and innovation. Under his leadership, SKI has grown into a trusted name across Andhra Pradesh and Telangana.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-12 rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8"><Target className="text-blue-600" size={32} /></div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">To provide safe, reliable, and innovative lift and elevator solutions that enhance the quality of life and business operations for our clients through excellence in service and engineering.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-12 rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8"><Eye className="text-blue-600" size={32} /></div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">To be the leading provider of lift services globally, recognized for our commitment to safety, technological innovation, and sustainable practices in the lift and elevator industry.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

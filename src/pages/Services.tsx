import { motion } from 'motion/react';
import { Wrench, Shield, Clock, Zap, Settings, Construction, Building2, Map, HardHat } from 'lucide-react';
import serhero from '../assets/images/serhero.avif';
import serlift from '../assets/images/serlift.png';
import buser from '../assets/images/buser.jpg';
import layoutser from '../assets/images/serlayout.jpg';
import serroad from '../assets/images/serroad.jpg';
import mian from '../assets/images/MIAN.avif';
import sersur from '../assets/images/sersur.avif';
import slide1 from '../assets/images/SLIDE 1.avif';

const services = [
  { title: 'Precision Lift Installation', icon: <Construction size={32} />, desc: 'Expert installation of high-performance lift systems for residential, commercial, and industrial buildings.', features: ['Custom Design Solutions', 'Energy Efficient Systems', 'Latest Safety Technology', 'Seamless Integration'], image: serlift },
  { title: 'Elite Building Construction', icon: <Building2 size={32} />, desc: 'From residential villas to commercial complexes, we provide end-to-end construction services with a focus on quality, durability, and modern aesthetics.', features: ['Residential & Commercial', 'Quality Materials', 'Project Management', 'Timely Completion'], image: buser },
  { title: 'Strategic Layout Development', icon: <Map size={32} />, desc: 'Professional layout planning and development services. We transform raw land into well-structured, ready-to-build communities.', features: ['Urban Planning', 'Regulatory Compliance', 'Infrastructure Setup', 'Site Grading'], image: layoutser },
  { title: 'Durable Road Infrastructure', icon: <HardHat size={32} />, desc: 'Durable and high-quality cement road construction for residential colonies, industrial parks, and public infrastructure projects.', features: ['High Durability', 'Proper Drainage', 'Heavy-Duty Finish', 'Expert Engineering'], image: serroad },
  { title: 'Proactive Maintenance Care', icon: <Settings size={32} />, desc: 'Comprehensive maintenance programs designed to ensure peak performance, minimize downtime, and extend the lifespan of your equipment.', features: ['Regular Inspections', 'Preventative Maintenance', 'Performance Optimization', 'Compliance Certification'], image: mian },
  { title: '24/7 Technical Support', icon: <Wrench size={32} />, desc: 'Our rapid response team is available 24/7 to handle any lift emergencies or breakdowns, ensuring minimal disruption to your building.', features: ['24/7 Availability', 'Fast Response Times', 'Certified Technicians', 'Genuine Spare Parts'], image: sersur },
  { title: 'Advanced System Modernization', icon: <Zap size={32} />, desc: 'Upgrade your aging lift systems with modern technology to improve safety, speed, comfort, and energy efficiency without full replacement.', features: ['Control System Upgrades', 'Interior Refurbishment', 'Safety Enhancements', 'Energy Savings'], image: slide1 },
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={serhero} alt="Background" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-6">Comprehensive Engineering Solutions</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-blue-100 max-w-3xl mx-auto">From lift and elevator systems to large-scale infrastructure, we provide a full spectrum of construction and engineering services.</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <Shield className="text-blue-600 shrink-0" size={18} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SKI?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We go above and beyond to ensure your lift systems are always in peak condition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Technicians', desc: 'Our team is certified and undergoes continuous training on the latest industry standards.', icon: <Shield className="text-blue-600" size={32} /> },
              { title: 'Fast Response', desc: 'We understand the urgency of lift repairs and guarantee rapid response times.', icon: <Clock className="text-blue-600" size={32} /> },
              { title: 'Quality Parts', desc: 'We only use genuine, high-quality spare parts to ensure longevity and safety.', icon: <Settings className="text-blue-600" size={32} /> },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

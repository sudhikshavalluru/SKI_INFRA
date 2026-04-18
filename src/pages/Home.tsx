import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import slide1 from '../assets/images/SLIDE 3.webp';
import slide2 from '../assets/images/SLIDE 1.avif';
import slide3 from '../assets/images/SLIDE 4.webp';
import slide4 from '../assets/images/SLIDE 2.avif';
import eliteBuild from '../assets/images/elite build.webp';
import layout from '../assets/images/layout.webp';
import road from '../assets/images/ROAD.webp';
import mian from '../assets/images/MIAN.avif';
import { ArrowRight, Shield, Clock, Wrench, Building2, Map, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: slide1,
    title: 'Excellence in Motion: Reliable Lift & Elevator Services',
    subtitle: 'Crafting safe, smooth, and sustainable lift and elevator solutions.',
  },
  {
    image: slide2,
    title: 'Modernization Solutions',
    subtitle: 'Upgrade your existing systems with the latest technology and safety features.',
  },
  {
    image: slide3,
    title: '24/7 Technical Support',
    subtitle: 'Our expert technicians are always ready to keep your business moving.',
  },
  {
    image: slide4,
    title: 'Infrastructure & Construction',
    subtitle: 'From layout development to cement roads, we build the foundations of tomorrow.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Property Manager',
    content: 'SKI has been our go-to partner for lift maintenance. Their response time is incredible and the technicians are highly professional.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Hotel Director',
    content: 'The modernization project they completed for our hotel was seamless. Our guests have noticed the smoother and faster rides.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Robert Davis',
    role: 'Residential Board Member',
    content: 'Safety is our priority, and SKI delivers. Their thorough inspections give us peace of mind every single day.',
    avatar: 'https://i.pravatar.cc/150?u=robert',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slides[currentSlide].image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={currentSlide + 'content'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center group"
              >
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                Welcome to SKI
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Setting the Standard in Infrastructure & Vertical Mobility
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sri Karthikeya Infra (SKI) is a trusted name in both lift systems and civil infrastructure. We combine cutting-edge technology with unmatched expertise to provide solutions that are safe, efficient, and built to last.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Safety First</h4>
                    <p className="text-sm text-gray-500">Rigorous safety standards and inspections.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Support</h4>
                    <p className="text-sm text-gray-500">Always available when you need us most.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=800"
                  alt="Elevator Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Engineering & Infrastructure Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific needs, from initial installation to long-term maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Precision Lift Installation',
                desc: 'State-of-the-art lift systems for new residential and commercial developments.',
                icon: <ArrowRight className="text-blue-600" />,
                image: slide1,
              },
              {
                title: 'Elite Building Construction',
                desc: 'End-to-end construction services for residential villas and commercial complexes.',
                icon: <Building2 className="text-blue-600" />,
                image: eliteBuild,
              },
              {
                title: 'Strategic Layout Development',
                desc: 'Professional planning and development of residential and industrial layouts.',
                icon: <Map className="text-blue-600" />,
                image: layout,
              },
              {
                title: 'Durable Road Infrastructure',
                desc: 'High-quality cement road construction for infrastructure and public projects.',
                icon: <HardHat className="text-blue-600" />,
                image: road,
              },
              {
                title: 'Proactive Maintenance Care',
                desc: 'Proactive maintenance plans designed to prevent breakdowns and extend equipment life.',
                icon: <Clock className="text-blue-600" />,
                image: mian,
              },
              {
                title: '24/7 Technical Support',
                desc: 'Rapid response repair services by certified technicians to minimize downtime.',
                icon: <Wrench className="text-blue-600" />,
                image: slide3,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to="/services"
                  className="block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.desc}</p>
                    <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Upgrade Your Building with SKI?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact us today for a consultation. Our team is ready to provide the best lift and elevator solutions for you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

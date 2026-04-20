import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import slide1 from '../assets/images/SLIDE 1.avif';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={slide1} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl mx-auto">Have a question or need a service? Chat with us directly on WhatsApp.</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">We are available 24/7 to assist you. Choose your preferred way to reach us.</p>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"><Phone size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 94906 68611</p>
                    <p className="text-gray-600">+91 93905 29449 (Emergency)</p>
                    <p className="text-gray-600">+91 70365 14530 (Emergency)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"><Mail size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">srikarthikeyainfra55@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"><MapPin size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">16-334, South Street, Venkatagiri, 524132, Tirupati district</p>
                    <p className="text-gray-600 mt-2">Flat No 101, Block A, BNR Apartment, Upperpalli, Hyderabad 500048</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"><Clock size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-semibold text-blue-600">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"><Icon size={20} /></a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 p-10 md:p-16 rounded-3xl shadow-sm text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-[#25D366] text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100"><MessageCircle size={48} fill="currentColor" /></div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Chat with us on WhatsApp</h3>
              <p className="text-lg text-gray-600 mb-10 max-w-md">Get instant support and answers to your questions. Our team is ready to chat with you right now.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#128C7E] transition-all shadow-xl shadow-green-100 flex items-center justify-center group">
                Start Chat <MessageCircle className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <p className="mt-6 text-sm text-gray-500">No automated bots. Real people, real support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30957.269056234!2d79.5615652!3d13.9405036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d656000000001%3A0xbd85d2633005a76!2sVenkatagiri%2C%20Andhra%20Pradesh%20524132!5e0!3m2!1sen!2sin!4v1713420000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="px-2 py-1 bg-white border-2 border-blue-600 rounded flex items-center justify-center shadow-sm">
                <span className="text-blue-600 font-black text-lg tracking-tighter">SKI</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Sri Karthikeya Infra</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">Leading the way in lift and elevator solutions. SKI provides safe, reliable, and innovative lift services for residential and commercial buildings.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Lift Installation</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Maintenance Plans</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Emergency Repairs</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Modernization</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3"><MapPin className="text-blue-500 shrink-0 mt-1" size={18} /><span>16-334, South Street, Venkatagiri, 524132, Tirupati district</span></li>
              <li className="flex items-center space-x-3"><Phone className="text-blue-500 shrink-0" size={18} /><span>+91 94906 68611</span></li>
              <li className="flex items-center space-x-3"><Mail className="text-blue-500 shrink-0" size={18} /><span>srikarthikeyainfra55@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Sri Karthikeya Infra. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

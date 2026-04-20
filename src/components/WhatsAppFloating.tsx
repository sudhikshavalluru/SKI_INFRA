import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}

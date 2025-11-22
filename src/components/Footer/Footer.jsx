import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-venclima.png`}
              alt="VentClima"
              className="h-20 mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Профессиональные решения в области вентиляции и кондиционирования воздуха
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Быстрые ссылки</h4>
            <ul className="space-y-3">
              {[
                { name: 'Услуги', href: '#services' },
                { name: 'Преимущества', href: '#benefits' },
                { name: 'Отзывы', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Контакты', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Наши услуги</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Вентиляционные системы</li>
              <li>Кондиционирование</li>
              <li>Обслуживание и ремонт</li>
              <li>Комплексные решения HVAC</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="tel:+373XXXXXXX" className="text-gray-300 hover:text-accent transition-colors">
                  +373 (XXX) XX-XXX
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@ventclima.md" className="text-gray-300 hover:text-accent transition-colors">
                  info@ventclima.md
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Кишинев, Молдова
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} VentClima. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

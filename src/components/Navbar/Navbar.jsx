import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Услуги', href: '#services' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo-venclima.png"
              alt="VentClima"
              className="h-16 md:h-20"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Связаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-primary' : 'text-white'} size={28} />
            ) : (
              <Menu className={scrolled ? 'text-primary' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

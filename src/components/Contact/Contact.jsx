import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Спасибо! Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      content: '+373 (XXX) XX-XXX',
      link: 'tel:+373XXXXXXX',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@ventclima.md',
      link: 'mailto:info@ventclima.md',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Адрес',
      content: 'Кишинев, Молдова',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Получите бесплатную консультацию
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом и наши специалисты помогут подобрать оптимальное решение
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -25, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="+373 XXX XX XXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Отправка...</span>
                ) : (
                  <>
                    <span>Отправить заявку</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100, rotateY: 25, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                  >
                    <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg text-accent">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-200 hover:text-accent transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Время работы</h4>
                <p className="text-gray-200">Пн-Пт: 09:00 - 18:00</p>
                <p className="text-gray-200">Сб: 10:00 - 15:00</p>
                <p className="text-gray-200">Вс: Выходной</p>
              </div>
            </div>

            <motion.div
              className="bg-accent/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", bounce: 0.4 }}
            >
              <h4 className="text-xl font-bold text-primary mb-4">
                Экстренная поддержка
              </h4>
              <p className="text-gray-700 mb-4">
                Наша служба технической поддержки работает круглосуточно для решения срочных вопросов
              </p>
              <a
                href="tel:+373XXXXXXX"
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+373 (XXX) XX-XXX</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Shield, Users, Wrench, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Опыт более 10 лет',
      description: 'Успешно реализовано более 500 проектов различной сложности',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Соблюдение сроков',
      description: 'Работы выполняются точно в срок согласно договору',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды работ и оборудование',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Профессиональная команда',
      description: 'Сертифицированные специалисты с постоянным повышением квалификации',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Сервисное обслуживание',
      description: 'Быстрое реагирование и техническая поддержка 24/7',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Оптимальная цена',
      description: 'Конкурентные цены без переплат и скрытых платежей',
    },
  ];

  // Круговая анимация появления
  const getCircularPosition = (index, total) => {
    const angle = (index / total) * 360;
    const radius = 200;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, rotate: angle };
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-primary to-primary-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, rotateX: -90 }}
          animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.6 }}
          >
            Почему выбирают <span className="text-accent">VentClima</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Надежность, качество и профессионализм в каждом проекте
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const position = getCircularPosition(index, benefits.length);
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover-lift border border-white/20"
                initial={{
                  opacity: 0,
                  x: position.x,
                  y: position.y,
                  scale: 0,
                  rotate: position.rotate
                }}
                animate={isInView ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.5
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-accent rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: '500+', label: 'Завершенных проектов' },
            { value: '10+', label: 'Лет на рынке' },
            { value: '98%', label: 'Довольных клиентов' },
            { value: '24/7', label: 'Техподдержка' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

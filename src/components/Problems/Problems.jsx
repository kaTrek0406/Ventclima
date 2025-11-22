import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Problems = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      problem: 'Неприятный запах и духота в помещении',
      solution: 'Установка современной системы вентиляции с рекуперацией тепла обеспечит постоянный приток свежего воздуха',
    },
    {
      problem: 'Высокая влажность и образование плесени',
      solution: 'Правильная система вентиляции решит проблему избыточной влажности и предотвратит появление плесени',
    },
    {
      problem: 'Неравномерное распределение температуры',
      solution: 'Профессиональный расчет и монтаж системы кондиционирования обеспечат комфортную температуру во всех зонах',
    },
    {
      problem: 'Высокие энергозатраты на климат-контроль',
      solution: 'Современные энергоэффективные системы сократят расходы на электроэнергию до 40%',
    },
    {
      problem: 'Шум от старого оборудования',
      solution: 'Новое климатическое оборудование работает практически бесшумно, не нарушая комфорт',
    },
    {
      problem: 'Частые поломки и дорогой ремонт',
      solution: 'Регулярное профессиональное обслуживание продлит срок службы оборудования и снизит затраты на ремонт',
    },
  ];

  // Волновая анимация - чередование слева и справа
  const getItemVariants = (index) => {
    const isEven = index % 2 === 0;
    return {
      hidden: {
        opacity: 0,
        x: isEven ? -100 : 100,
        scale: 0.9,
        rotateY: isEven ? -15 : 15,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          delay: index * 0.15,
          bounce: 0.4,
        },
      },
    };
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Мы решаем ваши проблемы
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Профессиональные решения для создания идеального микроклимата
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={getItemVariants(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Problem */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Проблема:</h4>
                    <p className="text-gray-600">{item.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start space-x-4 md:border-l md:border-gray-200 md:pl-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Решение:</h4>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Получить бесплатную консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;

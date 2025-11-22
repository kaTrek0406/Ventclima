import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Snowflake, Settings, Building2 } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Wind className="w-12 h-12" />,
      title: 'Вентиляционные системы',
      description: 'Проектирование и монтаж современных систем вентиляции для обеспечения оптимального воздухообмена в помещениях любого типа и размера.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: 'Системы кондиционирования',
      description: 'Установка и обслуживание кондиционеров от ведущих производителей. Индивидуальный подход к каждому объекту с учетом всех особенностей.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Обслуживание и ремонт',
      description: 'Профессиональное техническое обслуживание, диагностика и ремонт климатического оборудования. Гарантия качества работ.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Комплексные решения HVAC',
      description: 'Полный цикл работ от проектирования до запуска в эксплуатацию систем отопления, вентиляции и кондиционирования для коммерческих объектов.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Разные направления появления для каждой карточки
  const getItemVariants = (index) => {
    const directions = [
      { x: -100, y: 0, rotate: -10 },  // Слева
      { x: 100, y: 0, rotate: 10 },    // Справа
      { x: 0, y: 100, rotate: 5 },     // Снизу
      { x: 0, y: -100, rotate: -5 },   // Сверху
    ];

    const direction = directions[index % directions.length];

    return {
      hidden: {
        opacity: 0,
        x: direction.x,
        y: direction.y,
        rotate: direction.rotate,
        scale: 0.8
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
        },
      },
    };
  };

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Наши услуги
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Комплексные решения по системам вентиляции и кондиционирования для создания комфортного микроклимата
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
              variants={getItemVariants(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${service.color} text-white rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

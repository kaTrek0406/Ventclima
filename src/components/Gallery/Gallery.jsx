import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Placeholder изображения - замените на реальные URL фотографий
  const projects = [
    {
      id: 1,
      title: 'Система вентиляции офисного здания',
      category: 'Вентиляция',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    },
    {
      id: 2,
      title: 'Кондиционирование торгового центра',
      category: 'Кондиционирование',
      image: 'https://images.unsplash.com/photo-1631545806609-7d8cf5270ec5?w=800&q=80',
    },
    {
      id: 3,
      title: 'Промышленная вентиляция',
      category: 'Промышленные системы',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    },
    {
      id: 4,
      title: 'Монтаж сплит-систем',
      category: 'Кондиционирование',
      image: 'https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=800&q=80',
    },
    {
      id: 5,
      title: 'Системы воздуховодов',
      category: 'Вентиляция',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
    },
    {
      id: 6,
      title: 'Чистые помещения',
      category: 'Специальные проекты',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    },
  ];

  // Анимация появления карточек с разных сторон
  const getCardAnimation = (index) => {
    const animations = [
      { x: -100, y: 0, rotate: -5 },    // Слева
      { x: 100, y: 0, rotate: 5 },      // Справа
      { x: 0, y: 100, rotate: 3 },      // Снизу
      { x: -100, y: 50, rotate: -3 },   // Слева-снизу
      { x: 100, y: 50, rotate: 3 },     // Справа-снизу
      { x: 0, y: -100, rotate: -5 },    // Сверху
    ];

    const anim = animations[index % animations.length];

    return {
      hidden: {
        opacity: 0,
        x: anim.x,
        y: anim.y,
        rotate: anim.rotate,
        scale: 0.8,
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
          delay: index * 0.15,
          bounce: 0.4,
        },
      },
    };
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            Наши <span className="text-accent">проекты</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Реализованные проекты по вентиляции и кондиционированию различной сложности
          </motion.p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              variants={getCardAnimation(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Изображение */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Категория */}
                <motion.div
                  className="absolute top-4 right-4 px-4 py-2 bg-accent rounded-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-primary font-semibold text-sm">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              {/* Информация о проекте */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                  {project.title}
                </h3>
                <motion.div
                  className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-500"
                />
              </motion.div>

              {/* Декоративный элемент */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Все проекты" */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Смотреть все проекты
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

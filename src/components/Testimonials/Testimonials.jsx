import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Александр Попов',
      position: 'Директор ресторана',
      text: 'Отличная работа! Установили систему вентиляции на кухне ресторана. Все сделано быстро, качественно и без лишних хлопот. Теперь у нас всегда свежий воздух, а персонал работает в комфортных условиях.',
      rating: 5,
    },
    {
      name: 'Мария Иванова',
      position: 'Управляющая офисным центром',
      text: 'Заказывали комплексное решение для офисного центра. Команда VentClima проявила высокий профессионализм на всех этапах - от проектирования до монтажа. Сотрудники довольны микроклиматом в офисе!',
      rating: 5,
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Владелец загородного дома',
      text: 'Установили систему кондиционирования в доме. Очень довольны результатом! Работает тихо, эффективно, расход электроэнергии меньше чем ожидали. Спасибо за профессиональный подход и консультации.',
      rating: 5,
    },
    {
      name: 'Елена Петрова',
      position: 'Руководитель фитнес-клуба',
      text: 'Сотрудничаем уже второй год. Делали вентиляцию в спортзале и раздевалках. Теперь заказали сервисное обслуживание. Все четко, по договору, никаких накладок. Рекомендуем!',
      rating: 5,
    },
    {
      name: 'Андрей Козлов',
      position: 'Владелец торгового центра',
      text: 'Большой объем работ был выполнен в срок и с отличным качеством. Особенно хочу отметить оперативность службы поддержки - любой вопрос решается максимально быстро. Профессионалы своего дела!',
      rating: 5,
    },
    {
      name: 'Наталья Волкова',
      position: 'Директор отеля',
      text: 'Установили кондиционеры во всех номерах отеля. Гости в восторге от климата в номерах! Команда работала очень аккуратно, не создавая неудобств постояльцам. Цена-качество на высоте!',
      rating: 5,
    },
  ];

  // Появление с вращением и масштабированием
  const getCardAnimation = (index) => {
    const column = index % 3;
    return {
      hidden: {
        opacity: 0,
        scale: 0,
        rotateY: column === 0 ? -180 : column === 1 ? 180 : -90,
        y: 100
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: index * 0.12,
          bounce: 0.4
        }
      }
    };
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Отзывы наших клиентов
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Нам доверяют предприятия и частные лица по всей стране
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift relative"
              variants={getCardAnimation(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

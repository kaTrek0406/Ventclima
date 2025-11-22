import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Какие у вас сроки выполнения работ по монтажу климатического оборудования?',
      answer: 'Сроки зависят от сложности проекта. Установка кондиционера в квартире занимает 1-2 дня, монтаж системы вентиляции для дома - 3-5 дней. Коммерческие объекты рассчитываются индивидуально после осмотра.',
    },
    {
      question: 'Какое оборудование вы используете и как его выбираете?',
      answer: 'Мы работаем только с проверенными производителями: Daikin, Mitsubishi, Gree, Electrolux. Выбор оборудования производится с учетом площади помещения, его назначения, бюджета клиента и энергоэффективности.',
    },
    {
      question: 'Как часто нужно проводить сервисное обслуживание кондиционера?',
      answer: 'Рекомендуется проводить техническое обслуживание дважды в год - перед началом летнего и зимнего сезонов. Это продлит срок службы оборудования и обеспечит его эффективную работу.',
    },
    {
      question: 'Предоставляете ли вы гарантию на выполненные работы?',
      answer: 'Да, мы предоставляем гарантию на монтажные работы сроком на 2 года, на оборудование действует гарантия производителя от 1 до 5 лет в зависимости от модели.',
    },
    {
      question: 'Можете ли вы выполнить работы в выходные или в нерабочее время?',
      answer: 'Да, мы можем организовать работы в удобное для вас время, включая выходные дни и вечернее время. Это особенно актуально для коммерческих объектов, где важно не прерывать рабочий процесс.',
    },
    {
      question: 'Как рассчитывается стоимость услуг? Есть ли скрытые платежи?',
      answer: 'Стоимость рассчитывается после бесплатного выезда специалиста и составления сметы. В договоре фиксируется окончательная цена - никаких скрытых платежей и доплат не предусмотрено.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Каскадное появление справа и слева
  const getQuestionAnimation = (index) => {
    const isFromRight = index % 2 === 1;
    return {
      hidden: {
        opacity: 0,
        x: isFromRight ? 200 : -200,
        rotateZ: isFromRight ? 10 : -10,
        scale: 0.8
      },
      visible: {
        opacity: 1,
        x: 0,
        rotateZ: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.7,
          delay: index * 0.1,
          bounce: 0.3
        }
      }
    };
  };

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Часто задаваемые вопросы
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ответы на популярные вопросы о наших услугах
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={getQuestionAnimation(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

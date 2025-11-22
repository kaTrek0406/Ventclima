import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Анимации для слов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const title = "Решения HVAC для любого типа помещений";
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}main.mp4`} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-blue-custom/80" />

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: i === 0 ? 'rgba(255, 197, 39, 0.1)' : i === 1 ? 'rgba(74, 159, 216, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              top: `${20 + i * 30}%`,
              left: `${10 + i * 35}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Title with word-by-word animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 perspective-1000"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3 md:mr-5"
                style={{
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                }}
              >
                {word === "помещений" ? (
                  <span className="text-accent drop-shadow-lg">{word}</span>
                ) : (
                  <span className="drop-shadow-2xl">{word}</span>
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with fade and slide */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Независимо от типа здания мы предлагаем профессиональные решения в области{' '}
            <motion.span
              className="text-accent font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              вентиляции
            </motion.span>
            {' '}и{' '}
            <motion.span
              className="text-accent font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              кондиционирования воздуха
            </motion.span>
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.a
              href="#contact"
              className="px-10 py-5 bg-accent hover:bg-accent-light text-primary font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent/50 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Получить консультацию</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>

            <motion.button
              onClick={scrollToServices}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl backdrop-blur-md transition-all duration-300 border-2 border-white/40 hover:border-white/60"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Наши услуги
            </motion.button>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            {[
              { value: "500+", label: "Проектов" },
              { value: "10+", label: "Лет опыта" },
              { value: "98%", label: "Довольных клиентов" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with bounce */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 15, 0]
        }}
        transition={{
          opacity: { delay: 3, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-medium">Прокрутите вниз</span>
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

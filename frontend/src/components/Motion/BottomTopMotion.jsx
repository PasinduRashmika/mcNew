import { motion } from "framer-motion";
export const BottomTopMotion = ({ children, delayTime = 0, style }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delayTime, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

// import { motion } from 'framer-motion';

// export default function OrbitingCircles({
//   colors = ['bg-blue-300', 'bg-yellow-200', 'bg-green-300'],
// }) {
//   const softFloat = {
//     y: [0, -185, -50, 35, 0],
//     x: [0, 55, -50, -45, 0],
//     transition: {
//       repeat: Infinity,
//       ease: 'easeInOut',
//       duration: 20, // slow and smooth
//     },
//   };

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-visible">
//       {/* Left Circle */}
//       <motion.div
//         className={`rounded-full ${colors[0]} opacity-60 blur-3xl w-70 h-70 absolute top-1/3 left-10`}
//         animate={softFloat}
//       />
//       {/* Right Circle */}
//       <motion.div
//         className={`rounded-full ${colors[1]} opacity-60 blur-3xl w-70 h-70 absolute top-2/3 right-10`}
//         animate={{ ...softFloat, transition: { ...softFloat.transition, duration: 15 } }}
//       />
//       {/* Bottom Circle */}
//       <motion.div
//         className={`rounded-full ${colors[2]} opacity-60 blur-3xl w-70 h-70 absolute bottom-10 left-1/2 -translate-x-1/2`}
//         animate={{ ...softFloat, transition: { ...softFloat.transition, duration: 10 } }}
//       />
//     </div>
//   );
// }

import { motion } from 'framer-motion';

export default function OrbitingCircles({
  colors = ['bg-[#A8D5BA]', 'bg-[#87ceeb]', 'bg-[#f5f5dc]'],
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 "
      style={{
        width: 500,
        height: 500,
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 30,
      }}
    >
      {/* Left Circle */}
      <div
        className={`rounded-full ${colors[0]} opacity-80 blur-3xl`}
        style={{
          width: 250,
          height: 250,
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        }}
      />

      {/* Right Circle */}
      <div
        className={`rounded-full ${colors[1]} opacity-80 blur-3xl`}
        style={{
          width: 250,
          height: 250,
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      />

      {/* Bottom Circle */}
      <div
        className={`rounded-full ${colors[2]} opacity-80 blur-3xl`}
        style={{
          width: 250,
          height: 250,
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
        }}
      />
    </motion.div>
  );
}

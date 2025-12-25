import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            className="bg-[#0f0a1f] border border-purple-500/30
              text-purple-300 px-5 py-4 rounded-xl shadow-2xl
              backdrop-blur-md max-w-xs"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

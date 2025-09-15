import React from "react";
import type { TabsProps } from "../../types/tabs.types";
import { AnimatePresence, motion } from "motion/react";

export const Tabs: React.FC<TabsProps> = ({ items, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  if (!items || items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <div className="w-full max-w-xl mx-auto rounded-lg">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {items?.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`relative px-4 py-3 text-md font-medium transition-colors
              ${activeIndex === index
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
              }  
            `}
          >
            {activeIndex === index && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            {item.label}
          </button>
        ))}
      </div>

      <div className="pt-4 bg-white dark:bg-gray-800 rounded-b-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activeItem.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tabs;
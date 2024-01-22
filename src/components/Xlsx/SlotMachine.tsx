import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
// import ShuffleIcon from '@/components/Icons/shuffle';

interface Props {
  textData: string[];
}

interface VariantProps {
  scaleY: number;
  y: string | number;
  opacity: number;
  filter?: string;
}

const BUTTON_COLOR = "rgb(75, 85, 99)";
const ARRAY_REPEAT = 5;

const SlotMachine = ({ textData }: Props) => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArr = Array(ARRAY_REPEAT).fill(textData).flat();
  const lastIndex = textArr.length - 1 - count;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev < lastIndex ? prev + 1 : prev;
      });
    }, getDuration(10, currentIndex));

    return () => clearInterval(interval);
  }, [currentIndex, lastIndex, count]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: "-50%", opacity: 0 },
    animate: ({ isLast }) => {
      let props: VariantProps = { scaleY: 1, y: 0, opacity: 1 };
      if (!isLast) props["filter"] = "blur(1.5px)";

      return props;
    },
    exit: { scaleY: 0.3, y: "50%", opacity: 0 },
  };

  function handleClick() {
    setCurrentIndex(0);
    setCount((prev) => {
      return prev < textData.length - 1 ? prev + 1 : 0;
    });
  }

  function getDuration(base: number, index: number) {
    return base * (index + 1) * 0.5;
  }

  return (
    <div className="flex justify-between">
      <AnimatePresence mode="popLayout">
        {textArr.map((text, i) => {
          const isLast = i === lastIndex;

          return (
            i === currentIndex && (
              <motion.p
                className="overflow-hidden text-7xl font-thin"
                key={text}
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: getDuration(isLast ? 0.1 : 0.01, i),
                  ease: isLast ? "easeInOut" : "linear",
                }}
              >
                {text}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <motion.button
        className="mr-[650px]"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        {/* <ShuffleIcon fill={BUTTON_COLOR} /> */}
        <button>REtry</button>
      </motion.button>
    </div>
  );
};

export default SlotMachine;

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const NumberTicker = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  const countRef = useRef(null);

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    setIsMounted(true);
    spring.set(value);
  }, [value, spring]);

  if (!isMounted) return null;

  return <motion.span>{display}</motion.span>;
};

export default NumberTicker;
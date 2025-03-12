import { motion } from "framer-motion";

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar = ({ progress }: CircularProgressBarProps) => {
  const radius = 40;
  const strokeWidth = 8; // Ketebalan garis
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  const offset = circumference - (progress / 100) * circumference; // Offset animasi

  return (
    <div className="relative flex items-center justify-center">
      {/* Background lingkaran */}
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />
        {/* Progress Bar animasi */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="orange" // Warna progress
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-xl font-bold text-orange-600">
        {progress}%
      </span>
    </div>
  );
};

export default CircularProgressBar;

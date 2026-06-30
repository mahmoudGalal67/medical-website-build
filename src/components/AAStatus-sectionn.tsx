"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "عدد المراجعين منذ الافتتاح",
    color: "#367F8B",
    progress: 97,
  },
  {
    value: 9.4,
    decimals: 1,
    label: "تقييم المراجعين",
    color: "#7A1F3D",
    progress: 94,
  },
  {
    value: 97,
    suffix: "%",
    label: "جودة الخدمات المقدمة",
    color: "#367F8B",
    progress: 97,
  },
  {
    value: 30,
    suffix: "+",
    secondLine: "عام",
    label: "خبرات الأطباء",
    color: "#7A1F3D",
    progress: 96,
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-gray-100 py-20"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <AnimatedCircle
                start={inView}
                {...item}
              />

              <h3 className="mt-6 text-center text-xl font-bold text-primary">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CircleProps {
  value: number;
  color: string;
  progress: number;
  start: boolean;
  suffix?: string;
  decimals?: number;
  secondLine?: string;
}

function AnimatedCircle({
  value,
  color,
  progress,
  start,
  suffix,
  decimals,
  secondLine,
}: CircleProps) {
  const radius = 72;
  const strokeWidth = 12;

  const circumference = 2 * Math.PI * radius;

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    let startTime: number | null = null;

    const duration = 1800;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;

      const percentage = Math.min(elapsed / duration, 1);

      setAnimatedProgress(progress * percentage);

      if (percentage < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [progress, start]);

  const dashOffset =
    circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="relative h-44 w-44">
      <svg
        className="-rotate-90"
        width="176"
        height="176"
      >
        <circle
          cx="88"
          cy="88"
          r={radius}
          stroke="#ECECEC"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx="88"
          cy="88"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="text-3xl font-bold"
          style={{ color }}
        >
          {start ? (
            <CountUp
              end={value}
              duration={2}
              decimals={decimals ?? 0}
            />
          ) : (
            0
          )}
          {suffix}
        </div>

        {secondLine && (
          <div
            className="text-3xl font-bold"
            style={{ color }}
          >
            {secondLine}
          </div>
        )}
      </div>
    </div>
  );
}
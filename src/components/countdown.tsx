"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./countdown.module.css";

type CountdownProps = {
  target: string;
};

type TimePart = {
  label: string;
  value: number;
};

const initialParts: TimePart[] = [
  { label: "Days", value: 0 },
  { label: "Hours", value: 0 },
  { label: "Minutes", value: 0 },
  { label: "Seconds", value: 0 }
];

function getTimeParts(targetTime: number): TimePart[] {
  const difference = Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds }
  ];
}

export function Countdown({ target }: CountdownProps) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [parts, setParts] = useState<TimePart[]>(initialParts);

  useEffect(() => {
    const update = () => setParts(getTimeParts(targetTime));
    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [targetTime]);

  return (
    <div className={styles.countdown} aria-label="Countdown to tournament kickoff">
      {parts.map((part) => (
        <div className={styles.part} key={part.label}>
          <strong>{part.value.toString().padStart(2, "0")}</strong>
          <span>{part.label}</span>
        </div>
      ))}
    </div>
  );
}

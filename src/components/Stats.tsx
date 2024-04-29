import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { CompletionStats } from "../services/CompletionService";

interface Props {
  stats?: CompletionStats;
}

function Stats({ stats }: Readonly<Props>) {
  const convertToK = (num: number) => {
    if (num >= 1000 && num <= 999999) {
      return num / 1000;
    }
    if (num >= 1000000) {
      return num / 1000000;
    }
    return num;
  };

  const KConvert = (num: number) => {
    if (num >= 1000 && num <= 999999) {
      return "k";
    }
    if (num >= 1000000) {
      return "m";
    } else {
      return "";
    }
  };

  const countGlobal = useMotionValue(0);
  const roundedGlobal = useTransform(countGlobal, (latest) =>
    Math.round(latest)
  );

  const countGlobalDaily = useMotionValue(0);
  const roundedGlobalDaily = useTransform(countGlobalDaily, (latest) =>
    Math.round(latest)
  );

  const countPersonal = useMotionValue(0);
  const roundedPersonal = useTransform(countPersonal, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (stats !== undefined) {
      const animationGlobal = animate(
        countGlobal,
        convertToK(stats.world_completions_count),
        {
          duration: 2,
        }
      );
      const animationGlobalDaily = animate(
        countGlobalDaily,
        convertToK(stats.world_daily_completions_count),
        { duration: 2.5, delay: 0.5 }
      );
      const animationPersonal = animate(
        countPersonal,
        convertToK(stats.user_completions_count),
        {
          duration: 2.75,
          delay: 1,
        }
      );
      return () => {
        animationGlobal.stop();
        animationGlobalDaily.stop();
        animationPersonal.stop();
      };
    }
  }, [stats]);

  {
    /* bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue */
  }
  return (
    <div className="stats rounded-none place-items-center gap-4 bg-kindly-offWhite stats-horizontal text-white">
        <div className="stat flex flex-col justify-center rounded-lg place-items-center h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
            <div className="flex flex-row items-end">
            <motion.div className="stat-value">
                {stats !== undefined && roundedGlobal}
            </motion.div>
            <div className="stat-desc text-3xl text-white">
                {" "}
                {stats === undefined
                ? ". . ."
                : KConvert(stats.world_completions_count)}
            </div>
            </div>
            <div className="stat-title text-white">
                {stats !== undefined && "Global"}
            </div>
            <div className="stat-title text-white">
                {stats !== undefined && "Completes"}
            </div>
      </div>

      <div className="stat flex flex-col justify-center rounded-lg place-items-center h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
        <div className="flex flex-row items-end">
          <motion.div className="flex stat-value">
            {stats !== undefined && roundedGlobalDaily}
          </motion.div>
          <div className="stat-desc text-3xl text-white">
            {" "}
            {stats === undefined
              ? ". . ."
              : KConvert(stats.world_daily_completions_count)}
          </div>
        </div>
        <div className="stat-title text-white">
          {stats !== undefined && "Global"}
        </div>
        <div className="stat-title text-white">
          {stats !== undefined && "Daily"}
        </div>
      </div>

      <div className="stat flex flex-col justify-center rounded-lg place-items-center h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
        <div className="flex flex-row items-end">
          <motion.div className="stat-value">
            {stats !== undefined && roundedPersonal}
          </motion.div>
          <div className="stat-desc text-3xl text-white">
            {" "}
            {stats === undefined
              ? ". . ."
              : KConvert(stats.user_completions_count)}
          </div>
        </div>
        <div className="stat-title text-white">
          {stats !== undefined && "Personal"}
        </div>
        <div className="stat-title text-white">
          {stats !== undefined && "Completes"}
        </div>
      </div>
    </div>
  );
}

export default Stats;

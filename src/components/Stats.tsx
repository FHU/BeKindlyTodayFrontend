import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { CompletionStats } from "../services/CompletionService";

interface Props {
  stats?: CompletionStats;
}

function Stats({ stats }: Readonly<Props>) {
  if (stats === undefined) {
    return (
      <div className="stats rounded-none place-items-center gap-4 bg-kindly-offWhite stats-horizontal text-white">
        <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
          <p>...</p>
        </div>

        <div className="stat rounded-lg place-items-center bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
          <p>...</p>
        </div>

        <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
          <p>...</p>
        </div>
      </div>
    );
  }
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
  }, []);

  {
    /* bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue */
  }
  return (
    <div className="stats rounded-none place-items-center gap-4 bg-kindly-offWhite stats-horizontal text-white">
      <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
        <div className="flex flex-row items-end">
          <motion.div className="stat-value">{roundedGlobal}</motion.div>
          <div className="stat-desc text-3xl text-white">
            {" "}
            {KConvert(stats.world_completions_count)}
          </div>
        </div>
        <div className="stat-title text-white">Globally</div>
      </div>

      <div className="stat rounded-lg place-items-center bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
        <div className="flex flex-row items-end">
          <motion.div className="flex stat-value">
            {roundedGlobalDaily}
          </motion.div>
          <div className="stat-desc text-3xl text-white">
            {" "}
            {KConvert(stats.world_daily_completions_count)}
          </div>
        </div>
        <div className="stat-title text-white">Globally</div>
        <div className="stat-title text-white">Daily</div>
      </div>

      <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
        <div className="flex flex-row items-end">
          <motion.div className="stat-value">{roundedPersonal}</motion.div>
          <div className="stat-desc text-3xl text-white">
            {" "}
            {KConvert(stats.user_completions_count)}
          </div>
        </div>
        <div className="stat-title text-white">Personal</div>
      </div>
    </div>
  );
}

export default Stats;

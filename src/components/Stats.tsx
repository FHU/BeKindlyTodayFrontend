import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";


interface StatBar {
    Global: number
    GlobalDaily: number
    Personal: number
}

function Stats() {


    const statbar: StatBar = {
        Global: 90000,
        GlobalDaily: 8400,
        Personal: 20
    }

    const countGlobal = useMotionValue(0);
    const roundedGlobal = useTransform(countGlobal, (latest) => Math.round(latest));

    const countGlobalDaily = useMotionValue(0);
    const roundedGlobalDaily = useTransform(countGlobalDaily, (latest) => Math.round(latest));

    const countPersonal = useMotionValue(0);
    const roundedPersonal = useTransform(countPersonal, (latest) => Math.round(latest));


    useEffect(() => {
        const animationGlobal = animate(countGlobal, statbar.Global, { duration: 2 });
        const animationGlobalDaily = animate(countGlobalDaily, statbar.GlobalDaily, { duration: 2 });
        const animationPersonal = animate(countPersonal, statbar.Personal, { duration: 2 });

        return () => {
            animationGlobal.stop();
            animationGlobalDaily.stop();
            animationPersonal.stop();
        };
    }, []);


    return(
        <div className='flex flex-row space-x-4 text-center'>
                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <motion.div className="stat-value text-black pt-2">{roundedGlobal}</motion.div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Globally</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <motion.div className="stat-value text-black pt-2">{roundedGlobalDaily}</motion.div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Today</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <motion.div className="stat-value text-black pt-2">{roundedPersonal}</motion.div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed By You</div>
                    </div>
                </div>
            </div>
    )
}

export default Stats;
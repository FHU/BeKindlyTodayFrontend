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

    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
        const globalanimation = animate(count, statbar.Global, { duration: 3 });
        return () => globalanimation.stop();

    }, []);


    return(
        <div className='flex flex-row space-x-4 text-center'>
                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <motion.div className="stat-value text-black pt-2">{rounded}</motion.div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Globally</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">{statbar.GlobalDaily}</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Today</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">{statbar.Personal}</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed By You</div>
                    </div>
                </div>
            </div>
    )
}

export default Stats;
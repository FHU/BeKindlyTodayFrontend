import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";


interface StatBar {
    Global: number
    GlobalDaily: number
    Personal: number
}

function Stats() {

    const convertToK = (num:number) => {
        if (num >= 1000 && num <=999999) {
          return (num / 1000);
        } if (num >= 1000000) {
            return (num / 1000000);
        }
        return num;
      };

    const KConvert = (num:number) => {
        if (num >=1000 && num <= 999999) {
            return "k"
        } if (num>=1000000) {
            return "m"
        } else {
            return ""
        }
    };


    const statbar: StatBar = {
        Global: 90000000,
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
        const animationGlobal = animate(countGlobal, convertToK(statbar.Global), { duration: 2 });
        const animationGlobalDaily = animate(countGlobalDaily, convertToK(statbar.GlobalDaily), { duration: 2.5, delay:0.5 });
        const animationPersonal = animate(countPersonal, convertToK(statbar.Personal), { duration: 2.75, delay:1 });

        return () => {
            animationGlobal.stop();
            animationGlobalDaily.stop();
            animationPersonal.stop();
        };
    }, []);


    return(
        <div className='flex flex-row space-x-4 text-center'>

                <div className="stats shadow border-2 border-white text-white bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                    <div className="stat flex flex-col w-40 space-y-2">
                        <div className="flex flex-row justify-center text-md">
                          <motion.div className="stat-value text-white pt-2">{roundedGlobal}</motion.div>
                          <div className="text-white p-1 pt-3 text-3xl align-middle items-center">{KConvert(statbar.Global)}</div>  
                        </div>
                        
                        <div className="bg-white opacity-50 h-0.5 rounded-sm"></div>
                        <div className="stat-title pt-4 text-white whitespace-normal">Globally</div>
                    </div>
                </div>

                <div className="stats shadow border-2 border-white text-white bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                    <div className="stat flex flex-col w-40 space-y-2">
                        <div className="flex flex-row justify-center text-md">
                          <motion.div className="stat-value text-white pt-2">{roundedGlobalDaily}</motion.div>
                          <div className="text-white p-1 pt-3 text-3xl align-middle items-center">{KConvert(statbar.GlobalDaily)}</div>  
                        </div>
                        <div className="bg-white opacity-50 h-0.5 rounded-sm"></div>
                        <div className="stat-title pt-2 text-white whitespace-normal">Globally Today</div>
                    </div>
                </div>

                <div className="stats shadow border-2 border-white text-white bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                    <div className="stat flex flex-col w-40 space-y-2">
                        <div className="flex flex-row pb-1 justify-center text-md">
                          <motion.div className="stat-value text-white pt-2">{roundedPersonal}</motion.div>
                          <div className="text-white p-1 pt-3 text-3xl align-middle items-center">{KConvert(statbar.Personal)}</div>  
                        </div>
                        <div className="bg-white opacity-50 h-0.5 rounded-sm"></div>
                        <div className="stat-title pt-4 text-white whitespace-normal">Personally</div>
                    </div>
                </div>
            </div>
    )
}

export default Stats;
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

{/* bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue */}
    return(
        
        <div className="stats rounded-none place-items-center gap-4 bg-kindly-offWhite stats-vertical md:stats-horizontal text-white">
  
            <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                <div className="flex flex-row">
                    <motion.div className="stat-value">{roundedGlobal}</motion.div>
                    <div className="stat-desc text-3xl text-white"> {KConvert(statbar.Global)}</div>
                </div>
                <div className="stat-title text-white">Globally</div>
                
                    
            </div>
            
            <div className="stat rounded-lg place-items-center bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                <div className="flex flex-row">
                    <motion.div className="flex stat-value">{roundedGlobalDaily}</motion.div>
                    <div className="stat-desc text-3xl text-white"> {KConvert(statbar.GlobalDaily)}</div>
                </div>
                <div className="stat-title text-white">Globally</div>
                <div className="stat-title text-white">Daily</div>
                
            </div>
            
            <div className="stat rounded-lg place-items-center p-7 bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue">
                <div className="flex flex-row">
                    <motion.div className="stat-value">{roundedPersonal}</motion.div>
                    <div className="stat-desc text-3xl text-white"> {KConvert(statbar.Personal)}</div>
                </div>
                <div className="stat-title text-white">Personal</div>
                
            </div>
            
        </div>
)
}

export default Stats;
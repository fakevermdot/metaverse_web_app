"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-[160px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1 left-[60%] w-[196px] h-[150px] p-[4px] rounded-[24px] bg-[rgba(0,0,0,0.25)]">
          <img
            src="planet-02.png"
            alt="people"
            className="w-full h-full rounded-[24px] object-cover cursor-pointer"
          />
          <img src="/elipse1.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-2"/>
          <img src="/elips2.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-5"/>
          <img src="/elipse3.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-7"/>
          <p className="font-semibold sm:text-[10px] text-[13px] text-white absolute z-0 bottom-10 ml-14 leading-5 cursor-pointer">+263 has joined</p>
          <h3 className="font-semibold sm:text-[14px] text-[15px] text-[rgba(255,255,255,1)] absolute z-0 lg:bottom-4 ml-4 cursor-pointer">
            Hawkins Labs
          </h3>
        </div>
        <div className="absolute bottom-[160px] left-[300px] w-[196px] h-[150px] p-[4px] rounded-[24px] bg-[rgba(0,0,0,0.25)] ">
          <img
            src="planet-03.png"
            alt="people"
            className="w-full h-full rounded-[24px] object-cover cursor-pointer"
          />
          <img src="/elipse1.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-2"/>
          <img src="/elips2.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-5"/>
          <img src="/elipse3.png" alt="elipse" className="w-[20px] rounded-full absolute z-0 bottom-10 ml-7"/>
          <p className="font-semibold sm:text-[10px] text-[13px] text-white absolute z-0 bottom-10 ml-14 leading- cursor-pointer">+263 has joined</p>
          <h3 className="font-semibold sm:text-[14px] text-[15px] text-[rgba(255,255,255,1)] absolute z-0 lg:bottom-4 ml-4 cursor-pointer">
            The Upside down
          </h3>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

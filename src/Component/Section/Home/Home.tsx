import React from 'react';
import pfp from '../../../assets/pfp.jpg';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <motion.div 
      className=' flex items-center flex-col gap-y-4 py-8 text-white h-screen w-full'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <motion.img 
          src={pfp}
          alt='Profile Picture'
          className='h-48 w-48 xl:w-64 xl:h-64  rounded-full'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

      <motion.div
        className='flex flex-col py-4 justify-center items-center gap-y-4'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className='text-white text-3xl font-black'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Lorem Ipsum
        </motion.h1>
        <motion.h2 
          className='text-xl'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SubText
        </motion.h2>
        <motion.p 
          className='text-center px-4'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa eligendi facere nostrum eum iusto ducimus est quidem sunt doloribus delectus iure similique repellat, consequuntur aspernatur mollitia autem ex reiciendis?
        </motion.p>
      </motion.div>

      {/* Animating the buttons */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          className='bg-slate-600 text-white px-4 py-2 rounded-md'
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Contact Me
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img src="" alt="" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

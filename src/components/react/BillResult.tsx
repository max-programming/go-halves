import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  splittedAmount: number;
}

const BillResult: FC<Props> = ({ splittedAmount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className='prose'
    >
      <h2>Splitted Amount</h2>
      <h1 className='text-center text-5xl'>{splittedAmount}</h1>
    </motion.div>
  );
};

export default BillResult;

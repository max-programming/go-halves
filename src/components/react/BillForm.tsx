import { useState } from 'react';
import { createPortal } from 'react-dom';
import useTimeout from 'react-use/lib/useTimeout';
import Confetti from 'react-confetti';
import BillResult from './BillResult';

const BillForm = () => {
  const [totalAmount, setTotalAmount] = useState<number>();
  const [noOfPeople, setNoOfPeople] = useState<number>();
  const [splittedAmount, setSplittedAmount] = useState<number>();
  const [showConfetti, setShowConfetti] = useState(true);

  function splitBill() {
    if (!totalAmount || !noOfPeople) return;
    const split = +(totalAmount / noOfPeople).toFixed(2);
    setSplittedAmount(split);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 9000);
  }

  return (
    <div className='flex flex-col justify-center gap-4 items-center mt-5'>
      <input
        type='number'
        className='input input-bordered input-primary w-full text-xl'
        placeholder='Enter total amount'
        value={totalAmount}
        onChange={e => setTotalAmount(e.target.valueAsNumber)}
      />
      <input
        type='number'
        className='input input-bordered input-primary w-full text-xl'
        placeholder='Number of people'
        value={noOfPeople}
        onChange={e => setNoOfPeople(e.target.valueAsNumber)}
      />
      <button className='btn btn-primary w-full text-xl' onClick={splitBill}>
        SPLIT!
      </button>
      {splittedAmount && <BillResult splittedAmount={splittedAmount} />}
      {showConfetti && <ConfettiComponent />}
    </div>
  );
};

const ConfettiComponent = () => {
  const [isComplete] = useTimeout(4000);

  return createPortal(
    <Confetti
      initialVelocityY={20}
      initialVelocityX={10}
      recycle={!isComplete()}
    />,
    document.body
  );
};

export default BillForm;

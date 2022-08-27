import { useState } from 'react';
import BillResult from './BillResult';

const BillForm = () => {
  const [totalAmount, setTotalAmount] = useState<number>();
  const [noOfPeople, setNoOfPeople] = useState<number>();
  const [splittedAmount, setSplittedAmount] = useState<number>();

  function splitBill() {
    if (!totalAmount || !noOfPeople) return;
    const split = +(totalAmount / noOfPeople).toFixed(2);
    setSplittedAmount(split);
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
    </div>
  );
};

export default BillForm;

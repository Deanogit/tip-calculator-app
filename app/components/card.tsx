'use client';

import Form from './form';
import Result from './result';
import { useState } from 'react';

export default function Card() {
  const [bill, setBill] = useState<string>('');
  const [people, setPeople] = useState<number | ''>('');
  const [tip, setTip] = useState<number>(15);
  const [billError, setBillError] = useState<string>(''); // error message
  //   const [peopleError, setPeopleError] = useState<string>(''); // error message

  const resetAll = () => {
    setBill('');
    setPeople('');
    setTip(15);
    setBillError('');
    // setPeopleError('');
  };

  return (
    <>
      <div className="w-[375px] md:w-[608px] lg:w-[920px] lg:grid lg:grid-cols-2 lg:gap-12 p-12 md:px-20 lg:p-8 bg-[var(--background)] rounded-[25px]">
        <Form
          bill={bill}
          setBill={setBill}
          billError={billError}
          setBillError={setBillError}
          people={people}
          setPeople={setPeople}
          //   peopleError={peopleError}
          //   setPeopleError={setPeopleError}
          tip={tip}
          setTip={setTip}
        />
        <Result bill={bill} people={people} tip={tip} onReset={resetAll} />
      </div>
    </>
  );
}

'use client';

import Form from './form';
import Result from './result';
import { useState } from 'react';

export default function Card() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState(15);

  return (
    <>
      <div className="w-[375px] md:w-[608px] lg:w-[920px] lg:grid lg:grid-cols-2 lg:gap-12 p-12 md:px-20 lg:p-8 bg-[var(--background)] rounded-[25px]">
        <Form
          setBill={setBill}
          setPeople={setPeople}
          setTip={setTip}
          people={people}
          bill={bill}
          tip={tip}
        />
        <Result
          bill={bill}
          people={people}
          tip={tip}
          setTip={setTip}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
    </>
  );
}

'use client';
import { useState } from 'react';

import Image from 'next/image';

type FormProps = {
  bill: number | '';
  setBill: (bill: number | '') => void;
  tip: number;
  setTip: (tip: number) => void;
  people: number | '';
  setPeople: (people: number | '') => void;
};

export default function Form({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
}: FormProps) {
  const tipOptions = [5, 10, 15, 25, 50];
  return (
    <>
      <form className="lg:pt-3" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="amount"
          className="preset-5 text-[var(--cust-grey-500)]"
        >
          <h1 className="mb-2">Bill</h1>
        </label>

        <div className="flex items-center relative">
          <Image
            src="/images/icon-dollar.svg"
            width={11}
            height={17}
            alt=""
            className="absolute top-2 md:top-4 left-4 translate-y-1/8 z-10"
          />
          {/** Listen out for input change - setBill */}
          <input
            id="bill"
            type="number"
            value={bill}
            placeholder="0"
            className="cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right text-[var(--cust-green-900)] relative md:py-2 lg:mb-10 focus:outline-[var(--cust-green-400)]"
            required
            onChange={(e) =>
              setBill(e.target.value === '' ? '' : Number(e.target.value))
            }
          />
        </div>

        <div className="text-[var(--cust-grey-500)]">
          <h2 className="preset-5 mb-2">Select tip %</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 lg:mb-10">
            {tipOptions.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTip(t)}
                className={` rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)] md:py-2 ${
                  tip === t
                    ? 'bg-[var(--cust-green-400)]'
                    : 'bg-[var(--cust-green-900)]'
                }`}
              >
                {t}%
              </button>
            ))}

            <button
              type="button"
              className="bg-[var(--cust-grey-50)] rounded-[5px] text-[var(--cust-grey-550)] preset-3 text-center placeholder:text-[var(--cust-grey-550)] md:py-2 cursor-pointer hover:bg-[var(--cust-green-400)] hover:text-[var(--cust-green-900)]"
            >
              Custom
            </button>
          </div>
          <label htmlFor="people">
            <h3 className="mb-2 flex">
              Number of People
              <span
                className={`ml-auto text-[var(--cust-orange-400)] ${
                  bill && people === 0 ? 'block' : 'hidden'
                }`}
                id="zero"
              >
                Can&apos;t be zero
              </span>
            </h3>
          </label>
          <div className="relative flex items-center">
            <Image
              src="/images/icon-person.svg"
              width={13}
              height={16}
              alt=""
              className="absolute top-2 md:top-4 left-4 translate-y-1/8"
            />
            {/** if bill && empty => outline-red! Can't be zero *
             * else => onChange setPeople */}
            <input
              type="number"
              name="people"
              id="people"
              placeholder="0"
              value={people}
              className={`cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right text-[var(--cust-green-900)] md:py-2 ${
                bill !== '' && people === 0
                  ? 'focus:outline-[var(--cust-orange-400)]'
                  : 'focus:outline-[var(--cust-green-400)]'
              }`}
              required
              onChange={(e) =>
                setPeople(
                  e.currentTarget.value === ''
                    ? ''
                    : Math.max(0, Number(e.currentTarget.value))
                )
              }
            />
          </div>
        </div>
      </form>
    </>
  );
}

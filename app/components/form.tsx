import Image from 'next/image';

export default function Form() {
  return (
    <>
      <form>
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
            className="absolute top-2 left-4 translate-y-1/8 z-10"
          />
          <input
            type="text"
            placeholder="0"
            className="cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right text-[var(--cust-green-900)] relative"
            required
          />
        </div>
        <div className="text-[var(--cust-grey-500)]">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="col-span-2">
              <h2 className="preset-5">Select tip %</h2>
            </div>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)]">
              5%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)]">
              10%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)]">
              15%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)]">
              25%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3 hover:bg-[var(--cust-green-400)] cursor-pointer hover:text-[var(--cust-green-900)]">
              50%
            </button>
            <input
              type="text"
              className="bg-[var(--cust-grey-50)] rounded-[5px] text-[var(--cust-grey-550)] preset-3 text-center placeholder:text-[var(--cust-grey-550)]"
              placeholder="Custom"
            />
          </div>
          <label htmlFor="people">
            <h3 className="mb-2">Number of People</h3>
          </label>
          <div className="relative flex items-center">
            <Image
              src="/images/icon-person.svg"
              width={13}
              height={16}
              alt=""
              className="absolute top-2 left-4 translate-y-1/8"
            />
            <input
              type="text"
              name="people"
              id="people"
              placeholder="0"
              className="cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right text-[var(--cust-green-900)]"
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}

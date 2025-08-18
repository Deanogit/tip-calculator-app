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
        <input
          type="text"
          placeholder="0"
          className="cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right"
        />
        <div className="text-[var(--cust-grey-500)]">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="col-span-2">
              <h2 className="preset-5">Select tip %</h2>
            </div>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3">
              5%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3">
              10%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3">
              15%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3">
              25%
            </button>
            <button className="bg-[var(--cust-green-900)] rounded-[5px] text-white preset-3">
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
          <input
            type="text"
            name="people"
            id="people"
            placeholder="0"
            className="cursor-pointer bg-[var(--cust-grey-50)] w-full preset-3 px-4 mb-8 rounded-[5px] text-right"
          />
        </div>
      </form>
    </>
  );
}

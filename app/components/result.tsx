export default function Result() {
  return (
    <>
      <div className="bg-[var(--cust-green-900)] p-6 rounded-[15px]">
        <div className="">
          <div className="flex justify-between items-center py-3">
            <div className="">
              <h3 className="text-white preset-5">Tip Amount</h3>
              <p className="preset-6 text-[var(--cust-grey-400)]">/ person</p>
            </div>
            <div className="text-right">
              <h2 className="text-[var(--cust-green-400)] preset-2">$0.00</h2>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <h3 className="text-white preset-5">Total</h3>
              <p className="preset-6 text-[var(--cust-grey-400)]">/ person</p>
            </div>
            <div className="text-right">
              <h2 className="text-[var(--cust-green-400)] preset-2">$0.00</h2>
            </div>
          </div>
          <button className="col-span-2 bg-[var(--cust-green-750)] w-full uppercase text-[var(--cust-green-800)] py-2 rounded-[5px]">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

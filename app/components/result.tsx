export default function Result({
  bill,
  people,
  tip,
  setBill,
  setPeople,
  setTip,
}: string) {
  return (
    <>
      <div className="bg-[var(--cust-green-900)] p-6 rounded-[15px] flex flex-col">
        <div className="flex justify-between items-center py-3">
          <div className="">
            <h3 className="text-white preset-5">Tip Amount</h3>
            <p className="preset-6 text-[var(--cust-grey-400)]">/ person</p>
          </div>
          <div className="text-right">
            {/** Render (bill * tip - bill / people) */}
            <h2 className="text-[var(--cust-green-400)] preset-2 lg:preset-1">
              $
              {bill && people > 0
                ? Number(((bill / 100) * tip) / people / 100).toFixed(2)
                : '0.00'}
            </h2>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 mb-4">
          <div>
            <h3 className="text-white preset-5">Total</h3>
            <p className="preset-6 text-[var(--cust-grey-400)]">/ person</p>
          </div>
          <div className="text-right">
            {/** Render (bill + tip / person) */}
            <h2 className="text-[var(--cust-green-400)] preset-2 lg:preset-1">
              $
              {bill && people > 0
                ? Number(
                    bill / 100 / people + ((bill / 100) * tip) / 100 / people
                  ).toFixed(2)
                : '0.00'}
            </h2>
          </div>
        </div>
        {/** If there is a bill remove disabled! */}
        <button
          className={`col-span-2  w-full uppercase text-[var(--cust-green-800)] py-3 rounded-[5px] lg:mt-auto mb-3 cursor-pointer ${
            bill && people
              ? 'bg-[var(--cust-green-200)] text-[var(--cust-green-900)]'
              : 'bg-[var(--cust-green-750)]'
          }`}
          onClick={() => {
            setBill(''), setPeople(''), setTip(15);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

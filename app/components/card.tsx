import Form from './form';
import Result from './result';

export default function Card() {
  return (
    <>
      <div className="w-[375px] md:w-[608px] lg:w-[920px] lg:grid lg:grid-cols-2 lg:gap-12 p-12 md:px-20 lg:p-8 bg-[var(--background)] rounded-[25px]">
        <Form />
        <Result />
      </div>
    </>
  );
}

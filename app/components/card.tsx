import Form from './form';
import Result from './result';

export default function Card() {
  return (
    <>
      <div className="w-[375px] p-12 bg-[var(--background)] rounded-[25px]">
        <Form />
        <Result />
      </div>
    </>
  );
}

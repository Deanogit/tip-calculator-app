import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="my-10 mx-auto">
        <Image src="/images/logo.svg" alt="" width={87} height={54} />
      </div>
    </>
  );
}

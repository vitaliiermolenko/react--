import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <p>Ласкаво просимо на наш сайт!</p>
      <Link href="/about">Про нас</Link>
      <br />
      <Link href="/contact">Контакти</Link>
      <br />
      <Link href="/products">Продукти</Link>
    </div>
  );
};

export default Index;

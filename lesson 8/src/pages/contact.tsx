import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <h1>Контакти</h1>
      <p>Звяжіться з нами за адресою contact@example.com.</p>
      <Link href="/">
        На головну
      </Link>
    </div>
  );
};

export default Contact;

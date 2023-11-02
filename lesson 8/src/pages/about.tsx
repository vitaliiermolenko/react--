import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>Про нас</h1>
      <p>Ми - команда веб-розробників, яка створює чудові сайти.</p>
      <Link href="/">
        На головну
      </Link>
    </div>
  );
};

export default About;

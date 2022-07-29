import React from 'react';
import IMG1 from '../../assets/bookink.png';
import IMG2 from '../../assets/reading.png';
import IMG3 from '../../assets/s3lecto.png';
import IMG4 from '../../assets/kenzieb.png';
import IMG5 from '../../assets/lolapi.png';
import IMG6 from '../../assets/pitstop.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'BookInk',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'Typescript',
      link: 'https://capstone-book-ink-ruddy.vercel.app/',
      github: 'https://github.com/btrzdev/capstone-book-ink',
    },
    {
      id: 2,
      title: 'ReadingHabits',
      img: IMG2,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React',
      link: 'https://habits-jpedrofp.vercel.app/',
      github: 'https://github.com/joao-pillon/habits',
    },
    {
      id: 3,
      title: 'S3lecto',
      img: IMG3,
      description: 'Aplicativo para uma startup',
      technologies: 'React',
      link: 'https://s3lecto.com',
      github: 'https://github.com/joao-pillon/s3lecto',
    },
    {
      id: 4,
      title: 'KenzieBurger',
      img: IMG4,
      description:
        'Front-End completamente responsivo de uma hamburgueria.',
      technologies: 'JavaScript | React | CSS',
      link: 'https://github.com/joao-pillon/kenzieburguer',
      github: 'https://hamburgueria-jpedrofp.vercel.app/',
    },
    {
      id: 5,
      title: 'MOBAPI',
      img: IMG5,
      description:
        'Uma API criada para servir de plataforma para que jogadores de MOBAs (Multiplayer Online Battle Arena) possam se encontrar e formar times.',
      technologies: 'Python',
      link: 'https://github.com/emberjp/q3-capstone-mobapi',
      github: 'https://github.com/emberjp/q3-capstone-mobapi',
    },
    {
      id: 6,
      title: 'Pitstop',
      img: IMG6,
      description:
        'Esse é um projeto Back End de um E-commerce, para armazenar produtos e efetuar a compra dos mesmos a partir do carrinho de compra.',
      technologies: 'Django',
      link: 'https://github.com/matheus-araujo-cunha/pit-stop/',
      github: 'https://pitstop-api.herokuapp.com/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

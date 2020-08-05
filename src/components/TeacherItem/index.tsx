import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/2206405?s=460&u=82eccdf54c13b05d29a2c761b3ce54356b288634&v=4" alt="Cadu Pedroni" />
        <div>
          <strong>Cadu Pedroni</strong>
          <span>Tecnologia</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias avançadas.
        <br /><br />
        Apaixonado por ensinar e mudar a vida das pessoas profissionalmente.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
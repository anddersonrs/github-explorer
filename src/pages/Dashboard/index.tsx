import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10183881?s=460&u=657709fe67fd8d720e3e893d9f6f185d976ac96f&v=4"
            alt="Anderson Rodrigues"
          />
          <div>
            <strong>anddersonrs/omnistack</strong>
            <p>Easy peasy higly scalable ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10183881?s=460&u=657709fe67fd8d720e3e893d9f6f185d976ac96f&v=4"
            alt="Anderson Rodrigues"
          />
          <div>
            <strong>anddersonrs/omnistack</strong>
            <p>Easy peasy higly scalable ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10183881?s=460&u=657709fe67fd8d720e3e893d9f6f185d976ac96f&v=4"
            alt="Anderson Rodrigues"
          />
          <div>
            <strong>anddersonrs/omnistack</strong>
            <p>Easy peasy higly scalable ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

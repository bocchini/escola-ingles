# Escola-ingles

## Tecnologias utilizadas
 - Node
 - Express
 - Sequelize
 - Sequelize CLI
 - Mysql

### Clonar o projeto 
git clone https://github.com/bocchini/escola-ingles.git

### Entrar na pasta do projeto e rodar
npm i

#### Configurar o Banco 
utilizar o config.json na pasta src/config
#### Rodar as migrations
npx sequelize-cli db:migrate:all

#### Rodar os seeds para teste
npx sequelize-cli db:seed:all


#### Rodar o projeto
npm run dev
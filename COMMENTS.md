# Decisão da arquitetura utilizada

Projeto foi baseado na estrutura do Atomic Design, sendo a escolha definida para dar escalabilidade (se necessário) e facilitar a legibilidade e testabilidade dos componentes.

No backend foi utilizado o Node, fornecendo as API's via Serverless (lambda functions), organizadas de acordo com o domínio da funcionalidade.

# Lista de bibliotecas de terceiros utilizadas

## Frontend:

* Axios
* Sass loader
* sweetalert2
* Vue
* Vuex
* Vue Router
* Vuetify
* Vue the mask
* Jest

## Backend

* Knex
* Mysql
* serverless-offline
* serverless-dotenv-plugin

# O que você melhoraria se tivesse mais tempo

* Injeção dos serviços de requisição de dados;
* Organização dos commits - ao fim optei por colocar em containers para 'facilitar' porém perdi a rastreabilidade.
* Caso houvessem mais visões, melhoraria a componentização - realizei para atender ao problema atual do teste.

# Quais requisitos obrigatórios que não foram entregues

* Acredito que todos foram entregues.
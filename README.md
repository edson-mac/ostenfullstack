# :computer: Osten Moove Fullstack :computer:



## :page_with_curl: Sobre

Esse projeto tem como objetivo construir uma aplicação CRUD Fullstack para cadastro de empresas.

<br />
<br />

Além de poder instalar e rodar o projeto localmente, você pode também acessar a
[<strong>versão online em um deploy realizado no Vercel</strong>](https://ostenfrontend.vercel.app/).


<br />
<br />


## :wrench: Stacks e bibliotecas utilizadas

* JavaScript
* React.js
* Tailwind.css
* Vite
* Sweet Alert
* Material UI
* Node.js
* Express.js
* MySQL

## :hammer_and_wrench: Instalação e execução


<details>
  <summary markdown="span"><strong>Rodando a aplicação localmente</strong></summary><br />

Para rodar está aplicação localmente é necessário ter **Git**, **Node** e o **MySQL** instalados e atualizados em seu computador.

Também é necessário que o seu sistema operacional tenha um **terminal Bash** instalado. Caso você esteja utilizando **Linux** ou **macOS**, o Bash já vem instalado por padrão. Porém, se o seu sistema for **Windows**, talvez você precise fazer [a instalação a parte](https://www.lifewire.com/install-bash-on-windows-10-4101773).

<details>
  <summary markdown="span"><strong> :hammer: Configurando o Back-end</strong></summary><br />
  
    
    1. Clone o repositório

  - Use o comando: `git clone git@github.com:edson-mac/ostenfullstack.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd ostenfullstack`
    
  2. Entre na pasta do Backend

  - `cd ostenbackend`

  3. Instale as dependências

  - `npm install`
    
  <summary markdown="span"><strong>Configurando o banco de dados e .env</strong></summary><br />
  
  O projeto vem configurado para rodar em um banco de dados MySQL, então é nessário instalar 
  MySQL em seu computador ou utilizar um servidor na nuvem, o arquivo para a criação da tabela
  está localizado na pasta `DATABASE` do backend. Após ter configurado seu banco, é necessário configurar
    as variáveis de ambiente:

### 1. Em um arquivo .env na raíz do repositório, adicione as configurações de seu banco MySQL:

```sh
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_PORT=
```

### 2. Nesse mesmo arquivo .env, a porta do Express desejada para rodar o servidor

```sh
PORT=
```
### 3. Por fim, após ter efetuado todas as configurações, rode o servidor utilizando este comando no diretório ostenbackend:
  
  - `npm start`

  
  </details>
  
   <details>
  <summary markdown="span"><strong> :sunrise: Configurando o Front-end</strong></summary><br />
  
    
    1. Acesse o repositório
  
  - Entre na pasta do repositório:
    - `cd ostenfullstack`
    
  2. Entre na pasta do Frontend

  - `cd ostenfrontend`

  3. Instale as dependências

  - `npm install`
    
  <summary markdown="span"><strong>Configurando variáveis de ambiente</strong></summary><br />
  
  O projeto Frontend vem configurado para fazer diversas requisições para uma API, o endereço vai mudar dependendo de como você rodar o projeto, por isso é necessário configurar
    as variáveis de ambiente:

### 1. Em um arquivo .env na raíz do repositório, adicione as configurações de seu endereço no API como no exemplo abaixo:

```sh
VITE_API_URL="https://ostenfullstack.vercel.app/companies"
```

### 3. Por fim, após ter efetuado todas as configurações, rode o servidor utilizando este comando no diretório ostenfrontend:
  
  - `npm start`

  
  </details>
  
 </details>
 
 ## :computer: Documentação e rotas da API:

 <summary markdown="span"><strong>Obtendo lista das empresas - GET /companies</strong></summary><br />
 <summary markdown="span"><strong>Excluindo uma empresa - DELETE /companies/ID</strong></summary><br />
 <summary markdown="span"><strong>Obtendo empresa por ID - GET /companies/ID</strong></summary><br />
 
<details>
  <summary markdown="span"><strong>Cadastrando uma empressa - POST /companies </strong></summary><br />
  
```sh
body = {
    "name": "Empresa Exemplo",
    "rua": "Rua B",
    "numero": "456",
    "bairro": "Bairro W",
    "cidade": "Cidade X",
    "estado": "Estado Z"
  }
```
</details>

<details>
  <summary markdown="span"><strong>Editando uma empressa por ID - PUT /companies/ID </strong></summary><br />
  
```sh
body = {
    "name": "Empresa Exemplo",
    "rua": "Rua B",
    "numero": "456",
    "bairro": "Bairro W",
    "cidade": "Cidade X",
    "estado": "Estado Z"
  }
```
</details>


 
 


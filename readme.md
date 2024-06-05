# Projeto Starlink: Guia de Configuração

Este guia passo a passo irá ajudá-lo a configurar e executar o projeto Starlink em sua máquina local.

## Clonar o Repositório do GitHub

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o seguinte comando para clonar o repositório:

```
git clone https://github.com/seu-usuario/project_startlink.git
```

## Acessar o Projeto

Navegue até o diretório do projeto recém-clonado:

```
cd project_startlink
```

## Instalar Dependências do Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

No terminal e na raíz do projeto: `/project_startlink`, execute o seguinte comando para instalar as dependências do projeto: 

```
npm install
```

## Criar o Banco de Dados MySQL

Certifique-se de ter o MySQL Workbench instalado e em execução em sua máquina.

Utilize o script SQL fornecido localizado em `db/db.sql` para criar o banco de dados e as tabelas necessárias

## Transferir o Arquivo de Conexão do Banco de Dados

Mova o arquivo `db_connection.js` para a raiz do projeto `/project_startlink`.

## Executar o Projeto

Após configurar o banco de dados e mover o arquivo de conexão, você pode iniciar o servidor da aplicação.

Execute o seguinte comando no terminal na raíz do projeto: `/project_startlink`:

```
node server.js
```

## Acessar a Aplicação

Abra um navegador da web e acesse o seguinte endereço:

[http://localhost:3000/pages/pageCreate.html](http://localhost:3000/pages/pageCreate.htmllocalhost:3000)

Agora você deverá estar pronto para explorar e interagir com o projeto Starlink localmente em sua máquina. Se tiver dúvidas ou encontrar problemas durante o processo, consulte a documentação fornecida ou entre em contato comigo.

---

Divirta-se explorando o projeto Starlink!

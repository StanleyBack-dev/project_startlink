CREATE SCHEMA `crud_starlink` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

USE crud_starlink;

CREATE TABLE tb_identificacao (
    idtb_identificacao INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco_residencial VARCHAR(255)
);

CREATE TABLE tb_conta (
    idtb_conta INT AUTO_INCREMENT PRIMARY KEY,
    idtb_identificacao INT,
    nome_usuario VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, 
    data_nascimento DATE,
    genero ENUM('Masculino', 'Feminino', 'Outro'),
    foto_perfil BLOB
);

CREATE TABLE tb_atividade_online (
    idtb_atividade_online INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    historico_navegacao TEXT,
    interesses_preferencias TEXT,
    compras_realizadas TEXT,
    paginas_visitadas TEXT,
    duracao_sessoes INT,
    cliques_anuncios INT
);

CREATE TABLE tb_localizacao (
    idtb_localizacao INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    localizacao_geografica VARCHAR(255),
    historico_locais TEXT
);

CREATE TABLE tb_informacoes_sociais (
    idtb_informacoes_sociais INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    interacoes_redes_sociais TEXT,
    lista_amigos_seguidores TEXT
);

CREATE TABLE tb_informacoes_pagamento (
    idtb_informacoes_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    cartao_credito_debito VARCHAR(20),
    historico_transacoes TEXT
);

CREATE TABLE tb_preferencias_configuracao (
    idtb_preferencias_configuracao INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    idioma_preferido VARCHAR(50),
    configuracoes_privacidade TEXT,
    preferencias_notificacao TEXT
);

CREATE TABLE tb_informacoes_tecnicas (
    idtb_informacoes_tecnicas INT AUTO_INCREMENT PRIMARY KEY,
    idtb_conta INT,
    tipo_dispositivo VARCHAR(50),
    sistema_operacional VARCHAR(50),
    navegador_aplicativo VARCHAR(50),
    endereco_ip VARCHAR(45)
);
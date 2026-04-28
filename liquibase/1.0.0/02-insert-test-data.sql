--liquibase formatted sql
--changeset guillaume:2
INSERT INTO test_table (name, description) VALUES
('Objet 1', 'Ceci est la description de l''objet 1'),
('Objet 2', 'Ceci est la description de l''objet 2'),
('Objet 3', 'Ceci est la description de l''objet 3');

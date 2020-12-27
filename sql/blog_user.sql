create table user
(
    id       int         not null
        primary key,
    username varchar(13) null,
    password varchar(20) null
);

INSERT INTO blog.user (id, username, password) VALUES (1, 'admin', '123456');
INSERT INTO blog.user (id, username, password) VALUES (2, 'qxq', 'qxq!@18368896650');
INSERT INTO blog.user (id, username, password) VALUES (3, 'demo', '0000');
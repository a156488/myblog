create table category
(
    id        int           not null
        primary key,
    name      varchar(20)   null,
    `index`   int default 0 null,
    thumbnail varchar(255)  null
);

INSERT INTO blog.category (id, name, `index`, thumbnail) VALUES (1, 'WEB前端', 3, '/static/images/web.jpg');
INSERT INTO blog.category (id, name, `index`, thumbnail) VALUES (2, 'PHP', 2, '/static/images/php.jpg');
INSERT INTO blog.category (id, name, `index`, thumbnail) VALUES (3, 'NodeJS', 1, '/static/images/node.jpg');
INSERT INTO blog.category (id, name, `index`, thumbnail) VALUES (4, 'Java', 0, '/static/images/Java.png');
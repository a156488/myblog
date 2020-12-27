create table tabs
(
    id         int auto_increment comment '编号'
        primary key,
    name       varchar(100) not null comment '标签名称',
    article_id int          not null comment '所属文章编号'
)
    comment '标签表' collate = utf8_unicode_ci;

INSERT INTO blog.tabs (id, name, article_id) VALUES (1, 'JavaScript', 1);
INSERT INTO blog.tabs (id, name, article_id) VALUES (2, 'web前端', 1);
INSERT INTO blog.tabs (id, name, article_id) VALUES (3, 'JS脚本', 1);
INSERT INTO blog.tabs (id, name, article_id) VALUES (4, 'CSS3', 2);
INSERT INTO blog.tabs (id, name, article_id) VALUES (5, 'web前端', 2);
INSERT INTO blog.tabs (id, name, article_id) VALUES (6, 'HTML5', 3);
INSERT INTO blog.tabs (id, name, article_id) VALUES (7, 'web前端', 3);
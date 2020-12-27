create table log
(
    id     int auto_increment comment '编号'
        primary key,
    handle varchar(50)                         not null comment '操作内容',
    time   timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '操作时间',
    ip     varchar(30)                         null comment '来源IP'
)
    comment '日志表' collate = utf8_unicode_ci;

INSERT INTO blog.log (id, handle, time, ip) VALUES (1, '登录', '2020-02-27 11:22:46', '114.235.246.154');
INSERT INTO blog.log (id, handle, time, ip) VALUES (2, '添加类目', '2020-02-06 16:11:50', '114.235.246.154');
INSERT INTO blog.log (id, handle, time, ip) VALUES (3, '添加博文', '2020-02-06 16:12:00', '114.235.246.154');
INSERT INTO blog.log (id, handle, time, ip) VALUES (4, '添加博文', '2020-02-27 11:22:21', '114.235.246.154');
INSERT INTO blog.log (id, handle, time, ip) VALUES (5, '登录', '2020-02-27 11:23:10', '49.81.173.95');
INSERT INTO blog.log (id, handle, time, ip) VALUES (6, '编辑博文', '2020-02-27 11:23:29', '49.81.173.95');
INSERT INTO blog.log (id, handle, time, ip) VALUES (7, '添加类目', '2020-02-27 11:23:47', '49.81.173.95');
INSERT INTO blog.log (id, handle, time, ip) VALUES (8, '添加博文', '2020-02-27 11:24:02', '49.81.173.95');
INSERT INTO blog.log (id, handle, time, ip) VALUES (9, '登录', '2020-03-04 01:00:04', '127.0.0.1');
INSERT INTO blog.log (id, handle, time, ip) VALUES (10, '登录', '2020-03-04 01:18:27', '127.0.0.1');
INSERT INTO blog.log (id, handle, time, ip) VALUES (11, '登录', '2020-03-04 01:25:39', '127.0.0.1');
INSERT INTO blog.log (id, handle, time, ip) VALUES (12, '登录', '2020-12-27 13:14:53', '127.0.0.1');
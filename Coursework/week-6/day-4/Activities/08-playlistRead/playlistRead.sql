drop database if exists playlist_db;

create database playlist_db;

use playlist_db;

create table fav_songs (
    id integer(10) auto_increment not null,
    Songs varchar(30) not null,
    Artist varchar(30) not null,
    Album varchar(30) not null,
    PRIMARY KEY (id)
)

select * from fav_songs;
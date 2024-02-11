comment on column "words"."words_lists"."word" is E'Join table for words & lists';
alter table "words"."words_lists" alter column "word" drop not null;
alter table "words"."words_lists" add column "word" citext;

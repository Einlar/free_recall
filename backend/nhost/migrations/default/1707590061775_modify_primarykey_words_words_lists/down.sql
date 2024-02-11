alter table "words"."words_lists" drop constraint "words_lists_pkey";
alter table "words"."words_lists"
    add constraint "words_lists_pkey"
    primary key ("list_id");

alter table "words"."words_lists"
  add constraint "words_lists_word_id_fkey"
  foreign key ("word_id")
  references "words"."words"
  ("id") on update cascade on delete cascade;

alter table "words"."words_lists"
  add constraint "words_lists_word_fkey"
  foreign key ("word")
  references "words"."words"
  ("word") on update cascade on delete cascade;

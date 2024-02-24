CREATE TABLE "words"."words_lists" ("list_id" uuid NOT NULL, "word" citext NOT NULL, PRIMARY KEY ("list_id","word") , FOREIGN KEY ("word") REFERENCES "words"."words"("word") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("list_id") REFERENCES "words"."lists"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "words"."words_lists" IS E'Join table for words & lists';
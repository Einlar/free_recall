BEGIN TRANSACTION;
ALTER TABLE "words"."words_lists" DROP CONSTRAINT "words_lists_pkey";

ALTER TABLE "words"."words_lists"
    ADD CONSTRAINT "words_lists_pkey" PRIMARY KEY ("list_id", "word_id");
COMMIT TRANSACTION;

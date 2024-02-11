CREATE VIEW "words"."lists_words_view" AS
SELECT list_id, words.* 
FROM "words"."words_lists" LEFT JOIN "words"."words" ON "words"."words_lists".word_id = "words"."words".id;

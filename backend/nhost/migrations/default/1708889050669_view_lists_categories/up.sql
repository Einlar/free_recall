CREATE OR REPLACE VIEW "words"."lists_categories" AS
SELECT DISTINCT ON (list_id, category) list_id, category FROM "words"."lists_words_view";

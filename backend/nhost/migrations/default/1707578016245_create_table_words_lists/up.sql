CREATE TABLE "words"."lists" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("type") REFERENCES "words"."list_types"("type") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "words"."lists" IS E'Lists of words that can be used in an experiment';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

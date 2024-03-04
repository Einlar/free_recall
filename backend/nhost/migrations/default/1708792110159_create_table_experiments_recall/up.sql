CREATE TABLE "experiments"."recall" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "source_list_id" uuid NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "words" text [] NOT NULL,
    "answers" jsonb,
    "completed_at" timestamptz,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("source_list_id") REFERENCES "words"."lists"("id") ON UPDATE cascade ON DELETE cascade
);

COMMENT ON TABLE "experiments"."recall" IS 'The recall phase of an experiment';

CREATE EXTENSION IF NOT EXISTS pgcrypto;
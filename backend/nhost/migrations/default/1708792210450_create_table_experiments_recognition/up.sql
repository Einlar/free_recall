CREATE TABLE "experiments"."recognition" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "source_list_id" uuid NOT NULL,
    "words" text [] NOT NULL,
    "distractors" text [] NOT NULL,
    "answers" jsonb,
    "completed_at" timestamptz,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("source_list_id") REFERENCES "words"."lists"("id") ON UPDATE cascade ON DELETE cascade
);

COMMENT ON TABLE "experiments"."recognition" IS E 'The recognition phase of an experiment';

CREATE EXTENSION IF NOT EXISTS pgcrypto;
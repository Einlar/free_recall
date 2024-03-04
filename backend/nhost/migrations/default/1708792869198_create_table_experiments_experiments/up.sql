CREATE TABLE "experiments"."experiments" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "subject_id" uuid NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "run_id" uuid NOT NULL,
    "list_type" text NOT NULL,
    "recall_id" uuid,
    "recognition_id" uuid,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON UPDATE cascade ON DELETE cascade,
    FOREIGN KEY ("run_id") REFERENCES "experiments"."run"("id") ON UPDATE cascade ON DELETE cascade,
    FOREIGN KEY ("list_type") REFERENCES "words"."list_types"("type") ON UPDATE cascade ON DELETE cascade,
    FOREIGN KEY ("recall_id") REFERENCES "experiments"."recall"("id") ON UPDATE cascade ON DELETE cascade,
    FOREIGN KEY ("recognition_id") REFERENCES "experiments"."recognition"("id") ON UPDATE cascade ON DELETE cascade,
    UNIQUE ("recall_id"),
    UNIQUE ("recognition_id")
);

COMMENT ON TABLE "experiments"."experiments" IS 'A full experiment performed by a subject';

CREATE EXTENSION IF NOT EXISTS pgcrypto;
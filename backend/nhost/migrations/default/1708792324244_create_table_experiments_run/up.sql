CREATE TABLE "experiments"."run" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "name" text NOT NULL,
    "lengths" integer [] NOT NULL,
    "run_list_type" text NOT NULL,
    PRIMARY KEY ("id")
);

COMMENT ON TABLE "experiments"."run" IS E 'An experiment run';

CREATE EXTENSION IF NOT EXISTS pgcrypto;
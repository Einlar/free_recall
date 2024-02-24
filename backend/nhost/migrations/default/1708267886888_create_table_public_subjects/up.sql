CREATE TABLE "public"."subjects" (
    "id" uuid NOT NULL,
    "age" integer NOT NULL,
    "gender" text NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE cascade
);

COMMENT ON TABLE "public"."subjects" IS E 'People taking part in the experiment';
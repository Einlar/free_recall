alter table
  "public"."subjects"
add
  constraint "subjects_gender_fkey" foreign key ("gender") references "public"."genders" ("gender") on update cascade on delete cascade;
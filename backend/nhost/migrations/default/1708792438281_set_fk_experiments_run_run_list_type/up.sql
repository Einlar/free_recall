alter table
  "experiments"."run"
add
  constraint "run_run_list_type_fkey" foreign key ("run_list_type") references "experiments"."run_list_types" ("type") on update cascade on delete cascade;
DELETE FROM
    "experiments"."run_list_types"
WHERE
    type IN (
        'only_categorized',
        'only_random',
        'categorized_or_random'
    );
/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  _eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _lte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _neq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** A full experiment performed by a subject */
export type Experiments_Experiments = {
  __typename?: 'experiments_experiments';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  list_type: Words_List_Types_Enum;
  /** An object relationship */
  recall?: Maybe<Experiments_Recall>;
  recall_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  recognition?: Maybe<Experiments_Recognition>;
  recognition_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  run: Experiments_Run;
  run_id: Scalars['uuid']['output'];
  /** An object relationship */
  subject: Subjects;
  subject_id: Scalars['uuid']['output'];
};

/** aggregated selection of "experiments.experiments" */
export type Experiments_Experiments_Aggregate = {
  __typename?: 'experiments_experiments_aggregate';
  aggregate?: Maybe<Experiments_Experiments_Aggregate_Fields>;
  nodes: Array<Experiments_Experiments>;
};

export type Experiments_Experiments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Experiments_Experiments_Aggregate_Bool_Exp_Count>;
};

export type Experiments_Experiments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Experiments_Experiments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "experiments.experiments" */
export type Experiments_Experiments_Aggregate_Fields = {
  __typename?: 'experiments_experiments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Experiments_Experiments_Max_Fields>;
  min?: Maybe<Experiments_Experiments_Min_Fields>;
};


/** aggregate fields of "experiments.experiments" */
export type Experiments_Experiments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "experiments.experiments" */
export type Experiments_Experiments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Experiments_Experiments_Max_Order_By>;
  min?: InputMaybe<Experiments_Experiments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "experiments.experiments" */
export type Experiments_Experiments_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Experiments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiments_Experiments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "experiments.experiments". All fields are combined with a logical 'AND'. */
export type Experiments_Experiments_Bool_Exp = {
  _and?: InputMaybe<Array<Experiments_Experiments_Bool_Exp>>;
  _not?: InputMaybe<Experiments_Experiments_Bool_Exp>;
  _or?: InputMaybe<Array<Experiments_Experiments_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  list_type?: InputMaybe<Words_List_Types_Enum_Comparison_Exp>;
  recall?: InputMaybe<Experiments_Recall_Bool_Exp>;
  recall_id?: InputMaybe<Uuid_Comparison_Exp>;
  recognition?: InputMaybe<Experiments_Recognition_Bool_Exp>;
  recognition_id?: InputMaybe<Uuid_Comparison_Exp>;
  run?: InputMaybe<Experiments_Run_Bool_Exp>;
  run_id?: InputMaybe<Uuid_Comparison_Exp>;
  subject?: InputMaybe<Subjects_Bool_Exp>;
  subject_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments.experiments" */
export enum Experiments_Experiments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExperimentsPkey = 'experiments_pkey',
  /** unique or primary key constraint on columns "recall_id" */
  ExperimentsRecallIdKey = 'experiments_recall_id_key',
  /** unique or primary key constraint on columns "recognition_id" */
  ExperimentsRecognitionIdKey = 'experiments_recognition_id_key'
}

/** input type for inserting data into table "experiments.experiments" */
export type Experiments_Experiments_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  list_type?: InputMaybe<Words_List_Types_Enum>;
  recall?: InputMaybe<Experiments_Recall_Obj_Rel_Insert_Input>;
  recall_id?: InputMaybe<Scalars['uuid']['input']>;
  recognition?: InputMaybe<Experiments_Recognition_Obj_Rel_Insert_Input>;
  recognition_id?: InputMaybe<Scalars['uuid']['input']>;
  run?: InputMaybe<Experiments_Run_Obj_Rel_Insert_Input>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  subject?: InputMaybe<Subjects_Obj_Rel_Insert_Input>;
  subject_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Experiments_Experiments_Max_Fields = {
  __typename?: 'experiments_experiments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  recall_id?: Maybe<Scalars['uuid']['output']>;
  recognition_id?: Maybe<Scalars['uuid']['output']>;
  run_id?: Maybe<Scalars['uuid']['output']>;
  subject_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "experiments.experiments" */
export type Experiments_Experiments_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recall_id?: InputMaybe<Order_By>;
  recognition_id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Experiments_Min_Fields = {
  __typename?: 'experiments_experiments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  recall_id?: Maybe<Scalars['uuid']['output']>;
  recognition_id?: Maybe<Scalars['uuid']['output']>;
  run_id?: Maybe<Scalars['uuid']['output']>;
  subject_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "experiments.experiments" */
export type Experiments_Experiments_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recall_id?: InputMaybe<Order_By>;
  recognition_id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "experiments.experiments" */
export type Experiments_Experiments_Mutation_Response = {
  __typename?: 'experiments_experiments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Experiments>;
};

/** input type for inserting object relation for remote table "experiments.experiments" */
export type Experiments_Experiments_Obj_Rel_Insert_Input = {
  data: Experiments_Experiments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiments_Experiments_On_Conflict>;
};

/** on_conflict condition type for table "experiments.experiments" */
export type Experiments_Experiments_On_Conflict = {
  constraint: Experiments_Experiments_Constraint;
  update_columns?: Array<Experiments_Experiments_Update_Column>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments.experiments". */
export type Experiments_Experiments_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_type?: InputMaybe<Order_By>;
  recall?: InputMaybe<Experiments_Recall_Order_By>;
  recall_id?: InputMaybe<Order_By>;
  recognition?: InputMaybe<Experiments_Recognition_Order_By>;
  recognition_id?: InputMaybe<Order_By>;
  run?: InputMaybe<Experiments_Run_Order_By>;
  run_id?: InputMaybe<Order_By>;
  subject?: InputMaybe<Subjects_Order_By>;
  subject_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiments.experiments */
export type Experiments_Experiments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "experiments.experiments" */
export enum Experiments_Experiments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListType = 'list_type',
  /** column name */
  RecallId = 'recall_id',
  /** column name */
  RecognitionId = 'recognition_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  SubjectId = 'subject_id'
}

/** input type for updating data in table "experiments.experiments" */
export type Experiments_Experiments_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  list_type?: InputMaybe<Words_List_Types_Enum>;
  recall_id?: InputMaybe<Scalars['uuid']['input']>;
  recognition_id?: InputMaybe<Scalars['uuid']['input']>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  subject_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "experiments_experiments" */
export type Experiments_Experiments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiments_Experiments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiments_Experiments_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  list_type?: InputMaybe<Words_List_Types_Enum>;
  recall_id?: InputMaybe<Scalars['uuid']['input']>;
  recognition_id?: InputMaybe<Scalars['uuid']['input']>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  subject_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "experiments.experiments" */
export enum Experiments_Experiments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListType = 'list_type',
  /** column name */
  RecallId = 'recall_id',
  /** column name */
  RecognitionId = 'recognition_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  SubjectId = 'subject_id'
}

export type Experiments_Experiments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiments_Experiments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiments_Experiments_Bool_Exp;
};

/** The recall phase of an experiment */
export type Experiments_Recall = {
  __typename?: 'experiments_recall';
  answers?: Maybe<Scalars['jsonb']['output']>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  experiment?: Maybe<Experiments_Experiments>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  list: Words_Lists;
  source_list_id: Scalars['uuid']['output'];
  words: Array<Scalars['String']['output']>;
};


/** The recall phase of an experiment */
export type Experiments_RecallAnswersArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "experiments.recall" */
export type Experiments_Recall_Aggregate = {
  __typename?: 'experiments_recall_aggregate';
  aggregate?: Maybe<Experiments_Recall_Aggregate_Fields>;
  nodes: Array<Experiments_Recall>;
};

/** aggregate fields of "experiments.recall" */
export type Experiments_Recall_Aggregate_Fields = {
  __typename?: 'experiments_recall_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Experiments_Recall_Max_Fields>;
  min?: Maybe<Experiments_Recall_Min_Fields>;
};


/** aggregate fields of "experiments.recall" */
export type Experiments_Recall_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiments_Recall_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Experiments_Recall_Append_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "experiments.recall". All fields are combined with a logical 'AND'. */
export type Experiments_Recall_Bool_Exp = {
  _and?: InputMaybe<Array<Experiments_Recall_Bool_Exp>>;
  _not?: InputMaybe<Experiments_Recall_Bool_Exp>;
  _or?: InputMaybe<Array<Experiments_Recall_Bool_Exp>>;
  answers?: InputMaybe<Jsonb_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  experiment?: InputMaybe<Experiments_Experiments_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  list?: InputMaybe<Words_Lists_Bool_Exp>;
  source_list_id?: InputMaybe<Uuid_Comparison_Exp>;
  words?: InputMaybe<String_Array_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments.recall" */
export enum Experiments_Recall_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecallPkey = 'recall_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Experiments_Recall_Delete_At_Path_Input = {
  answers?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Experiments_Recall_Delete_Elem_Input = {
  answers?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Experiments_Recall_Delete_Key_Input = {
  answers?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "experiments.recall" */
export type Experiments_Recall_Insert_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  experiment?: InputMaybe<Experiments_Experiments_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  list?: InputMaybe<Words_Lists_Obj_Rel_Insert_Input>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate max on columns */
export type Experiments_Recall_Max_Fields = {
  __typename?: 'experiments_recall_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  source_list_id?: Maybe<Scalars['uuid']['output']>;
  words?: Maybe<Array<Scalars['String']['output']>>;
};

/** aggregate min on columns */
export type Experiments_Recall_Min_Fields = {
  __typename?: 'experiments_recall_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  source_list_id?: Maybe<Scalars['uuid']['output']>;
  words?: Maybe<Array<Scalars['String']['output']>>;
};

/** response of any mutation on the table "experiments.recall" */
export type Experiments_Recall_Mutation_Response = {
  __typename?: 'experiments_recall_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Recall>;
};

/** input type for inserting object relation for remote table "experiments.recall" */
export type Experiments_Recall_Obj_Rel_Insert_Input = {
  data: Experiments_Recall_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiments_Recall_On_Conflict>;
};

/** on_conflict condition type for table "experiments.recall" */
export type Experiments_Recall_On_Conflict = {
  constraint: Experiments_Recall_Constraint;
  update_columns?: Array<Experiments_Recall_Update_Column>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments.recall". */
export type Experiments_Recall_Order_By = {
  answers?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  experiment?: InputMaybe<Experiments_Experiments_Order_By>;
  id?: InputMaybe<Order_By>;
  list?: InputMaybe<Words_Lists_Order_By>;
  source_list_id?: InputMaybe<Order_By>;
  words?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiments.recall */
export type Experiments_Recall_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Experiments_Recall_Prepend_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "experiments.recall" */
export enum Experiments_Recall_Select_Column {
  /** column name */
  Answers = 'answers',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SourceListId = 'source_list_id',
  /** column name */
  Words = 'words'
}

/** input type for updating data in table "experiments.recall" */
export type Experiments_Recall_Set_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Streaming cursor of the table "experiments_recall" */
export type Experiments_Recall_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiments_Recall_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiments_Recall_Stream_Cursor_Value_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** update columns of table "experiments.recall" */
export enum Experiments_Recall_Update_Column {
  /** column name */
  Answers = 'answers',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SourceListId = 'source_list_id',
  /** column name */
  Words = 'words'
}

export type Experiments_Recall_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Experiments_Recall_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Experiments_Recall_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Experiments_Recall_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Experiments_Recall_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Experiments_Recall_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiments_Recall_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiments_Recall_Bool_Exp;
};

/** The recognition phase of an experiment */
export type Experiments_Recognition = {
  __typename?: 'experiments_recognition';
  answers?: Maybe<Scalars['jsonb']['output']>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  distractors: Array<Scalars['String']['output']>;
  /** An object relationship */
  experiment?: Maybe<Experiments_Experiments>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  list: Words_Lists;
  source_list_id: Scalars['uuid']['output'];
  words: Array<Scalars['String']['output']>;
};


/** The recognition phase of an experiment */
export type Experiments_RecognitionAnswersArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "experiments.recognition" */
export type Experiments_Recognition_Aggregate = {
  __typename?: 'experiments_recognition_aggregate';
  aggregate?: Maybe<Experiments_Recognition_Aggregate_Fields>;
  nodes: Array<Experiments_Recognition>;
};

/** aggregate fields of "experiments.recognition" */
export type Experiments_Recognition_Aggregate_Fields = {
  __typename?: 'experiments_recognition_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Experiments_Recognition_Max_Fields>;
  min?: Maybe<Experiments_Recognition_Min_Fields>;
};


/** aggregate fields of "experiments.recognition" */
export type Experiments_Recognition_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiments_Recognition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Experiments_Recognition_Append_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "experiments.recognition". All fields are combined with a logical 'AND'. */
export type Experiments_Recognition_Bool_Exp = {
  _and?: InputMaybe<Array<Experiments_Recognition_Bool_Exp>>;
  _not?: InputMaybe<Experiments_Recognition_Bool_Exp>;
  _or?: InputMaybe<Array<Experiments_Recognition_Bool_Exp>>;
  answers?: InputMaybe<Jsonb_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  distractors?: InputMaybe<String_Array_Comparison_Exp>;
  experiment?: InputMaybe<Experiments_Experiments_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  list?: InputMaybe<Words_Lists_Bool_Exp>;
  source_list_id?: InputMaybe<Uuid_Comparison_Exp>;
  words?: InputMaybe<String_Array_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments.recognition" */
export enum Experiments_Recognition_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecognitionPkey = 'recognition_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Experiments_Recognition_Delete_At_Path_Input = {
  answers?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Experiments_Recognition_Delete_Elem_Input = {
  answers?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Experiments_Recognition_Delete_Key_Input = {
  answers?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "experiments.recognition" */
export type Experiments_Recognition_Insert_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  distractors?: InputMaybe<Array<Scalars['String']['input']>>;
  experiment?: InputMaybe<Experiments_Experiments_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  list?: InputMaybe<Words_Lists_Obj_Rel_Insert_Input>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate max on columns */
export type Experiments_Recognition_Max_Fields = {
  __typename?: 'experiments_recognition_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  distractors?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['uuid']['output']>;
  source_list_id?: Maybe<Scalars['uuid']['output']>;
  words?: Maybe<Array<Scalars['String']['output']>>;
};

/** aggregate min on columns */
export type Experiments_Recognition_Min_Fields = {
  __typename?: 'experiments_recognition_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  distractors?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['uuid']['output']>;
  source_list_id?: Maybe<Scalars['uuid']['output']>;
  words?: Maybe<Array<Scalars['String']['output']>>;
};

/** response of any mutation on the table "experiments.recognition" */
export type Experiments_Recognition_Mutation_Response = {
  __typename?: 'experiments_recognition_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Recognition>;
};

/** input type for inserting object relation for remote table "experiments.recognition" */
export type Experiments_Recognition_Obj_Rel_Insert_Input = {
  data: Experiments_Recognition_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiments_Recognition_On_Conflict>;
};

/** on_conflict condition type for table "experiments.recognition" */
export type Experiments_Recognition_On_Conflict = {
  constraint: Experiments_Recognition_Constraint;
  update_columns?: Array<Experiments_Recognition_Update_Column>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments.recognition". */
export type Experiments_Recognition_Order_By = {
  answers?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  distractors?: InputMaybe<Order_By>;
  experiment?: InputMaybe<Experiments_Experiments_Order_By>;
  id?: InputMaybe<Order_By>;
  list?: InputMaybe<Words_Lists_Order_By>;
  source_list_id?: InputMaybe<Order_By>;
  words?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiments.recognition */
export type Experiments_Recognition_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Experiments_Recognition_Prepend_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "experiments.recognition" */
export enum Experiments_Recognition_Select_Column {
  /** column name */
  Answers = 'answers',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Distractors = 'distractors',
  /** column name */
  Id = 'id',
  /** column name */
  SourceListId = 'source_list_id',
  /** column name */
  Words = 'words'
}

/** input type for updating data in table "experiments.recognition" */
export type Experiments_Recognition_Set_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  distractors?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Streaming cursor of the table "experiments_recognition" */
export type Experiments_Recognition_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiments_Recognition_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiments_Recognition_Stream_Cursor_Value_Input = {
  answers?: InputMaybe<Scalars['jsonb']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  distractors?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  source_list_id?: InputMaybe<Scalars['uuid']['input']>;
  words?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** update columns of table "experiments.recognition" */
export enum Experiments_Recognition_Update_Column {
  /** column name */
  Answers = 'answers',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Distractors = 'distractors',
  /** column name */
  Id = 'id',
  /** column name */
  SourceListId = 'source_list_id',
  /** column name */
  Words = 'words'
}

export type Experiments_Recognition_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Experiments_Recognition_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Experiments_Recognition_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Experiments_Recognition_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Experiments_Recognition_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Experiments_Recognition_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiments_Recognition_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiments_Recognition_Bool_Exp;
};

/** An experiment run */
export type Experiments_Run = {
  __typename?: 'experiments_run';
  /** Code for accessing the run */
  code: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  lengths: Array<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  run_list_type: Experiments_Run_List_Types_Enum;
};

/** aggregated selection of "experiments.run" */
export type Experiments_Run_Aggregate = {
  __typename?: 'experiments_run_aggregate';
  aggregate?: Maybe<Experiments_Run_Aggregate_Fields>;
  nodes: Array<Experiments_Run>;
};

/** aggregate fields of "experiments.run" */
export type Experiments_Run_Aggregate_Fields = {
  __typename?: 'experiments_run_aggregate_fields';
  avg?: Maybe<Experiments_Run_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Experiments_Run_Max_Fields>;
  min?: Maybe<Experiments_Run_Min_Fields>;
  stddev?: Maybe<Experiments_Run_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Run_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Run_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Run_Sum_Fields>;
  var_pop?: Maybe<Experiments_Run_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Run_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Run_Variance_Fields>;
};


/** aggregate fields of "experiments.run" */
export type Experiments_Run_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiments_Run_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Experiments_Run_Avg_Fields = {
  __typename?: 'experiments_run_avg_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "experiments.run". All fields are combined with a logical 'AND'. */
export type Experiments_Run_Bool_Exp = {
  _and?: InputMaybe<Array<Experiments_Run_Bool_Exp>>;
  _not?: InputMaybe<Experiments_Run_Bool_Exp>;
  _or?: InputMaybe<Array<Experiments_Run_Bool_Exp>>;
  code?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lengths?: InputMaybe<Int_Array_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  run_list_type?: InputMaybe<Experiments_Run_List_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments.run" */
export enum Experiments_Run_Constraint {
  /** unique or primary key constraint on columns "code" */
  RunCodeKey = 'run_code_key',
  /** unique or primary key constraint on columns "id" */
  RunPkey = 'run_pkey'
}

/** input type for incrementing numeric columns in table "experiments.run" */
export type Experiments_Run_Inc_Input = {
  /** Code for accessing the run */
  code?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "experiments.run" */
export type Experiments_Run_Insert_Input = {
  /** Code for accessing the run */
  code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lengths?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_list_type?: InputMaybe<Experiments_Run_List_Types_Enum>;
};

/** Types of experiment runs */
export type Experiments_Run_List_Types = {
  __typename?: 'experiments_run_list_types';
  type: Scalars['String']['output'];
};

/** aggregated selection of "experiments.run_list_types" */
export type Experiments_Run_List_Types_Aggregate = {
  __typename?: 'experiments_run_list_types_aggregate';
  aggregate?: Maybe<Experiments_Run_List_Types_Aggregate_Fields>;
  nodes: Array<Experiments_Run_List_Types>;
};

/** aggregate fields of "experiments.run_list_types" */
export type Experiments_Run_List_Types_Aggregate_Fields = {
  __typename?: 'experiments_run_list_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Experiments_Run_List_Types_Max_Fields>;
  min?: Maybe<Experiments_Run_List_Types_Min_Fields>;
};


/** aggregate fields of "experiments.run_list_types" */
export type Experiments_Run_List_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiments_Run_List_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "experiments.run_list_types". All fields are combined with a logical 'AND'. */
export type Experiments_Run_List_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Experiments_Run_List_Types_Bool_Exp>>;
  _not?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Experiments_Run_List_Types_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments.run_list_types" */
export enum Experiments_Run_List_Types_Constraint {
  /** unique or primary key constraint on columns "type" */
  RunListTypesPkey = 'run_list_types_pkey'
}

export enum Experiments_Run_List_Types_Enum {
  CategorizedOrRandom = 'categorized_or_random',
  OnlyCategorized = 'only_categorized',
  OnlyRandom = 'only_random'
}

/** Boolean expression to compare columns of type "experiments_run_list_types_enum". All fields are combined with logical 'AND'. */
export type Experiments_Run_List_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Experiments_Run_List_Types_Enum>;
  _in?: InputMaybe<Array<Experiments_Run_List_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Experiments_Run_List_Types_Enum>;
  _nin?: InputMaybe<Array<Experiments_Run_List_Types_Enum>>;
};

/** input type for inserting data into table "experiments.run_list_types" */
export type Experiments_Run_List_Types_Insert_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Experiments_Run_List_Types_Max_Fields = {
  __typename?: 'experiments_run_list_types_max_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Experiments_Run_List_Types_Min_Fields = {
  __typename?: 'experiments_run_list_types_min_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "experiments.run_list_types" */
export type Experiments_Run_List_Types_Mutation_Response = {
  __typename?: 'experiments_run_list_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Run_List_Types>;
};

/** on_conflict condition type for table "experiments.run_list_types" */
export type Experiments_Run_List_Types_On_Conflict = {
  constraint: Experiments_Run_List_Types_Constraint;
  update_columns?: Array<Experiments_Run_List_Types_Update_Column>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments.run_list_types". */
export type Experiments_Run_List_Types_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiments.run_list_types */
export type Experiments_Run_List_Types_Pk_Columns_Input = {
  type: Scalars['String']['input'];
};

/** select columns of table "experiments.run_list_types" */
export enum Experiments_Run_List_Types_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "experiments.run_list_types" */
export type Experiments_Run_List_Types_Set_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "experiments_run_list_types" */
export type Experiments_Run_List_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiments_Run_List_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiments_Run_List_Types_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "experiments.run_list_types" */
export enum Experiments_Run_List_Types_Update_Column {
  /** column name */
  Type = 'type'
}

export type Experiments_Run_List_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiments_Run_List_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiments_Run_List_Types_Bool_Exp;
};

/** aggregate max on columns */
export type Experiments_Run_Max_Fields = {
  __typename?: 'experiments_run_max_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lengths?: Maybe<Array<Scalars['Int']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Experiments_Run_Min_Fields = {
  __typename?: 'experiments_run_min_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lengths?: Maybe<Array<Scalars['Int']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "experiments.run" */
export type Experiments_Run_Mutation_Response = {
  __typename?: 'experiments_run_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Run>;
};

/** input type for inserting object relation for remote table "experiments.run" */
export type Experiments_Run_Obj_Rel_Insert_Input = {
  data: Experiments_Run_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiments_Run_On_Conflict>;
};

/** on_conflict condition type for table "experiments.run" */
export type Experiments_Run_On_Conflict = {
  constraint: Experiments_Run_Constraint;
  update_columns?: Array<Experiments_Run_Update_Column>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments.run". */
export type Experiments_Run_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lengths?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  run_list_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiments.run */
export type Experiments_Run_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "experiments.run" */
export enum Experiments_Run_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Lengths = 'lengths',
  /** column name */
  Name = 'name',
  /** column name */
  RunListType = 'run_list_type'
}

/** input type for updating data in table "experiments.run" */
export type Experiments_Run_Set_Input = {
  /** Code for accessing the run */
  code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lengths?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_list_type?: InputMaybe<Experiments_Run_List_Types_Enum>;
};

/** aggregate stddev on columns */
export type Experiments_Run_Stddev_Fields = {
  __typename?: 'experiments_run_stddev_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Run_Stddev_Pop_Fields = {
  __typename?: 'experiments_run_stddev_pop_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Run_Stddev_Samp_Fields = {
  __typename?: 'experiments_run_stddev_samp_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "experiments_run" */
export type Experiments_Run_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiments_Run_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiments_Run_Stream_Cursor_Value_Input = {
  /** Code for accessing the run */
  code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lengths?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_list_type?: InputMaybe<Experiments_Run_List_Types_Enum>;
};

/** aggregate sum on columns */
export type Experiments_Run_Sum_Fields = {
  __typename?: 'experiments_run_sum_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "experiments.run" */
export enum Experiments_Run_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Lengths = 'lengths',
  /** column name */
  Name = 'name',
  /** column name */
  RunListType = 'run_list_type'
}

export type Experiments_Run_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Experiments_Run_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiments_Run_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiments_Run_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Experiments_Run_Var_Pop_Fields = {
  __typename?: 'experiments_run_var_pop_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Experiments_Run_Var_Samp_Fields = {
  __typename?: 'experiments_run_var_samp_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Experiments_Run_Variance_Fields = {
  __typename?: 'experiments_run_variance_fields';
  /** Code for accessing the run */
  code?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Enum for gender values */
export type Genders = {
  __typename?: 'genders';
  gender: Scalars['String']['output'];
};

/** aggregated selection of "genders" */
export type Genders_Aggregate = {
  __typename?: 'genders_aggregate';
  aggregate?: Maybe<Genders_Aggregate_Fields>;
  nodes: Array<Genders>;
};

/** aggregate fields of "genders" */
export type Genders_Aggregate_Fields = {
  __typename?: 'genders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Genders_Max_Fields>;
  min?: Maybe<Genders_Min_Fields>;
};


/** aggregate fields of "genders" */
export type Genders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export type Genders_Bool_Exp = {
  _and?: InputMaybe<Array<Genders_Bool_Exp>>;
  _not?: InputMaybe<Genders_Bool_Exp>;
  _or?: InputMaybe<Array<Genders_Bool_Exp>>;
  gender?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint on columns "gender" */
  GendersPkey = 'genders_pkey'
}

export enum Genders_Enum {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

/** Boolean expression to compare columns of type "genders_enum". All fields are combined with logical 'AND'. */
export type Genders_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Genders_Enum>;
  _in?: InputMaybe<Array<Genders_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Genders_Enum>;
  _nin?: InputMaybe<Array<Genders_Enum>>;
};

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
  __typename?: 'genders_max_fields';
  gender?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
  __typename?: 'genders_min_fields';
  gender?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "genders" */
export type Genders_Mutation_Response = {
  __typename?: 'genders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Genders>;
};

/** on_conflict condition type for table "genders" */
export type Genders_On_Conflict = {
  constraint: Genders_Constraint;
  update_columns?: Array<Genders_Update_Column>;
  where?: InputMaybe<Genders_Bool_Exp>;
};

/** Ordering options when selecting data from "genders". */
export type Genders_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genders */
export type Genders_Pk_Columns_Input = {
  gender: Scalars['String']['input'];
};

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  Gender = 'gender'
}

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "genders" */
export type Genders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genders_Stream_Cursor_Value_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  Gender = 'gender'
}

export type Genders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genders_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "experiments.experiments" */
  delete_experiments_experiments?: Maybe<Experiments_Experiments_Mutation_Response>;
  /** delete single row from the table: "experiments.experiments" */
  delete_experiments_experiments_by_pk?: Maybe<Experiments_Experiments>;
  /** delete data from the table: "experiments.recall" */
  delete_experiments_recall?: Maybe<Experiments_Recall_Mutation_Response>;
  /** delete single row from the table: "experiments.recall" */
  delete_experiments_recall_by_pk?: Maybe<Experiments_Recall>;
  /** delete data from the table: "experiments.recognition" */
  delete_experiments_recognition?: Maybe<Experiments_Recognition_Mutation_Response>;
  /** delete single row from the table: "experiments.recognition" */
  delete_experiments_recognition_by_pk?: Maybe<Experiments_Recognition>;
  /** delete data from the table: "experiments.run" */
  delete_experiments_run?: Maybe<Experiments_Run_Mutation_Response>;
  /** delete single row from the table: "experiments.run" */
  delete_experiments_run_by_pk?: Maybe<Experiments_Run>;
  /** delete data from the table: "experiments.run_list_types" */
  delete_experiments_run_list_types?: Maybe<Experiments_Run_List_Types_Mutation_Response>;
  /** delete single row from the table: "experiments.run_list_types" */
  delete_experiments_run_list_types_by_pk?: Maybe<Experiments_Run_List_Types>;
  /** delete data from the table: "genders" */
  delete_genders?: Maybe<Genders_Mutation_Response>;
  /** delete single row from the table: "genders" */
  delete_genders_by_pk?: Maybe<Genders>;
  /** delete data from the table: "subjects" */
  delete_subjects?: Maybe<Subjects_Mutation_Response>;
  /** delete single row from the table: "subjects" */
  delete_subjects_by_pk?: Maybe<Subjects>;
  /** delete data from the table: "words.categories" */
  delete_words_categories?: Maybe<Words_Categories_Mutation_Response>;
  /** delete single row from the table: "words.categories" */
  delete_words_categories_by_pk?: Maybe<Words_Categories>;
  /** delete data from the table: "words.list_types" */
  delete_words_list_types?: Maybe<Words_List_Types_Mutation_Response>;
  /** delete single row from the table: "words.list_types" */
  delete_words_list_types_by_pk?: Maybe<Words_List_Types>;
  /** delete data from the table: "words.lists" */
  delete_words_lists?: Maybe<Words_Lists_Mutation_Response>;
  /** delete single row from the table: "words.lists" */
  delete_words_lists_by_pk?: Maybe<Words_Lists>;
  /** delete data from the table: "words.words" */
  delete_words_words?: Maybe<Words_Words_Mutation_Response>;
  /** delete single row from the table: "words.words" */
  delete_words_words_by_pk?: Maybe<Words_Words>;
  /** delete data from the table: "words.words_lists" */
  delete_words_words_lists?: Maybe<Words_Words_Lists_Mutation_Response>;
  /** delete single row from the table: "words.words_lists" */
  delete_words_words_lists_by_pk?: Maybe<Words_Words_Lists>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "experiments.experiments" */
  insert_experiments_experiments?: Maybe<Experiments_Experiments_Mutation_Response>;
  /** insert a single row into the table: "experiments.experiments" */
  insert_experiments_experiments_one?: Maybe<Experiments_Experiments>;
  /** insert data into the table: "experiments.recall" */
  insert_experiments_recall?: Maybe<Experiments_Recall_Mutation_Response>;
  /** insert a single row into the table: "experiments.recall" */
  insert_experiments_recall_one?: Maybe<Experiments_Recall>;
  /** insert data into the table: "experiments.recognition" */
  insert_experiments_recognition?: Maybe<Experiments_Recognition_Mutation_Response>;
  /** insert a single row into the table: "experiments.recognition" */
  insert_experiments_recognition_one?: Maybe<Experiments_Recognition>;
  /** insert data into the table: "experiments.run" */
  insert_experiments_run?: Maybe<Experiments_Run_Mutation_Response>;
  /** insert data into the table: "experiments.run_list_types" */
  insert_experiments_run_list_types?: Maybe<Experiments_Run_List_Types_Mutation_Response>;
  /** insert a single row into the table: "experiments.run_list_types" */
  insert_experiments_run_list_types_one?: Maybe<Experiments_Run_List_Types>;
  /** insert a single row into the table: "experiments.run" */
  insert_experiments_run_one?: Maybe<Experiments_Run>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert a single row into the table: "genders" */
  insert_genders_one?: Maybe<Genders>;
  /** insert data into the table: "subjects" */
  insert_subjects?: Maybe<Subjects_Mutation_Response>;
  /** insert a single row into the table: "subjects" */
  insert_subjects_one?: Maybe<Subjects>;
  /** insert data into the table: "words.categories" */
  insert_words_categories?: Maybe<Words_Categories_Mutation_Response>;
  /** insert a single row into the table: "words.categories" */
  insert_words_categories_one?: Maybe<Words_Categories>;
  /** insert data into the table: "words.list_types" */
  insert_words_list_types?: Maybe<Words_List_Types_Mutation_Response>;
  /** insert a single row into the table: "words.list_types" */
  insert_words_list_types_one?: Maybe<Words_List_Types>;
  /** insert data into the table: "words.lists" */
  insert_words_lists?: Maybe<Words_Lists_Mutation_Response>;
  /** insert a single row into the table: "words.lists" */
  insert_words_lists_one?: Maybe<Words_Lists>;
  /** insert data into the table: "words.words" */
  insert_words_words?: Maybe<Words_Words_Mutation_Response>;
  /** insert data into the table: "words.words_lists" */
  insert_words_words_lists?: Maybe<Words_Words_Lists_Mutation_Response>;
  /** insert a single row into the table: "words.words_lists" */
  insert_words_words_lists_one?: Maybe<Words_Words_Lists>;
  /** insert a single row into the table: "words.words" */
  insert_words_words_one?: Maybe<Words_Words>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "experiments.experiments" */
  update_experiments_experiments?: Maybe<Experiments_Experiments_Mutation_Response>;
  /** update single row of the table: "experiments.experiments" */
  update_experiments_experiments_by_pk?: Maybe<Experiments_Experiments>;
  /** update multiples rows of table: "experiments.experiments" */
  update_experiments_experiments_many?: Maybe<Array<Maybe<Experiments_Experiments_Mutation_Response>>>;
  /** update data of the table: "experiments.recall" */
  update_experiments_recall?: Maybe<Experiments_Recall_Mutation_Response>;
  /** update single row of the table: "experiments.recall" */
  update_experiments_recall_by_pk?: Maybe<Experiments_Recall>;
  /** update multiples rows of table: "experiments.recall" */
  update_experiments_recall_many?: Maybe<Array<Maybe<Experiments_Recall_Mutation_Response>>>;
  /** update data of the table: "experiments.recognition" */
  update_experiments_recognition?: Maybe<Experiments_Recognition_Mutation_Response>;
  /** update single row of the table: "experiments.recognition" */
  update_experiments_recognition_by_pk?: Maybe<Experiments_Recognition>;
  /** update multiples rows of table: "experiments.recognition" */
  update_experiments_recognition_many?: Maybe<Array<Maybe<Experiments_Recognition_Mutation_Response>>>;
  /** update data of the table: "experiments.run" */
  update_experiments_run?: Maybe<Experiments_Run_Mutation_Response>;
  /** update single row of the table: "experiments.run" */
  update_experiments_run_by_pk?: Maybe<Experiments_Run>;
  /** update data of the table: "experiments.run_list_types" */
  update_experiments_run_list_types?: Maybe<Experiments_Run_List_Types_Mutation_Response>;
  /** update single row of the table: "experiments.run_list_types" */
  update_experiments_run_list_types_by_pk?: Maybe<Experiments_Run_List_Types>;
  /** update multiples rows of table: "experiments.run_list_types" */
  update_experiments_run_list_types_many?: Maybe<Array<Maybe<Experiments_Run_List_Types_Mutation_Response>>>;
  /** update multiples rows of table: "experiments.run" */
  update_experiments_run_many?: Maybe<Array<Maybe<Experiments_Run_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "genders" */
  update_genders?: Maybe<Genders_Mutation_Response>;
  /** update single row of the table: "genders" */
  update_genders_by_pk?: Maybe<Genders>;
  /** update multiples rows of table: "genders" */
  update_genders_many?: Maybe<Array<Maybe<Genders_Mutation_Response>>>;
  /** update data of the table: "subjects" */
  update_subjects?: Maybe<Subjects_Mutation_Response>;
  /** update single row of the table: "subjects" */
  update_subjects_by_pk?: Maybe<Subjects>;
  /** update multiples rows of table: "subjects" */
  update_subjects_many?: Maybe<Array<Maybe<Subjects_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
  /** update data of the table: "words.categories" */
  update_words_categories?: Maybe<Words_Categories_Mutation_Response>;
  /** update single row of the table: "words.categories" */
  update_words_categories_by_pk?: Maybe<Words_Categories>;
  /** update multiples rows of table: "words.categories" */
  update_words_categories_many?: Maybe<Array<Maybe<Words_Categories_Mutation_Response>>>;
  /** update data of the table: "words.list_types" */
  update_words_list_types?: Maybe<Words_List_Types_Mutation_Response>;
  /** update single row of the table: "words.list_types" */
  update_words_list_types_by_pk?: Maybe<Words_List_Types>;
  /** update multiples rows of table: "words.list_types" */
  update_words_list_types_many?: Maybe<Array<Maybe<Words_List_Types_Mutation_Response>>>;
  /** update data of the table: "words.lists" */
  update_words_lists?: Maybe<Words_Lists_Mutation_Response>;
  /** update single row of the table: "words.lists" */
  update_words_lists_by_pk?: Maybe<Words_Lists>;
  /** update multiples rows of table: "words.lists" */
  update_words_lists_many?: Maybe<Array<Maybe<Words_Lists_Mutation_Response>>>;
  /** update data of the table: "words.words" */
  update_words_words?: Maybe<Words_Words_Mutation_Response>;
  /** update single row of the table: "words.words" */
  update_words_words_by_pk?: Maybe<Words_Words>;
  /** update data of the table: "words.words_lists" */
  update_words_words_lists?: Maybe<Words_Words_Lists_Mutation_Response>;
  /** update single row of the table: "words.words_lists" */
  update_words_words_lists_by_pk?: Maybe<Words_Words_Lists>;
  /** update multiples rows of table: "words.words_lists" */
  update_words_words_lists_many?: Maybe<Array<Maybe<Words_Words_Lists_Mutation_Response>>>;
  /** update multiples rows of table: "words.words" */
  update_words_words_many?: Maybe<Array<Maybe<Words_Words_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_ExperimentsArgs = {
  where: Experiments_Experiments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Experiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Experiments_RecallArgs = {
  where: Experiments_Recall_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Recall_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Experiments_RecognitionArgs = {
  where: Experiments_Recognition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Recognition_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Experiments_RunArgs = {
  where: Experiments_Run_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Run_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Run_List_TypesArgs = {
  where: Experiments_Run_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiments_Run_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genders_By_PkArgs = {
  gender: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubjectsArgs = {
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Words_CategoriesArgs = {
  where: Words_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_Categories_By_PkArgs = {
  category: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Words_List_TypesArgs = {
  where: Words_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Words_ListsArgs = {
  where: Words_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_Lists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Words_WordsArgs = {
  where: Words_Words_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_Words_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Words_Words_ListsArgs = {
  where: Words_Words_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_Words_Lists_By_PkArgs = {
  list_id: Scalars['uuid']['input'];
  word_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_ExperimentsArgs = {
  objects: Array<Experiments_Experiments_Insert_Input>;
  on_conflict?: InputMaybe<Experiments_Experiments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Experiments_OneArgs = {
  object: Experiments_Experiments_Insert_Input;
  on_conflict?: InputMaybe<Experiments_Experiments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_RecallArgs = {
  objects: Array<Experiments_Recall_Insert_Input>;
  on_conflict?: InputMaybe<Experiments_Recall_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Recall_OneArgs = {
  object: Experiments_Recall_Insert_Input;
  on_conflict?: InputMaybe<Experiments_Recall_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_RecognitionArgs = {
  objects: Array<Experiments_Recognition_Insert_Input>;
  on_conflict?: InputMaybe<Experiments_Recognition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Recognition_OneArgs = {
  object: Experiments_Recognition_Insert_Input;
  on_conflict?: InputMaybe<Experiments_Recognition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_RunArgs = {
  objects: Array<Experiments_Run_Insert_Input>;
  on_conflict?: InputMaybe<Experiments_Run_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Run_List_TypesArgs = {
  objects: Array<Experiments_Run_List_Types_Insert_Input>;
  on_conflict?: InputMaybe<Experiments_Run_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Run_List_Types_OneArgs = {
  object: Experiments_Run_List_Types_Insert_Input;
  on_conflict?: InputMaybe<Experiments_Run_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiments_Run_OneArgs = {
  object: Experiments_Run_Insert_Input;
  on_conflict?: InputMaybe<Experiments_Run_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GendersArgs = {
  objects: Array<Genders_Insert_Input>;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genders_OneArgs = {
  object: Genders_Insert_Input;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubjectsArgs = {
  objects: Array<Subjects_Insert_Input>;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subjects_OneArgs = {
  object: Subjects_Insert_Input;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_CategoriesArgs = {
  objects: Array<Words_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Words_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_Categories_OneArgs = {
  object: Words_Categories_Insert_Input;
  on_conflict?: InputMaybe<Words_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_List_TypesArgs = {
  objects: Array<Words_List_Types_Insert_Input>;
  on_conflict?: InputMaybe<Words_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_List_Types_OneArgs = {
  object: Words_List_Types_Insert_Input;
  on_conflict?: InputMaybe<Words_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_ListsArgs = {
  objects: Array<Words_Lists_Insert_Input>;
  on_conflict?: InputMaybe<Words_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_Lists_OneArgs = {
  object: Words_Lists_Insert_Input;
  on_conflict?: InputMaybe<Words_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_WordsArgs = {
  objects: Array<Words_Words_Insert_Input>;
  on_conflict?: InputMaybe<Words_Words_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_Words_ListsArgs = {
  objects: Array<Words_Words_Lists_Insert_Input>;
  on_conflict?: InputMaybe<Words_Words_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_Words_Lists_OneArgs = {
  object: Words_Words_Lists_Insert_Input;
  on_conflict?: InputMaybe<Words_Words_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_Words_OneArgs = {
  object: Words_Words_Insert_Input;
  on_conflict?: InputMaybe<Words_Words_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_ExperimentsArgs = {
  _set?: InputMaybe<Experiments_Experiments_Set_Input>;
  where: Experiments_Experiments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiments_By_PkArgs = {
  _set?: InputMaybe<Experiments_Experiments_Set_Input>;
  pk_columns: Experiments_Experiments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiments_ManyArgs = {
  updates: Array<Experiments_Experiments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_RecallArgs = {
  _append?: InputMaybe<Experiments_Recall_Append_Input>;
  _delete_at_path?: InputMaybe<Experiments_Recall_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Experiments_Recall_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Experiments_Recall_Delete_Key_Input>;
  _prepend?: InputMaybe<Experiments_Recall_Prepend_Input>;
  _set?: InputMaybe<Experiments_Recall_Set_Input>;
  where: Experiments_Recall_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Recall_By_PkArgs = {
  _append?: InputMaybe<Experiments_Recall_Append_Input>;
  _delete_at_path?: InputMaybe<Experiments_Recall_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Experiments_Recall_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Experiments_Recall_Delete_Key_Input>;
  _prepend?: InputMaybe<Experiments_Recall_Prepend_Input>;
  _set?: InputMaybe<Experiments_Recall_Set_Input>;
  pk_columns: Experiments_Recall_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Recall_ManyArgs = {
  updates: Array<Experiments_Recall_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_RecognitionArgs = {
  _append?: InputMaybe<Experiments_Recognition_Append_Input>;
  _delete_at_path?: InputMaybe<Experiments_Recognition_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Experiments_Recognition_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Experiments_Recognition_Delete_Key_Input>;
  _prepend?: InputMaybe<Experiments_Recognition_Prepend_Input>;
  _set?: InputMaybe<Experiments_Recognition_Set_Input>;
  where: Experiments_Recognition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Recognition_By_PkArgs = {
  _append?: InputMaybe<Experiments_Recognition_Append_Input>;
  _delete_at_path?: InputMaybe<Experiments_Recognition_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Experiments_Recognition_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Experiments_Recognition_Delete_Key_Input>;
  _prepend?: InputMaybe<Experiments_Recognition_Prepend_Input>;
  _set?: InputMaybe<Experiments_Recognition_Set_Input>;
  pk_columns: Experiments_Recognition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Recognition_ManyArgs = {
  updates: Array<Experiments_Recognition_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_RunArgs = {
  _inc?: InputMaybe<Experiments_Run_Inc_Input>;
  _set?: InputMaybe<Experiments_Run_Set_Input>;
  where: Experiments_Run_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Run_By_PkArgs = {
  _inc?: InputMaybe<Experiments_Run_Inc_Input>;
  _set?: InputMaybe<Experiments_Run_Set_Input>;
  pk_columns: Experiments_Run_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Run_List_TypesArgs = {
  _set?: InputMaybe<Experiments_Run_List_Types_Set_Input>;
  where: Experiments_Run_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Run_List_Types_By_PkArgs = {
  _set?: InputMaybe<Experiments_Run_List_Types_Set_Input>;
  pk_columns: Experiments_Run_List_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Run_List_Types_ManyArgs = {
  updates: Array<Experiments_Run_List_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experiments_Run_ManyArgs = {
  updates: Array<Experiments_Run_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GendersArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_By_PkArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  pk_columns: Genders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_ManyArgs = {
  updates: Array<Genders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubjectsArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subjects_By_PkArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  pk_columns: Subjects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subjects_ManyArgs = {
  updates: Array<Subjects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Words_CategoriesArgs = {
  _set?: InputMaybe<Words_Categories_Set_Input>;
  where: Words_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Categories_By_PkArgs = {
  _set?: InputMaybe<Words_Categories_Set_Input>;
  pk_columns: Words_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Categories_ManyArgs = {
  updates: Array<Words_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Words_List_TypesArgs = {
  _set?: InputMaybe<Words_List_Types_Set_Input>;
  where: Words_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_List_Types_By_PkArgs = {
  _set?: InputMaybe<Words_List_Types_Set_Input>;
  pk_columns: Words_List_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Words_List_Types_ManyArgs = {
  updates: Array<Words_List_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Words_ListsArgs = {
  _set?: InputMaybe<Words_Lists_Set_Input>;
  where: Words_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Lists_By_PkArgs = {
  _set?: InputMaybe<Words_Lists_Set_Input>;
  pk_columns: Words_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Lists_ManyArgs = {
  updates: Array<Words_Lists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Words_WordsArgs = {
  _inc?: InputMaybe<Words_Words_Inc_Input>;
  _set?: InputMaybe<Words_Words_Set_Input>;
  where: Words_Words_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Words_By_PkArgs = {
  _inc?: InputMaybe<Words_Words_Inc_Input>;
  _set?: InputMaybe<Words_Words_Set_Input>;
  pk_columns: Words_Words_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Words_ListsArgs = {
  _inc?: InputMaybe<Words_Words_Lists_Inc_Input>;
  _set?: InputMaybe<Words_Words_Lists_Set_Input>;
  where: Words_Words_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Words_Lists_By_PkArgs = {
  _inc?: InputMaybe<Words_Words_Lists_Inc_Input>;
  _set?: InputMaybe<Words_Words_Lists_Set_Input>;
  pk_columns: Words_Words_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Words_Lists_ManyArgs = {
  updates: Array<Words_Words_Lists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Words_Words_ManyArgs = {
  updates: Array<Words_Words_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "experiments.experiments" */
  experiments_experiments: Array<Experiments_Experiments>;
  /** fetch aggregated fields from the table: "experiments.experiments" */
  experiments_experiments_aggregate: Experiments_Experiments_Aggregate;
  /** fetch data from the table: "experiments.experiments" using primary key columns */
  experiments_experiments_by_pk?: Maybe<Experiments_Experiments>;
  /** fetch data from the table: "experiments.recall" */
  experiments_recall: Array<Experiments_Recall>;
  /** fetch aggregated fields from the table: "experiments.recall" */
  experiments_recall_aggregate: Experiments_Recall_Aggregate;
  /** fetch data from the table: "experiments.recall" using primary key columns */
  experiments_recall_by_pk?: Maybe<Experiments_Recall>;
  /** fetch data from the table: "experiments.recognition" */
  experiments_recognition: Array<Experiments_Recognition>;
  /** fetch aggregated fields from the table: "experiments.recognition" */
  experiments_recognition_aggregate: Experiments_Recognition_Aggregate;
  /** fetch data from the table: "experiments.recognition" using primary key columns */
  experiments_recognition_by_pk?: Maybe<Experiments_Recognition>;
  /** fetch data from the table: "experiments.run" */
  experiments_run: Array<Experiments_Run>;
  /** fetch aggregated fields from the table: "experiments.run" */
  experiments_run_aggregate: Experiments_Run_Aggregate;
  /** fetch data from the table: "experiments.run" using primary key columns */
  experiments_run_by_pk?: Maybe<Experiments_Run>;
  /** fetch data from the table: "experiments.run_list_types" */
  experiments_run_list_types: Array<Experiments_Run_List_Types>;
  /** fetch aggregated fields from the table: "experiments.run_list_types" */
  experiments_run_list_types_aggregate: Experiments_Run_List_Types_Aggregate;
  /** fetch data from the table: "experiments.run_list_types" using primary key columns */
  experiments_run_list_types_by_pk?: Maybe<Experiments_Run_List_Types>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
  /** fetch data from the table: "words.categories" */
  words_categories: Array<Words_Categories>;
  /** fetch aggregated fields from the table: "words.categories" */
  words_categories_aggregate: Words_Categories_Aggregate;
  /** fetch data from the table: "words.categories" using primary key columns */
  words_categories_by_pk?: Maybe<Words_Categories>;
  /** fetch data from the table: "words.list_types" */
  words_list_types: Array<Words_List_Types>;
  /** fetch aggregated fields from the table: "words.list_types" */
  words_list_types_aggregate: Words_List_Types_Aggregate;
  /** fetch data from the table: "words.list_types" using primary key columns */
  words_list_types_by_pk?: Maybe<Words_List_Types>;
  /** fetch data from the table: "words.lists" */
  words_lists: Array<Words_Lists>;
  /** fetch aggregated fields from the table: "words.lists" */
  words_lists_aggregate: Words_Lists_Aggregate;
  /** fetch data from the table: "words.lists" using primary key columns */
  words_lists_by_pk?: Maybe<Words_Lists>;
  /** fetch data from the table: "words.lists_categories" */
  words_lists_categories: Array<Words_Lists_Categories>;
  /** fetch aggregated fields from the table: "words.lists_categories" */
  words_lists_categories_aggregate: Words_Lists_Categories_Aggregate;
  /** fetch data from the table: "words.lists_words_view" */
  words_lists_words_view: Array<Words_Lists_Words_View>;
  /** fetch aggregated fields from the table: "words.lists_words_view" */
  words_lists_words_view_aggregate: Words_Lists_Words_View_Aggregate;
  /** fetch data from the table: "words.words" */
  words_words: Array<Words_Words>;
  /** fetch aggregated fields from the table: "words.words" */
  words_words_aggregate: Words_Words_Aggregate;
  /** fetch data from the table: "words.words" using primary key columns */
  words_words_by_pk?: Maybe<Words_Words>;
  /** fetch data from the table: "words.words_lists" */
  words_words_lists: Array<Words_Words_Lists>;
  /** fetch aggregated fields from the table: "words.words_lists" */
  words_words_lists_aggregate: Words_Words_Lists_Aggregate;
  /** fetch data from the table: "words.words_lists" using primary key columns */
  words_words_lists_by_pk?: Maybe<Words_Words_Lists>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootExperiments_ExperimentsArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


export type Query_RootExperiments_Experiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


export type Query_RootExperiments_Experiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExperiments_RecallArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recall_Order_By>>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};


export type Query_RootExperiments_Recall_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recall_Order_By>>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};


export type Query_RootExperiments_Recall_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExperiments_RecognitionArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recognition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recognition_Order_By>>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};


export type Query_RootExperiments_Recognition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recognition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recognition_Order_By>>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};


export type Query_RootExperiments_Recognition_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExperiments_RunArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_Order_By>>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};


export type Query_RootExperiments_Run_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_Order_By>>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};


export type Query_RootExperiments_Run_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExperiments_Run_List_TypesArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_List_Types_Order_By>>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};


export type Query_RootExperiments_Run_List_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_List_Types_Order_By>>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};


export type Query_RootExperiments_Run_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_By_PkArgs = {
  gender: Scalars['String']['input'];
};


export type Query_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootWords_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Words_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Categories_Order_By>>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};


export type Query_RootWords_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Categories_Order_By>>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};


export type Query_RootWords_Categories_By_PkArgs = {
  category: Scalars['String']['input'];
};


export type Query_RootWords_List_TypesArgs = {
  distinct_on?: InputMaybe<Array<Words_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_List_Types_Order_By>>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};


export type Query_RootWords_List_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_List_Types_Order_By>>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};


export type Query_RootWords_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootWords_ListsArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};


export type Query_RootWords_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};


export type Query_RootWords_Lists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWords_Lists_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


export type Query_RootWords_Lists_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


export type Query_RootWords_Lists_Words_ViewArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


export type Query_RootWords_Lists_Words_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


export type Query_RootWords_WordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Order_By>>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};


export type Query_RootWords_Words_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Order_By>>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};


export type Query_RootWords_Words_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootWords_Words_ListsArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


export type Query_RootWords_Words_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


export type Query_RootWords_Words_Lists_By_PkArgs = {
  list_id: Scalars['uuid']['input'];
  word_id: Scalars['Int']['input'];
};

/** People taking part in the experiment */
export type Subjects = {
  __typename?: 'subjects';
  age: Scalars['Int']['output'];
  /** An array relationship */
  experiments: Array<Experiments_Experiments>;
  /** An aggregate relationship */
  experiments_aggregate: Experiments_Experiments_Aggregate;
  gender: Genders_Enum;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
};


/** People taking part in the experiment */
export type SubjectsExperimentsArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


/** People taking part in the experiment */
export type SubjectsExperiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};

/** aggregated selection of "subjects" */
export type Subjects_Aggregate = {
  __typename?: 'subjects_aggregate';
  aggregate?: Maybe<Subjects_Aggregate_Fields>;
  nodes: Array<Subjects>;
};

/** aggregate fields of "subjects" */
export type Subjects_Aggregate_Fields = {
  __typename?: 'subjects_aggregate_fields';
  avg?: Maybe<Subjects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subjects_Max_Fields>;
  min?: Maybe<Subjects_Min_Fields>;
  stddev?: Maybe<Subjects_Stddev_Fields>;
  stddev_pop?: Maybe<Subjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subjects_Stddev_Samp_Fields>;
  sum?: Maybe<Subjects_Sum_Fields>;
  var_pop?: Maybe<Subjects_Var_Pop_Fields>;
  var_samp?: Maybe<Subjects_Var_Samp_Fields>;
  variance?: Maybe<Subjects_Variance_Fields>;
};


/** aggregate fields of "subjects" */
export type Subjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Subjects_Avg_Fields = {
  __typename?: 'subjects_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "subjects". All fields are combined with a logical 'AND'. */
export type Subjects_Bool_Exp = {
  _and?: InputMaybe<Array<Subjects_Bool_Exp>>;
  _not?: InputMaybe<Subjects_Bool_Exp>;
  _or?: InputMaybe<Array<Subjects_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  experiments?: InputMaybe<Experiments_Experiments_Bool_Exp>;
  experiments_aggregate?: InputMaybe<Experiments_Experiments_Aggregate_Bool_Exp>;
  gender?: InputMaybe<Genders_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "subjects" */
export enum Subjects_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubjectsPkey = 'subjects_pkey'
}

/** input type for incrementing numeric columns in table "subjects" */
export type Subjects_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "subjects" */
export type Subjects_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  experiments?: InputMaybe<Experiments_Experiments_Arr_Rel_Insert_Input>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subjects_Max_Fields = {
  __typename?: 'subjects_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Subjects_Min_Fields = {
  __typename?: 'subjects_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "subjects" */
export type Subjects_Mutation_Response = {
  __typename?: 'subjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subjects>;
};

/** input type for inserting object relation for remote table "subjects" */
export type Subjects_Obj_Rel_Insert_Input = {
  data: Subjects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};

/** on_conflict condition type for table "subjects" */
export type Subjects_On_Conflict = {
  constraint: Subjects_Constraint;
  update_columns?: Array<Subjects_Update_Column>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};

/** Ordering options when selecting data from "subjects". */
export type Subjects_Order_By = {
  age?: InputMaybe<Order_By>;
  experiments_aggregate?: InputMaybe<Experiments_Experiments_Aggregate_Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: subjects */
export type Subjects_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "subjects" */
export enum Subjects_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "subjects" */
export type Subjects_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Subjects_Stddev_Fields = {
  __typename?: 'subjects_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Subjects_Stddev_Pop_Fields = {
  __typename?: 'subjects_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Subjects_Stddev_Samp_Fields = {
  __typename?: 'subjects_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "subjects" */
export type Subjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subjects_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Subjects_Sum_Fields = {
  __typename?: 'subjects_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "subjects" */
export enum Subjects_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id'
}

export type Subjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subjects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subjects_Var_Pop_Fields = {
  __typename?: 'subjects_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Subjects_Var_Samp_Fields = {
  __typename?: 'subjects_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Subjects_Variance_Fields = {
  __typename?: 'subjects_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "experiments.experiments" */
  experiments_experiments: Array<Experiments_Experiments>;
  /** fetch aggregated fields from the table: "experiments.experiments" */
  experiments_experiments_aggregate: Experiments_Experiments_Aggregate;
  /** fetch data from the table: "experiments.experiments" using primary key columns */
  experiments_experiments_by_pk?: Maybe<Experiments_Experiments>;
  /** fetch data from the table in a streaming manner: "experiments.experiments" */
  experiments_experiments_stream: Array<Experiments_Experiments>;
  /** fetch data from the table: "experiments.recall" */
  experiments_recall: Array<Experiments_Recall>;
  /** fetch aggregated fields from the table: "experiments.recall" */
  experiments_recall_aggregate: Experiments_Recall_Aggregate;
  /** fetch data from the table: "experiments.recall" using primary key columns */
  experiments_recall_by_pk?: Maybe<Experiments_Recall>;
  /** fetch data from the table in a streaming manner: "experiments.recall" */
  experiments_recall_stream: Array<Experiments_Recall>;
  /** fetch data from the table: "experiments.recognition" */
  experiments_recognition: Array<Experiments_Recognition>;
  /** fetch aggregated fields from the table: "experiments.recognition" */
  experiments_recognition_aggregate: Experiments_Recognition_Aggregate;
  /** fetch data from the table: "experiments.recognition" using primary key columns */
  experiments_recognition_by_pk?: Maybe<Experiments_Recognition>;
  /** fetch data from the table in a streaming manner: "experiments.recognition" */
  experiments_recognition_stream: Array<Experiments_Recognition>;
  /** fetch data from the table: "experiments.run" */
  experiments_run: Array<Experiments_Run>;
  /** fetch aggregated fields from the table: "experiments.run" */
  experiments_run_aggregate: Experiments_Run_Aggregate;
  /** fetch data from the table: "experiments.run" using primary key columns */
  experiments_run_by_pk?: Maybe<Experiments_Run>;
  /** fetch data from the table: "experiments.run_list_types" */
  experiments_run_list_types: Array<Experiments_Run_List_Types>;
  /** fetch aggregated fields from the table: "experiments.run_list_types" */
  experiments_run_list_types_aggregate: Experiments_Run_List_Types_Aggregate;
  /** fetch data from the table: "experiments.run_list_types" using primary key columns */
  experiments_run_list_types_by_pk?: Maybe<Experiments_Run_List_Types>;
  /** fetch data from the table in a streaming manner: "experiments.run_list_types" */
  experiments_run_list_types_stream: Array<Experiments_Run_List_Types>;
  /** fetch data from the table in a streaming manner: "experiments.run" */
  experiments_run_stream: Array<Experiments_Run>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table in a streaming manner: "genders" */
  genders_stream: Array<Genders>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table in a streaming manner: "subjects" */
  subjects_stream: Array<Subjects>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
  /** fetch data from the table: "words.categories" */
  words_categories: Array<Words_Categories>;
  /** fetch aggregated fields from the table: "words.categories" */
  words_categories_aggregate: Words_Categories_Aggregate;
  /** fetch data from the table: "words.categories" using primary key columns */
  words_categories_by_pk?: Maybe<Words_Categories>;
  /** fetch data from the table in a streaming manner: "words.categories" */
  words_categories_stream: Array<Words_Categories>;
  /** fetch data from the table: "words.list_types" */
  words_list_types: Array<Words_List_Types>;
  /** fetch aggregated fields from the table: "words.list_types" */
  words_list_types_aggregate: Words_List_Types_Aggregate;
  /** fetch data from the table: "words.list_types" using primary key columns */
  words_list_types_by_pk?: Maybe<Words_List_Types>;
  /** fetch data from the table in a streaming manner: "words.list_types" */
  words_list_types_stream: Array<Words_List_Types>;
  /** fetch data from the table: "words.lists" */
  words_lists: Array<Words_Lists>;
  /** fetch aggregated fields from the table: "words.lists" */
  words_lists_aggregate: Words_Lists_Aggregate;
  /** fetch data from the table: "words.lists" using primary key columns */
  words_lists_by_pk?: Maybe<Words_Lists>;
  /** fetch data from the table: "words.lists_categories" */
  words_lists_categories: Array<Words_Lists_Categories>;
  /** fetch aggregated fields from the table: "words.lists_categories" */
  words_lists_categories_aggregate: Words_Lists_Categories_Aggregate;
  /** fetch data from the table in a streaming manner: "words.lists_categories" */
  words_lists_categories_stream: Array<Words_Lists_Categories>;
  /** fetch data from the table in a streaming manner: "words.lists" */
  words_lists_stream: Array<Words_Lists>;
  /** fetch data from the table: "words.lists_words_view" */
  words_lists_words_view: Array<Words_Lists_Words_View>;
  /** fetch aggregated fields from the table: "words.lists_words_view" */
  words_lists_words_view_aggregate: Words_Lists_Words_View_Aggregate;
  /** fetch data from the table in a streaming manner: "words.lists_words_view" */
  words_lists_words_view_stream: Array<Words_Lists_Words_View>;
  /** fetch data from the table: "words.words" */
  words_words: Array<Words_Words>;
  /** fetch aggregated fields from the table: "words.words" */
  words_words_aggregate: Words_Words_Aggregate;
  /** fetch data from the table: "words.words" using primary key columns */
  words_words_by_pk?: Maybe<Words_Words>;
  /** fetch data from the table: "words.words_lists" */
  words_words_lists: Array<Words_Words_Lists>;
  /** fetch aggregated fields from the table: "words.words_lists" */
  words_words_lists_aggregate: Words_Words_Lists_Aggregate;
  /** fetch data from the table: "words.words_lists" using primary key columns */
  words_words_lists_by_pk?: Maybe<Words_Words_Lists>;
  /** fetch data from the table in a streaming manner: "words.words_lists" */
  words_words_lists_stream: Array<Words_Words_Lists>;
  /** fetch data from the table in a streaming manner: "words.words" */
  words_words_stream: Array<Words_Words>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootExperiments_ExperimentsArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


export type Subscription_RootExperiments_Experiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Experiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Experiments_Order_By>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


export type Subscription_RootExperiments_Experiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExperiments_Experiments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Experiments_Experiments_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiments_Experiments_Bool_Exp>;
};


export type Subscription_RootExperiments_RecallArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recall_Order_By>>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};


export type Subscription_RootExperiments_Recall_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recall_Order_By>>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};


export type Subscription_RootExperiments_Recall_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExperiments_Recall_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Experiments_Recall_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiments_Recall_Bool_Exp>;
};


export type Subscription_RootExperiments_RecognitionArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recognition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recognition_Order_By>>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};


export type Subscription_RootExperiments_Recognition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Recognition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Recognition_Order_By>>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};


export type Subscription_RootExperiments_Recognition_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExperiments_Recognition_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Experiments_Recognition_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiments_Recognition_Bool_Exp>;
};


export type Subscription_RootExperiments_RunArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_Order_By>>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};


export type Subscription_RootExperiments_Run_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_Order_By>>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};


export type Subscription_RootExperiments_Run_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExperiments_Run_List_TypesArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_List_Types_Order_By>>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};


export type Subscription_RootExperiments_Run_List_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiments_Run_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Experiments_Run_List_Types_Order_By>>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};


export type Subscription_RootExperiments_Run_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootExperiments_Run_List_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Experiments_Run_List_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiments_Run_List_Types_Bool_Exp>;
};


export type Subscription_RootExperiments_Run_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Experiments_Run_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiments_Run_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_By_PkArgs = {
  gender: Scalars['String']['input'];
};


export type Subscription_RootGenders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genders_Stream_Cursor_Input>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSubjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subjects_Stream_Cursor_Input>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootWords_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Words_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Categories_Order_By>>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};


export type Subscription_RootWords_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Categories_Order_By>>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};


export type Subscription_RootWords_Categories_By_PkArgs = {
  category: Scalars['String']['input'];
};


export type Subscription_RootWords_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};


export type Subscription_RootWords_List_TypesArgs = {
  distinct_on?: InputMaybe<Array<Words_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_List_Types_Order_By>>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};


export type Subscription_RootWords_List_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_List_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_List_Types_Order_By>>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};


export type Subscription_RootWords_List_Types_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootWords_List_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_List_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};


export type Subscription_RootWords_ListsArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Lists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWords_Lists_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


export type Subscription_RootWords_Lists_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


export type Subscription_RootWords_Lists_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Lists_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


export type Subscription_RootWords_Lists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Lists_Words_ViewArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


export type Subscription_RootWords_Lists_Words_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


export type Subscription_RootWords_Lists_Words_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Lists_Words_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


export type Subscription_RootWords_WordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Order_By>>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};


export type Subscription_RootWords_Words_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Order_By>>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};


export type Subscription_RootWords_Words_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootWords_Words_ListsArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Words_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Words_Lists_By_PkArgs = {
  list_id: Scalars['uuid']['input'];
  word_id: Scalars['Int']['input'];
};


export type Subscription_RootWords_Words_Lists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Words_Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


export type Subscription_RootWords_Words_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Words_Words_Stream_Cursor_Input>>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

/** All the categories of words */
export type Words_Categories = {
  __typename?: 'words_categories';
  category: Scalars['String']['output'];
};

/** aggregated selection of "words.categories" */
export type Words_Categories_Aggregate = {
  __typename?: 'words_categories_aggregate';
  aggregate?: Maybe<Words_Categories_Aggregate_Fields>;
  nodes: Array<Words_Categories>;
};

/** aggregate fields of "words.categories" */
export type Words_Categories_Aggregate_Fields = {
  __typename?: 'words_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Categories_Max_Fields>;
  min?: Maybe<Words_Categories_Min_Fields>;
};


/** aggregate fields of "words.categories" */
export type Words_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "words.categories". All fields are combined with a logical 'AND'. */
export type Words_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Categories_Bool_Exp>>;
  _not?: InputMaybe<Words_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Categories_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "words.categories" */
export enum Words_Categories_Constraint {
  /** unique or primary key constraint on columns "category" */
  CategoriesPkey = 'categories_pkey'
}

export enum Words_Categories_Enum {
  Animals = 'animals',
  BodyParts = 'body_parts',
  Clothes = 'clothes',
  Colors = 'colors',
  Foods = 'foods',
  FurnitureFurnishing = 'furniture_furnishing',
  HobbiesSport = 'hobbies_sport',
  HousingBuildings = 'housing_buildings',
  Plants = 'plants',
  Stationery = 'stationery',
  Vehicles = 'vehicles',
  Weather = 'weather'
}

/** Boolean expression to compare columns of type "words_categories_enum". All fields are combined with logical 'AND'. */
export type Words_Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Words_Categories_Enum>;
  _in?: InputMaybe<Array<Words_Categories_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Words_Categories_Enum>;
  _nin?: InputMaybe<Array<Words_Categories_Enum>>;
};

/** input type for inserting data into table "words.categories" */
export type Words_Categories_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Words_Categories_Max_Fields = {
  __typename?: 'words_categories_max_fields';
  category?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Words_Categories_Min_Fields = {
  __typename?: 'words_categories_min_fields';
  category?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "words.categories" */
export type Words_Categories_Mutation_Response = {
  __typename?: 'words_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Words_Categories>;
};

/** on_conflict condition type for table "words.categories" */
export type Words_Categories_On_Conflict = {
  constraint: Words_Categories_Constraint;
  update_columns?: Array<Words_Categories_Update_Column>;
  where?: InputMaybe<Words_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "words.categories". */
export type Words_Categories_Order_By = {
  category?: InputMaybe<Order_By>;
};

/** primary key columns input for table: words.categories */
export type Words_Categories_Pk_Columns_Input = {
  category: Scalars['String']['input'];
};

/** select columns of table "words.categories" */
export enum Words_Categories_Select_Column {
  /** column name */
  Category = 'category'
}

/** input type for updating data in table "words.categories" */
export type Words_Categories_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "words_categories" */
export type Words_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Categories_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "words.categories" */
export enum Words_Categories_Update_Column {
  /** column name */
  Category = 'category'
}

export type Words_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Words_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Words_Categories_Bool_Exp;
};

/** Enum for the list types */
export type Words_List_Types = {
  __typename?: 'words_list_types';
  type: Scalars['String']['output'];
};

/** aggregated selection of "words.list_types" */
export type Words_List_Types_Aggregate = {
  __typename?: 'words_list_types_aggregate';
  aggregate?: Maybe<Words_List_Types_Aggregate_Fields>;
  nodes: Array<Words_List_Types>;
};

/** aggregate fields of "words.list_types" */
export type Words_List_Types_Aggregate_Fields = {
  __typename?: 'words_list_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Words_List_Types_Max_Fields>;
  min?: Maybe<Words_List_Types_Min_Fields>;
};


/** aggregate fields of "words.list_types" */
export type Words_List_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_List_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "words.list_types". All fields are combined with a logical 'AND'. */
export type Words_List_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Words_List_Types_Bool_Exp>>;
  _not?: InputMaybe<Words_List_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Words_List_Types_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "words.list_types" */
export enum Words_List_Types_Constraint {
  /** unique or primary key constraint on columns "type" */
  ListTypesPkey = 'list_types_pkey'
}

export enum Words_List_Types_Enum {
  Categorized = 'categorized',
  Random = 'random'
}

/** Boolean expression to compare columns of type "words_list_types_enum". All fields are combined with logical 'AND'. */
export type Words_List_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Words_List_Types_Enum>;
  _in?: InputMaybe<Array<Words_List_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Words_List_Types_Enum>;
  _nin?: InputMaybe<Array<Words_List_Types_Enum>>;
};

/** input type for inserting data into table "words.list_types" */
export type Words_List_Types_Insert_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Words_List_Types_Max_Fields = {
  __typename?: 'words_list_types_max_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Words_List_Types_Min_Fields = {
  __typename?: 'words_list_types_min_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "words.list_types" */
export type Words_List_Types_Mutation_Response = {
  __typename?: 'words_list_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Words_List_Types>;
};

/** on_conflict condition type for table "words.list_types" */
export type Words_List_Types_On_Conflict = {
  constraint: Words_List_Types_Constraint;
  update_columns?: Array<Words_List_Types_Update_Column>;
  where?: InputMaybe<Words_List_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "words.list_types". */
export type Words_List_Types_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: words.list_types */
export type Words_List_Types_Pk_Columns_Input = {
  type: Scalars['String']['input'];
};

/** select columns of table "words.list_types" */
export enum Words_List_Types_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "words.list_types" */
export type Words_List_Types_Set_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "words_list_types" */
export type Words_List_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_List_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_List_Types_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "words.list_types" */
export enum Words_List_Types_Update_Column {
  /** column name */
  Type = 'type'
}

export type Words_List_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Words_List_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Words_List_Types_Bool_Exp;
};

/** Lists of words that can be used in an experiment */
export type Words_Lists = {
  __typename?: 'words_lists';
  /** An array relationship */
  categories: Array<Words_Lists_Categories>;
  /** An aggregate relationship */
  categories_aggregate: Words_Lists_Categories_Aggregate;
  id: Scalars['uuid']['output'];
  type: Words_List_Types_Enum;
  /** An array relationship */
  words: Array<Words_Lists_Words_View>;
  /** An aggregate relationship */
  words_aggregate: Words_Lists_Words_View_Aggregate;
  /** An array relationship */
  words_lists: Array<Words_Words_Lists>;
  /** An aggregate relationship */
  words_lists_aggregate: Words_Words_Lists_Aggregate;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Categories_Order_By>>;
  where?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsWordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Lists_Words_View_Order_By>>;
  where?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsWords_ListsArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};


/** Lists of words that can be used in an experiment */
export type Words_ListsWords_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Words_Words_Lists_Order_By>>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};

/** aggregated selection of "words.lists" */
export type Words_Lists_Aggregate = {
  __typename?: 'words_lists_aggregate';
  aggregate?: Maybe<Words_Lists_Aggregate_Fields>;
  nodes: Array<Words_Lists>;
};

/** aggregate fields of "words.lists" */
export type Words_Lists_Aggregate_Fields = {
  __typename?: 'words_lists_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Lists_Max_Fields>;
  min?: Maybe<Words_Lists_Min_Fields>;
};


/** aggregate fields of "words.lists" */
export type Words_Lists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "words.lists". All fields are combined with a logical 'AND'. */
export type Words_Lists_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Lists_Bool_Exp>>;
  _not?: InputMaybe<Words_Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Lists_Bool_Exp>>;
  categories?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
  categories_aggregate?: InputMaybe<Words_Lists_Categories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Words_List_Types_Enum_Comparison_Exp>;
  words?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
  words_aggregate?: InputMaybe<Words_Lists_Words_View_Aggregate_Bool_Exp>;
  words_lists?: InputMaybe<Words_Words_Lists_Bool_Exp>;
  words_lists_aggregate?: InputMaybe<Words_Words_Lists_Aggregate_Bool_Exp>;
};

/** columns and relationships of "words.lists_categories" */
export type Words_Lists_Categories = {
  __typename?: 'words_lists_categories';
  category?: Maybe<Scalars['String']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "words.lists_categories" */
export type Words_Lists_Categories_Aggregate = {
  __typename?: 'words_lists_categories_aggregate';
  aggregate?: Maybe<Words_Lists_Categories_Aggregate_Fields>;
  nodes: Array<Words_Lists_Categories>;
};

export type Words_Lists_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Words_Lists_Categories_Aggregate_Bool_Exp_Count>;
};

export type Words_Lists_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "words.lists_categories" */
export type Words_Lists_Categories_Aggregate_Fields = {
  __typename?: 'words_lists_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Lists_Categories_Max_Fields>;
  min?: Maybe<Words_Lists_Categories_Min_Fields>;
};


/** aggregate fields of "words.lists_categories" */
export type Words_Lists_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Lists_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "words.lists_categories" */
export type Words_Lists_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Words_Lists_Categories_Max_Order_By>;
  min?: InputMaybe<Words_Lists_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "words.lists_categories" */
export type Words_Lists_Categories_Arr_Rel_Insert_Input = {
  data: Array<Words_Lists_Categories_Insert_Input>;
};

/** Boolean expression to filter rows from the table "words.lists_categories". All fields are combined with a logical 'AND'. */
export type Words_Lists_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Lists_Categories_Bool_Exp>>;
  _not?: InputMaybe<Words_Lists_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Lists_Categories_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  list_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "words.lists_categories" */
export type Words_Lists_Categories_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Words_Lists_Categories_Max_Fields = {
  __typename?: 'words_lists_categories_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "words.lists_categories" */
export type Words_Lists_Categories_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Words_Lists_Categories_Min_Fields = {
  __typename?: 'words_lists_categories_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "words.lists_categories" */
export type Words_Lists_Categories_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "words.lists_categories". */
export type Words_Lists_Categories_Order_By = {
  category?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
};

/** select columns of table "words.lists_categories" */
export enum Words_Lists_Categories_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  ListId = 'list_id'
}

/** Streaming cursor of the table "words_lists_categories" */
export type Words_Lists_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Lists_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Lists_Categories_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** unique or primary key constraints on table "words.lists" */
export enum Words_Lists_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListsPkey = 'lists_pkey'
}

/** input type for inserting data into table "words.lists" */
export type Words_Lists_Insert_Input = {
  categories?: InputMaybe<Words_Lists_Categories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Words_List_Types_Enum>;
  words?: InputMaybe<Words_Lists_Words_View_Arr_Rel_Insert_Input>;
  words_lists?: InputMaybe<Words_Words_Lists_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Words_Lists_Max_Fields = {
  __typename?: 'words_lists_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Words_Lists_Min_Fields = {
  __typename?: 'words_lists_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "words.lists" */
export type Words_Lists_Mutation_Response = {
  __typename?: 'words_lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Words_Lists>;
};

/** input type for inserting object relation for remote table "words.lists" */
export type Words_Lists_Obj_Rel_Insert_Input = {
  data: Words_Lists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Words_Lists_On_Conflict>;
};

/** on_conflict condition type for table "words.lists" */
export type Words_Lists_On_Conflict = {
  constraint: Words_Lists_Constraint;
  update_columns?: Array<Words_Lists_Update_Column>;
  where?: InputMaybe<Words_Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "words.lists". */
export type Words_Lists_Order_By = {
  categories_aggregate?: InputMaybe<Words_Lists_Categories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  words_aggregate?: InputMaybe<Words_Lists_Words_View_Aggregate_Order_By>;
  words_lists_aggregate?: InputMaybe<Words_Words_Lists_Aggregate_Order_By>;
};

/** primary key columns input for table: words.lists */
export type Words_Lists_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "words.lists" */
export enum Words_Lists_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "words.lists" */
export type Words_Lists_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Words_List_Types_Enum>;
};

/** Streaming cursor of the table "words_lists" */
export type Words_Lists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Lists_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Words_List_Types_Enum>;
};

/** update columns of table "words.lists" */
export enum Words_Lists_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

export type Words_Lists_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Words_Lists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Words_Lists_Bool_Exp;
};

/** columns and relationships of "words.lists_words_view" */
export type Words_Lists_Words_View = {
  __typename?: 'words_lists_words_view';
  category?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
  word?: Maybe<Scalars['citext']['output']>;
};

/** aggregated selection of "words.lists_words_view" */
export type Words_Lists_Words_View_Aggregate = {
  __typename?: 'words_lists_words_view_aggregate';
  aggregate?: Maybe<Words_Lists_Words_View_Aggregate_Fields>;
  nodes: Array<Words_Lists_Words_View>;
};

export type Words_Lists_Words_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<Words_Lists_Words_View_Aggregate_Bool_Exp_Count>;
};

export type Words_Lists_Words_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "words.lists_words_view" */
export type Words_Lists_Words_View_Aggregate_Fields = {
  __typename?: 'words_lists_words_view_aggregate_fields';
  avg?: Maybe<Words_Lists_Words_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Lists_Words_View_Max_Fields>;
  min?: Maybe<Words_Lists_Words_View_Min_Fields>;
  stddev?: Maybe<Words_Lists_Words_View_Stddev_Fields>;
  stddev_pop?: Maybe<Words_Lists_Words_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Words_Lists_Words_View_Stddev_Samp_Fields>;
  sum?: Maybe<Words_Lists_Words_View_Sum_Fields>;
  var_pop?: Maybe<Words_Lists_Words_View_Var_Pop_Fields>;
  var_samp?: Maybe<Words_Lists_Words_View_Var_Samp_Fields>;
  variance?: Maybe<Words_Lists_Words_View_Variance_Fields>;
};


/** aggregate fields of "words.lists_words_view" */
export type Words_Lists_Words_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Lists_Words_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "words.lists_words_view" */
export type Words_Lists_Words_View_Aggregate_Order_By = {
  avg?: InputMaybe<Words_Lists_Words_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Words_Lists_Words_View_Max_Order_By>;
  min?: InputMaybe<Words_Lists_Words_View_Min_Order_By>;
  stddev?: InputMaybe<Words_Lists_Words_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Words_Lists_Words_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Words_Lists_Words_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Words_Lists_Words_View_Sum_Order_By>;
  var_pop?: InputMaybe<Words_Lists_Words_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Words_Lists_Words_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Words_Lists_Words_View_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "words.lists_words_view" */
export type Words_Lists_Words_View_Arr_Rel_Insert_Input = {
  data: Array<Words_Lists_Words_View_Insert_Input>;
};

/** aggregate avg on columns */
export type Words_Lists_Words_View_Avg_Fields = {
  __typename?: 'words_lists_words_view_avg_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Avg_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "words.lists_words_view". All fields are combined with a logical 'AND'. */
export type Words_Lists_Words_View_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Lists_Words_View_Bool_Exp>>;
  _not?: InputMaybe<Words_Lists_Words_View_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Lists_Words_View_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  frequency?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  list_id?: InputMaybe<Uuid_Comparison_Exp>;
  syllables?: InputMaybe<Int_Comparison_Exp>;
  word?: InputMaybe<Citext_Comparison_Exp>;
};

/** input type for inserting data into table "words.lists_words_view" */
export type Words_Lists_Words_View_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
  word?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate max on columns */
export type Words_Lists_Words_View_Max_Fields = {
  __typename?: 'words_lists_words_view_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
  word?: Maybe<Scalars['citext']['output']>;
};

/** order by max() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
  word?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Words_Lists_Words_View_Min_Fields = {
  __typename?: 'words_lists_words_view_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
  word?: Maybe<Scalars['citext']['output']>;
};

/** order by min() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
  word?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "words.lists_words_view". */
export type Words_Lists_Words_View_Order_By = {
  category?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
  word?: InputMaybe<Order_By>;
};

/** select columns of table "words.lists_words_view" */
export enum Words_Lists_Words_View_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  Syllables = 'syllables',
  /** column name */
  Word = 'word'
}

/** aggregate stddev on columns */
export type Words_Lists_Words_View_Stddev_Fields = {
  __typename?: 'words_lists_words_view_stddev_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Stddev_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Words_Lists_Words_View_Stddev_Pop_Fields = {
  __typename?: 'words_lists_words_view_stddev_pop_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Stddev_Pop_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Words_Lists_Words_View_Stddev_Samp_Fields = {
  __typename?: 'words_lists_words_view_stddev_samp_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Stddev_Samp_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "words_lists_words_view" */
export type Words_Lists_Words_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Lists_Words_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Lists_Words_View_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
  word?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate sum on columns */
export type Words_Lists_Words_View_Sum_Fields = {
  __typename?: 'words_lists_words_view_sum_fields';
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Sum_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Words_Lists_Words_View_Var_Pop_Fields = {
  __typename?: 'words_lists_words_view_var_pop_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Var_Pop_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Words_Lists_Words_View_Var_Samp_Fields = {
  __typename?: 'words_lists_words_view_var_samp_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Var_Samp_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Words_Lists_Words_View_Variance_Fields = {
  __typename?: 'words_lists_words_view_variance_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "words.lists_words_view" */
export type Words_Lists_Words_View_Variance_Order_By = {
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
};

/** columns and relationships of "words.words" */
export type Words_Words = {
  __typename?: 'words_words';
  category?: Maybe<Words_Categories_Enum>;
  frequency: Scalars['numeric']['output'];
  id: Scalars['Int']['output'];
  syllables: Scalars['Int']['output'];
  word: Scalars['citext']['output'];
};

/** aggregated selection of "words.words" */
export type Words_Words_Aggregate = {
  __typename?: 'words_words_aggregate';
  aggregate?: Maybe<Words_Words_Aggregate_Fields>;
  nodes: Array<Words_Words>;
};

/** aggregate fields of "words.words" */
export type Words_Words_Aggregate_Fields = {
  __typename?: 'words_words_aggregate_fields';
  avg?: Maybe<Words_Words_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Words_Max_Fields>;
  min?: Maybe<Words_Words_Min_Fields>;
  stddev?: Maybe<Words_Words_Stddev_Fields>;
  stddev_pop?: Maybe<Words_Words_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Words_Words_Stddev_Samp_Fields>;
  sum?: Maybe<Words_Words_Sum_Fields>;
  var_pop?: Maybe<Words_Words_Var_Pop_Fields>;
  var_samp?: Maybe<Words_Words_Var_Samp_Fields>;
  variance?: Maybe<Words_Words_Variance_Fields>;
};


/** aggregate fields of "words.words" */
export type Words_Words_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Words_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Words_Words_Avg_Fields = {
  __typename?: 'words_words_avg_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "words.words". All fields are combined with a logical 'AND'. */
export type Words_Words_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Words_Bool_Exp>>;
  _not?: InputMaybe<Words_Words_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Words_Bool_Exp>>;
  category?: InputMaybe<Words_Categories_Enum_Comparison_Exp>;
  frequency?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  syllables?: InputMaybe<Int_Comparison_Exp>;
  word?: InputMaybe<Citext_Comparison_Exp>;
};

/** unique or primary key constraints on table "words.words" */
export enum Words_Words_Constraint {
  /** unique or primary key constraint on columns "id" */
  WordsPkey = 'words_pkey'
}

/** input type for incrementing numeric columns in table "words.words" */
export type Words_Words_Inc_Input = {
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "words.words" */
export type Words_Words_Insert_Input = {
  category?: InputMaybe<Words_Categories_Enum>;
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
  word?: InputMaybe<Scalars['citext']['input']>;
};

/** Join table for words & lists */
export type Words_Words_Lists = {
  __typename?: 'words_words_lists';
  /** An object relationship */
  list: Words_Lists;
  list_id: Scalars['uuid']['output'];
  /** An object relationship */
  word: Words_Words;
  word_id: Scalars['Int']['output'];
};

/** aggregated selection of "words.words_lists" */
export type Words_Words_Lists_Aggregate = {
  __typename?: 'words_words_lists_aggregate';
  aggregate?: Maybe<Words_Words_Lists_Aggregate_Fields>;
  nodes: Array<Words_Words_Lists>;
};

export type Words_Words_Lists_Aggregate_Bool_Exp = {
  count?: InputMaybe<Words_Words_Lists_Aggregate_Bool_Exp_Count>;
};

export type Words_Words_Lists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Words_Words_Lists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "words.words_lists" */
export type Words_Words_Lists_Aggregate_Fields = {
  __typename?: 'words_words_lists_aggregate_fields';
  avg?: Maybe<Words_Words_Lists_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Words_Words_Lists_Max_Fields>;
  min?: Maybe<Words_Words_Lists_Min_Fields>;
  stddev?: Maybe<Words_Words_Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Words_Words_Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Words_Words_Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Words_Words_Lists_Sum_Fields>;
  var_pop?: Maybe<Words_Words_Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Words_Words_Lists_Var_Samp_Fields>;
  variance?: Maybe<Words_Words_Lists_Variance_Fields>;
};


/** aggregate fields of "words.words_lists" */
export type Words_Words_Lists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Words_Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "words.words_lists" */
export type Words_Words_Lists_Aggregate_Order_By = {
  avg?: InputMaybe<Words_Words_Lists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Words_Words_Lists_Max_Order_By>;
  min?: InputMaybe<Words_Words_Lists_Min_Order_By>;
  stddev?: InputMaybe<Words_Words_Lists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Words_Words_Lists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Words_Words_Lists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Words_Words_Lists_Sum_Order_By>;
  var_pop?: InputMaybe<Words_Words_Lists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Words_Words_Lists_Var_Samp_Order_By>;
  variance?: InputMaybe<Words_Words_Lists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "words.words_lists" */
export type Words_Words_Lists_Arr_Rel_Insert_Input = {
  data: Array<Words_Words_Lists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Words_Words_Lists_On_Conflict>;
};

/** aggregate avg on columns */
export type Words_Words_Lists_Avg_Fields = {
  __typename?: 'words_words_lists_avg_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "words.words_lists" */
export type Words_Words_Lists_Avg_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "words.words_lists". All fields are combined with a logical 'AND'. */
export type Words_Words_Lists_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Words_Lists_Bool_Exp>>;
  _not?: InputMaybe<Words_Words_Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Words_Lists_Bool_Exp>>;
  list?: InputMaybe<Words_Lists_Bool_Exp>;
  list_id?: InputMaybe<Uuid_Comparison_Exp>;
  word?: InputMaybe<Words_Words_Bool_Exp>;
  word_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "words.words_lists" */
export enum Words_Words_Lists_Constraint {
  /** unique or primary key constraint on columns "word_id", "list_id" */
  WordsListsPkey = 'words_lists_pkey'
}

/** input type for incrementing numeric columns in table "words.words_lists" */
export type Words_Words_Lists_Inc_Input = {
  word_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "words.words_lists" */
export type Words_Words_Lists_Insert_Input = {
  list?: InputMaybe<Words_Lists_Obj_Rel_Insert_Input>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  word?: InputMaybe<Words_Words_Obj_Rel_Insert_Input>;
  word_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Words_Words_Lists_Max_Fields = {
  __typename?: 'words_words_lists_max_fields';
  list_id?: Maybe<Scalars['uuid']['output']>;
  word_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "words.words_lists" */
export type Words_Words_Lists_Max_Order_By = {
  list_id?: InputMaybe<Order_By>;
  word_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Words_Words_Lists_Min_Fields = {
  __typename?: 'words_words_lists_min_fields';
  list_id?: Maybe<Scalars['uuid']['output']>;
  word_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "words.words_lists" */
export type Words_Words_Lists_Min_Order_By = {
  list_id?: InputMaybe<Order_By>;
  word_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "words.words_lists" */
export type Words_Words_Lists_Mutation_Response = {
  __typename?: 'words_words_lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Words_Words_Lists>;
};

/** on_conflict condition type for table "words.words_lists" */
export type Words_Words_Lists_On_Conflict = {
  constraint: Words_Words_Lists_Constraint;
  update_columns?: Array<Words_Words_Lists_Update_Column>;
  where?: InputMaybe<Words_Words_Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "words.words_lists". */
export type Words_Words_Lists_Order_By = {
  list?: InputMaybe<Words_Lists_Order_By>;
  list_id?: InputMaybe<Order_By>;
  word?: InputMaybe<Words_Words_Order_By>;
  word_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: words.words_lists */
export type Words_Words_Lists_Pk_Columns_Input = {
  list_id: Scalars['uuid']['input'];
  word_id: Scalars['Int']['input'];
};

/** select columns of table "words.words_lists" */
export enum Words_Words_Lists_Select_Column {
  /** column name */
  ListId = 'list_id',
  /** column name */
  WordId = 'word_id'
}

/** input type for updating data in table "words.words_lists" */
export type Words_Words_Lists_Set_Input = {
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  word_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Words_Words_Lists_Stddev_Fields = {
  __typename?: 'words_words_lists_stddev_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "words.words_lists" */
export type Words_Words_Lists_Stddev_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Words_Words_Lists_Stddev_Pop_Fields = {
  __typename?: 'words_words_lists_stddev_pop_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "words.words_lists" */
export type Words_Words_Lists_Stddev_Pop_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Words_Words_Lists_Stddev_Samp_Fields = {
  __typename?: 'words_words_lists_stddev_samp_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "words.words_lists" */
export type Words_Words_Lists_Stddev_Samp_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "words_words_lists" */
export type Words_Words_Lists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Words_Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Words_Lists_Stream_Cursor_Value_Input = {
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  word_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Words_Words_Lists_Sum_Fields = {
  __typename?: 'words_words_lists_sum_fields';
  word_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "words.words_lists" */
export type Words_Words_Lists_Sum_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** update columns of table "words.words_lists" */
export enum Words_Words_Lists_Update_Column {
  /** column name */
  ListId = 'list_id',
  /** column name */
  WordId = 'word_id'
}

export type Words_Words_Lists_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Words_Words_Lists_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Words_Words_Lists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Words_Words_Lists_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Words_Words_Lists_Var_Pop_Fields = {
  __typename?: 'words_words_lists_var_pop_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "words.words_lists" */
export type Words_Words_Lists_Var_Pop_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Words_Words_Lists_Var_Samp_Fields = {
  __typename?: 'words_words_lists_var_samp_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "words.words_lists" */
export type Words_Words_Lists_Var_Samp_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Words_Words_Lists_Variance_Fields = {
  __typename?: 'words_words_lists_variance_fields';
  word_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "words.words_lists" */
export type Words_Words_Lists_Variance_Order_By = {
  word_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Words_Words_Max_Fields = {
  __typename?: 'words_words_max_fields';
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
  word?: Maybe<Scalars['citext']['output']>;
};

/** aggregate min on columns */
export type Words_Words_Min_Fields = {
  __typename?: 'words_words_min_fields';
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
  word?: Maybe<Scalars['citext']['output']>;
};

/** response of any mutation on the table "words.words" */
export type Words_Words_Mutation_Response = {
  __typename?: 'words_words_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Words_Words>;
};

/** input type for inserting object relation for remote table "words.words" */
export type Words_Words_Obj_Rel_Insert_Input = {
  data: Words_Words_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Words_Words_On_Conflict>;
};

/** on_conflict condition type for table "words.words" */
export type Words_Words_On_Conflict = {
  constraint: Words_Words_Constraint;
  update_columns?: Array<Words_Words_Update_Column>;
  where?: InputMaybe<Words_Words_Bool_Exp>;
};

/** Ordering options when selecting data from "words.words". */
export type Words_Words_Order_By = {
  category?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  syllables?: InputMaybe<Order_By>;
  word?: InputMaybe<Order_By>;
};

/** primary key columns input for table: words.words */
export type Words_Words_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "words.words" */
export enum Words_Words_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Syllables = 'syllables',
  /** column name */
  Word = 'word'
}

/** input type for updating data in table "words.words" */
export type Words_Words_Set_Input = {
  category?: InputMaybe<Words_Categories_Enum>;
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
  word?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate stddev on columns */
export type Words_Words_Stddev_Fields = {
  __typename?: 'words_words_stddev_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Words_Words_Stddev_Pop_Fields = {
  __typename?: 'words_words_stddev_pop_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Words_Words_Stddev_Samp_Fields = {
  __typename?: 'words_words_stddev_samp_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "words_words" */
export type Words_Words_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Words_Words_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Words_Words_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Words_Categories_Enum>;
  frequency?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  syllables?: InputMaybe<Scalars['Int']['input']>;
  word?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate sum on columns */
export type Words_Words_Sum_Fields = {
  __typename?: 'words_words_sum_fields';
  frequency?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  syllables?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "words.words" */
export enum Words_Words_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Syllables = 'syllables',
  /** column name */
  Word = 'word'
}

export type Words_Words_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Words_Words_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Words_Words_Set_Input>;
  /** filter the rows which have to be updated */
  where: Words_Words_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Words_Words_Var_Pop_Fields = {
  __typename?: 'words_words_var_pop_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Words_Words_Var_Samp_Fields = {
  __typename?: 'words_words_var_samp_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Words_Words_Variance_Fields = {
  __typename?: 'words_words_variance_fields';
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  syllables?: Maybe<Scalars['Float']['output']>;
};

export type InsertExperimentMutationVariables = Exact<{
  runId: Scalars['uuid']['input'];
  listType: Words_List_Types_Enum;
  recallListId: Scalars['uuid']['input'];
  recallWords: Array<Scalars['String']['input']> | Scalars['String']['input'];
  recognitionListId: Scalars['uuid']['input'];
  recognitionWords: Array<Scalars['String']['input']> | Scalars['String']['input'];
  distractorWords: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type InsertExperimentMutation = { __typename?: 'mutation_root', insert_experiments_experiments_one?: { __typename?: 'experiments_experiments', id: any, recall_id?: any | null } | null };

export type CompleteRecallMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  answers: Scalars['jsonb']['input'];
  completedAt: Scalars['timestamptz']['input'];
}>;


export type CompleteRecallMutation = { __typename?: 'mutation_root', update_experiments_recall_by_pk?: { __typename?: 'experiments_recall', id: any } | null };

export type CompleteRecognitionMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  answers: Scalars['jsonb']['input'];
  completedAt: Scalars['timestamptz']['input'];
}>;


export type CompleteRecognitionMutation = { __typename?: 'mutation_root', update_experiments_recognition_by_pk?: { __typename?: 'experiments_recognition', id: any } | null };

export type InsertOrUpdateProfileMutationVariables = Exact<{
  age: Scalars['Int']['input'];
  gender: Genders_Enum;
}>;


export type InsertOrUpdateProfileMutation = { __typename?: 'mutation_root', insert_subjects_one?: { __typename?: 'subjects', id: any, age: number, gender: Genders_Enum } | null };

export type GetRecallByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetRecallByIdQuery = { __typename?: 'query_root', experiments_recall_by_pk?: { __typename?: 'experiments_recall', id: any, words: Array<string> } | null };

export type GetRecognitionByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetRecognitionByIdQuery = { __typename?: 'query_root', experiments_recognition_by_pk?: { __typename?: 'experiments_recognition', id: any, words: Array<string>, distractors: Array<string> } | null };

export type GetListsQueryVariables = Exact<{
  where?: InputMaybe<Words_Lists_Bool_Exp>;
}>;


export type GetListsQuery = { __typename?: 'query_root', words_lists: Array<{ __typename?: 'words_lists', id: any, categories: Array<{ __typename?: 'words_lists_categories', category?: string | null }>, words_aggregate: { __typename?: 'words_lists_words_view_aggregate', aggregate?: { __typename?: 'words_lists_words_view_aggregate_fields', count: number } | null } }> };

export type GetListByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetListByIdQuery = { __typename?: 'query_root', words_lists_by_pk?: { __typename?: 'words_lists', type: Words_List_Types_Enum, words: Array<{ __typename?: 'words_lists_words_view', word?: any | null, category?: string | null, syllables?: number | null, frequency?: any | null }> } | null };

export type GetWordsByCategoryQueryVariables = Exact<{
  categories: Array<Words_Categories_Enum> | Words_Categories_Enum;
}>;


export type GetWordsByCategoryQuery = { __typename?: 'query_root', words_words: Array<{ __typename?: 'words_words', word: any, category?: Words_Categories_Enum | null, syllables: number, frequency: any }> };

export type GetRandomWordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomWordsQuery = { __typename?: 'query_root', words_words: Array<{ __typename?: 'words_words', word: any, category?: Words_Categories_Enum | null, syllables: number, frequency: any }> };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetProfileQuery = { __typename?: 'query_root', subjects_by_pk?: { __typename?: 'subjects', id: any, age: number, gender: Genders_Enum, experiments: Array<{ __typename?: 'experiments_experiments', id: any, run: { __typename?: 'experiments_run', id: any, name: string, lengths: Array<number>, run_list_type: Experiments_Run_List_Types_Enum }, recall?: { __typename?: 'experiments_recall', id: any, completed_at?: any | null } | null, recognition?: { __typename?: 'experiments_recognition', id: any, completed_at?: any | null } | null }> } | null };

export type Get_RunsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_RunsQuery = { __typename?: 'query_root', experiments_run: Array<{ __typename?: 'experiments_run', id: any, name: string, lengths: Array<number>, run_list_type: Experiments_Run_List_Types_Enum }> };

export type Get_Run_By_CodeQueryVariables = Exact<{
  code: Scalars['Int']['input'];
}>;


export type Get_Run_By_CodeQuery = { __typename?: 'query_root', experiments_run: Array<{ __typename?: 'experiments_run', id: any, name: string, lengths: Array<number>, run_list_type: Experiments_Run_List_Types_Enum }> };


export const InsertExperimentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertExperiment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"words_list_types_enum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recallListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recallWords"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recognitionListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recognitionWords"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distractorWords"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_experiments_experiments_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"run_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"list_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recall"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"source_list_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recallListId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"words"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recallWords"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"recognition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"source_list_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recognitionListId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"words"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recognitionWords"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"distractors"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distractorWords"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"recall_id"}}]}}]}}]} as unknown as DocumentNode<InsertExperimentMutation, InsertExperimentMutationVariables>;
export const CompleteRecallDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteRecall"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_experiments_recall_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"completed_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CompleteRecallMutation, CompleteRecallMutationVariables>;
export const CompleteRecognitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteRecognition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_experiments_recognition_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"completed_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CompleteRecognitionMutation, CompleteRecognitionMutationVariables>;
export const InsertOrUpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertOrUpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gender"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"genders_enum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_subjects_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gender"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gender"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"subjects_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"age"},{"kind":"EnumValue","value":"gender"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]} as unknown as DocumentNode<InsertOrUpdateProfileMutation, InsertOrUpdateProfileMutationVariables>;
export const GetRecallByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecallById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiments_recall_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"words"}}]}}]}}]} as unknown as DocumentNode<GetRecallByIdQuery, GetRecallByIdQueryVariables>;
export const GetRecognitionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecognitionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiments_recognition_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"words"}},{"kind":"Field","name":{"kind":"Name","value":"distractors"}}]}}]}}]} as unknown as DocumentNode<GetRecognitionByIdQuery, GetRecognitionByIdQueryVariables>;
export const GetListsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"words_lists_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words_lists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"words_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetListsQuery, GetListsQueryVariables>;
export const GetListByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words_lists_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"words"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"syllables"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]}}]}}]} as unknown as DocumentNode<GetListByIdQuery, GetListByIdQueryVariables>;
export const GetWordsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWordsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"words_categories_enum"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words_words"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"syllables"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]}}]} as unknown as DocumentNode<GetWordsByCategoryQuery, GetWordsByCategoryQueryVariables>;
export const GetRandomWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRandomWords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words_words"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"syllables"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]}}]} as unknown as DocumentNode<GetRandomWordsQuery, GetRandomWordsQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjects_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"experiments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"run"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lengths"}},{"kind":"Field","name":{"kind":"Name","value":"run_list_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recall"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"completed_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recognition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"completed_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const Get_RunsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_RUNS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiments_run"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lengths"}},{"kind":"Field","name":{"kind":"Name","value":"run_list_type"}}]}}]}}]} as unknown as DocumentNode<Get_RunsQuery, Get_RunsQueryVariables>;
export const Get_Run_By_CodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_RUN_BY_CODE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiments_run"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lengths"}},{"kind":"Field","name":{"kind":"Name","value":"run_list_type"}}]}}]}}]} as unknown as DocumentNode<Get_Run_By_CodeQuery, Get_Run_By_CodeQueryVariables>;
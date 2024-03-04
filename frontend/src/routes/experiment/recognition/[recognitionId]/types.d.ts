import type { OperationResultStore, TypedDocumentNode } from '@urql/svelte';

export type Result<Type> =
	Type extends TypedDocumentNode<infer Data, infer Variables>
		? OperationResultStore<Data, Variables>
		: never;

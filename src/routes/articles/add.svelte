<script lang="ts">
	import { setClient } from '@urql/svelte';
	import { writable } from 'svelte/store';
	import { mutation } from '@urql/svelte';
	import { AddArticleDocument } from '../../generated/graphql';
	import type { AddArticleMutationVariables } from '../../generated/graphql';
	import client from '../../_client';
	setClient(client);

	let article = writable({
		title: '',
		content: '',
		author: ''
	});

	const addArticle = mutation<AddArticleMutationVariables>({
		query: AddArticleDocument
	});

	const handleAdd = async () => {
		await addArticle($article);
		$article.content = '';
		$article.title = '';
		$article.author = '';
	};
</script>

<form class="mt-10 grid gap-5">
	<label>
		<span class="text-2xl mt-2 font-bold">Title</span>
		<input
			type="text"
			bind:value={$article.title}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
	</label>
	<label>
		<span class="text-2xl mt-2 font-bold">Content</span>
		<textarea
			type="text"
			bind:value={$article.content}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
	</label>
	<label>
		<span class="text-2xl mt-2 font-bold">Author</span>
		<input
			type="text"
			bind:value={$article.author}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
	</label>
	<div class="flex justify-end m-y-5">
		<button
			class="mt-5 px-10 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-bold"
			on:click={handleAdd}
		>
			Add Article
		</button>
	</div>
</form>

<style>
	label {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-gap: 0.5rem;
	}
</style>

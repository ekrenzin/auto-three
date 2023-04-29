<script lang="ts">
  import type { LangChainModel } from '../utils/langchain/Model'
  import Card from './Card.svelte'

  export let langchain: LangChainModel
  
  let text: string = ''
  let textOutput: string = ''
  let loading: boolean = false


  async function submitText() {
    loading = true
    try {
      textOutput = await langchain.complete(text)
    } catch (e) {
      console.log(e)
    }
    loading = false
  }
</script>

<Card>
{#if !loading}
  <h1>Auto Three</h1>
  <textarea bind:value={text} />
  <button on:click={submitText}> Submit </button>
  <div>
    <h2>Output</h2>
    <p>{textOutput}</p>
  </div>
{:else}
  <h1>Loading...</h1>
{/if}
</Card>
<script lang="ts">
  import { LangChain } from './components/langchain/index'
  import { onMount } from 'svelte'

  let text: string = ''
  let langchain: LangChain
  let textOutput: string = ''
  let loading: boolean = false

  onMount(async () => {
    const api_key = await window.electron.ipcRenderer.invoke('open-ai-key')
    LangChain.init(api_key)
    langchain = LangChain.getInstance()
  })

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

<main class="container">
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
</main>

<style>
</style>

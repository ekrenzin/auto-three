<script lang="ts">
  import { LangChain } from './components/langchain/index'
  import { onMount } from 'svelte'
  
  let text = ''

  onMount(async () => {
    const api_key = await window.electron.ipcRenderer.invoke('open-ai-key')
    LangChain.init(api_key)
  })

  async function submitText() {
    const model = LangChain.getModel()
    console.log(model)
  }
</script>

<main class="container">
  <h1>Auto Three</h1>
  <textarea bind:value={text} />
  <button on:click={submitText}> Submit </button>
</main>

<style>
</style>

<script lang="ts">
  import { LangChain } from './components/langchain/index'
  let text = ''

  async function submitText() {
    const api_key = await window.electron.ipcRenderer.invoke('open-ai-key')
    const model = LangChain.getInstance(api_key)
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

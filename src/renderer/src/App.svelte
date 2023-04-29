<script lang="ts">
  import Model from './components/Model.svelte'
  import Agent from './components/Agent.svelte'

  import { LangChainModel } from './utils/langchain/Model'
  import { onMount } from 'svelte'

  let langchain: LangChainModel

  onMount(async () => {
    const api_key = await window.electron.ipcRenderer.invoke('open-ai-key')
    LangChainModel.init(api_key)
    langchain = LangChainModel.getInstance()
  })
</script>

<main class="container">
  <Model bind:langchain />
  <Agent />
</main>

<style>
</style>

<script lang="ts">
  import { LangChainModel } from '../utils/langchain/Model'
  import { run } from '../utils/langchain/Agent'
  import Card from './Card.svelte'

  function test() {
    const model = LangChainModel.getModel()
    run(model)
  }
</script>

<Card>
  <div class="card">
    <h1>Agent</h1>
    <button on:click={test}>Run</button>
  </div>
</Card>

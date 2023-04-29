<script lang="ts">
  let text = ''

  function submitText() {
    const { ipcRenderer } = window.electron
    ipcRenderer.invoke('test', text)
  }
</script>

<main class="container">
  <h1>Auto Three</h1>
  <textarea bind:value={text} />
  <button on:click={submitText}> Submit </button>
</main>

<style>
</style>

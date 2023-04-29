<script lang="ts">
</script>

<div class="card">
  <slot />
</div>

<style>
  .card {
    background-color: rebeccapurple;
    border-radius: 2px;
    display: inline-block;
    margin: 1rem;
    position: relative;
    top: 0;
    transition: all 0.3s ease;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
</style>

<script>
  export let label = 'data'
  export let data = {
    message: 'hello, world.'
  } 
</script>

<summary>
  {label}
  <details>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </details>
</summary>

<script lang="ts">
  import type { PageData } from './$types'
  
  export let data : PageData
</script>
<div class="theme-wrap">
  <nav>
    <a href="/" class="logo">
      <img src={data.companyInfo.logomark.asset.url} alt={data.companyInfo.brandName}>
    </a>
    <ul>
      <li>
        <a href="/devices">Devices</a>
      </li>
      <li>
        <a href="/dealers">Dealers</a>
      </li>
      <li>
        <a href="/artists">Artists</a>
      </li>
      <li>
        <a href="/studios">Studios</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="http://onomatopedal.com/" target="_blank">Onomatopedal</a>
      </li>
      <li>
        <a href="https://eqdmerch.com/" target="_blank">Merch</a>
      </li>
    </ul>
  </nav>
  <main>
    <slot />
  </main>
  <footer>
    <div class='footer-top'>
      <a href="/"><strong>{data.companyInfo.brandName}</strong></a>
      <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Knowledge Base</a>
      <a href="/">Contact</a>
      <a href="/">Warranty / Repairs</a>
      <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Forum</a>
      <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Careers</a>
    </div>
    <div class="footer-bottom">
      <p>©{data.companyInfo.copyrightYear} {data.companyInfo.legalName}&nbsp; /<a href="/" style="display: inline-block;">Privacy Policy</a></p>
      <ul class="social-links">
        {#each data.companyInfo.socialLinks as link, i (link)}
        <li>
          <a href={link} target="_blank" rel="noreferrer">{new URL(link).hostname}</a>
        </li>
        {/each}
      </ul>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    background: var(--fg);
  }

 .theme-wrap {
    background: var(--bg);
    border-radius: 8px;
    color: var(--fg);
    min-height: 100vh;
  }

  main {
    min-height: 100vh;
  }

  nav {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: grid;
    place-items: center;
  }

  img {
    filter: invert(var(--dark-bg));
    max-width: 428px;
    box-sizing: contain;
  }

  ul {
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  li {
    list-style: none;
    padding: .25rem .5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding: .25rem .75rem;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: all .08s ease-out;
  }

  a[target="_blank"]:focus,
  a[target="_blank"]:hover {
    background: transparent;
    border-color: var(--fg, gold);
    background: transparent;
  }

  a:focus,
  a:hover {
    background: var(--fg, gold);
    color: var(--bg, inherit);
  }

  footer {
    box-sizing: border-box;
    padding: 2rem 1rem 1rem;
    border-top: solid 1px gold;
    max-width: 1260px;
    margin: 4rem auto 0;
  }

  .footer-top {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-around;
  }
</style>

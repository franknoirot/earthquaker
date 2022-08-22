<script lang="ts">
  
  export let companyInfo
</script>


<footer>
  <div class='footer-top'>
    <a href="/"><strong>{companyInfo.brandName}</strong></a>
    <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Knowledge Base</a>
    <a href="/">Contact</a>
    <a href="/">Warranty / Repairs</a>
    <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Forum</a>
    <a href="https://earthquakerdevices.force.com/url/s/" target="_blank">Careers</a>
  </div>
  <div class="footer-bottom">
    <p>©{companyInfo.copyrightYear} {companyInfo.legalName}&nbsp; /<a href="/" style="display: inline-block;">Privacy Policy</a></p>
    <ul class="social-links">
      {#each companyInfo.socialLinks as link, i (link)}
      <li>
        <a href={link} target="_blank" rel="noreferrer">{new URL(link).hostname}</a>
      </li>
      {/each}
    </ul>
  </div>
</footer>


<style>
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
    position: relative;
  }

  a[target="_blank"]::after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 5%;
    display: block;
    width: 25px;
    height: 25px;
    background-color: var(--fg, gold);
    -webkit-mask: url('/link-arrow.svg') no-repeat center;
    mask: url('/link-arrow.svg') no-repeat center;
    mask-size: contain;
    -webkit-mask-size: contain;
    transition: all .14s ease-out;
    color: inherit;
    transform: translate(-5px, 5px);
    opacity: 0;
  }

  a[target="_blank"]:focus,
  a[target="_blank"]:hover {
    background: transparent;
    border-color: var(--fg, gold);
    color: var(--fg, inherit);
    background: transparent;
  }

  a[target="_blank"]:focus::after,
  a[target="_blank"]:hover::after {
    opacity: 1;
    transform: none;
  }

  a:focus,
  a:hover {
    background: var(--fg, gold);
    color: var(--bg, inherit);
    --dark-bg: calc((var(--dark-bg) + 1) % 2);
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

  @media screen and (max-width: 480px) {
    .footer-top,
    .social-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .footer-bottom {
      display: block;
    }
  }
</style>

<main>
  <nav>
    <a href="/">
      <img src="/logo.png" alt="Earthquaker Devices">
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
  <slot />
</main>

<style>
  :global(body) {
    background: var(--fg);
  }

   main {
    background: var(--bg);
    border-radius: 8px;
    color: var(--fg);
  }

  nav {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    transition: all .08s ease-out;
  }

  a:focus,
  a:hover {
    background: var(--fg, gold);
    color: var(--bg, inherit);
  }
</style>

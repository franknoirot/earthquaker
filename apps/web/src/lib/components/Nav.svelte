<script lang="ts">
  import { navigating } from '$app/stores'

  export let companyInfo

  let navToggled = false
  $: $navigating && (navToggled = false)
</script>

<nav class:navToggled>
  <a href="/" class="logo">
    <img src={companyInfo.logomark.asset.url} alt={companyInfo.brandName}>
  </a>
  <button class="mobile-toggle" on:click={() => { navToggled = !navToggled }}>
    <svg class="hamburger" width="24" height="24" viewBox="0 0 10 10">
      <path d="M1 1 l9 0" stroke="currentColor" stroke-linecap="round" />
      <path d="M1 5 l9 0" stroke="currentColor" stroke-linecap="round" />
      <path d="M1 9 l9 0" stroke="currentColor" stroke-linecap="round" />
    </svg>
    <svg class="X" width="24" height="24" viewBox="0 0 10 10">
      <path d="M1 1 l8 8" stroke="currentColor" stroke-linecap="round" />
      <path d="M1 9 l8 -8" stroke="currentColor" stroke-linecap="round" />
    </svg>
  </button>
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

<style>
  nav {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--fg, black);
  }

  .logo {
    display: grid;
    place-items: center;
  }

  .logo img {
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

  .navToggled a[target="_blank"],
  a[target="_blank"]:focus,
  a[target="_blank"]:hover {
    background: transparent;
    border-color: var(--fg, gold);
    color: var(--fg, inherit);
    background: transparent;
  }

  .navToggled a[target="_blank"]::after,
  a[target="_blank"]:focus::after,
  a[target="_blank"]:hover::after {
    opacity: 1;
    transform: none;
  }

  a:focus,
  a:hover {
    background: var(--fg, gold);
    color: var(--bg, inherit);
  }

  @media screen and (max-width: 480px) {
    a:focus,
    a:hover {
      background: transparent;
    }

    nav {
      padding: .5rem;
    }

    .logo {
    padding: 0;
    }

    .logo img {
      max-width: 200px;
    }

    .mobile-toggle {
      display: block;
      position: relative;
      z-index: 10;
      transform: translateZ(150px);
    }

    .navToggled .hamburger,
    .X {
      display: none;
    }

    .navToggled .mobile-toggle {
      color: var(--bg);
    }

    .navToggled .X {
      display: block;
    }

    ul {
      display: flex;
      position: fixed;
      inset: 8px;
      border-radius: 8px;
      background: var(--fg);
      color: var(--bg);
      flex-direction: column;
      justify-content: space-around;
      z-index: 5;
      transform-origin: center;
      transform: translateZ(100px) scale(.95);
      padding: 3rem 0;
      margin: 0;
      font-size: 1.5rem;
      box-sizing: border-box;
      opacity: 0;
      pointer-events: none;
      transition: all .08s ease-out;
    }

    .navToggled ul {
      transform: translateZ(100px) scale(1);
      opacity: 1;
      pointer-events: all;
    }

    .navToggled::after {
      content: '';
      position: fixed;
      inset: 0;
      background: var(--bg);
      z-index: 2;
    }

    .navToggled a[target="_blank"] {
      color: var(--bg, white);
      border-color: var(--bg, white);
    }

    .navToggled a[target="_blank"]::after {
      background-color: var(--bg, white);
    }
  }
</style>

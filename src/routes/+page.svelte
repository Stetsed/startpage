<script>
  import { onMount } from "svelte";
  let query = "";
  let searchbox;

  onMount(() => {
    searchbox.focus();
  });

  const search = () => {
    window.location.href = `https://duckduckgo.com/?q=${query}`;
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };
</script>

<div
  class="font-jetbrains h-screen bg-background flex justify-center items-center"
>
  <div class="bg-background rounded-lg shadow px-5 py-4 w-1/2">
    <div class="w-full mx-auto">
      <div class="flex items-center border-b py-2">
        <input
          id="search-box"
          class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search DuckDuckGo"
          aria-label="Search DuckDuckGo"
          bind:value={query}
          bind:this={searchbox}
          on:keyup={handleKeyUp}
        />
      </div>
    </div>
    <div class="h-5" />
    <div class="flex justify-center text-center space-x-10 bg-background">
      <div class="w-1/3 rounded-lg bg-boxbackground p-4">
        <div class="text-ruby p-2 underline underline-offset-3">
          Social Media
        </div>
        <div><a href="https://www.reddit.com">Reddit</a></div>
        <div><a href="https://youtube.com">YouTube</a></div>
        <div><a href="https://discord.com">Discord</a></div>
      </div>
      <div class="w-1/3 rounded-lg bg-boxbackground p-4">
        <div class="text-sapphire p-2 underline underline-offset-3">
          Developing
        </div>
        <div><a href="https://github.com">GitHub</a></div>
        <div><a href="https://stackoverflow.com">Stack Overflow</a></div>
        <div><a href="https://gitlab.com">GitLab</a></div>
      </div>
      <div class="w-1/3 rounded-lg bg-boxbackground p-4">
        <div class="text-emerald p-2 underline underline-offset-3">Extra</div>
        <div><a href="https://duckduckgo.com">DuckDuckGo</a></div>
        <div><a href="https://mail.proton.me">ProtonMail</a></div>
        <div><a href="https://chat.openai.com">ChatGPT</a></div>
      </div>
    </div>
  </div>
</div>

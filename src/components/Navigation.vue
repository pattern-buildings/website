<template>
  <div class="flex justify-center items-stretch my-16">
    <div class="navigation-column text-red-500">
      <h3>Discover</h3>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#about">About</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#principles">Principles</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#projects">Projects</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#faq">FAQ</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#sponsors">Sponsors</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#contributors">Contributors</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/#license">License</g-link>
      </div>
    </div>
    <div class="navigation-column text-green-500">
      <h3>Learn</h3>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/concept">Concept</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/design">Design</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/docs">Docs</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/wiki">Wiki</g-link>
      </div>
    </div>
    <div class="navigation-column text-blue-500">
      <h3>Engage</h3>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/Downloads">Downloads</g-link>
      </div>
      <div>
        <span class="text-xl mr-2">❤</span>
        <g-link to="/contuct-us">Contact us</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navigation-column {
  @apply w-full m-4 py-2 px-4;
}
.navigation-column h3 {
  @apply text-3xl border-b-4 border-current mb-2 pb-2;
}
.navigation-column a {
  @apply text-lg leading-10;
}
.navigation-column a:hover {
  @apply underline;
}
</style>

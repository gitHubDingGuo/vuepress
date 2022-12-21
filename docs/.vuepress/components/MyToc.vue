<template>
  <!-- container -->
  <nav class="vuepress-toc">
    <!-- list -->
    <ul class="vuepress-toc-list">
      <!-- item -->
      <li class="vuepress-toc-item">
        <!-- link -->
        <RouterLink class="vuepress-toc-link" to="#foo">Foo</RouterLink>
      </li>
      <!-- item with children -->
      <li class="vuepress-toc-item">
        <!-- link (children active) -->
        <RouterLink class="vuepress-toc-link active" to="#bar">Bar</RouterLink>
        <!-- list (children) -->
        <ul class="vuepress-toc-list">
          <!-- item -->
          <li class="vuepress-toc-item">
            <!-- link (active) -->
            <RouterLink class="vuepress-toc-link active" to="#bar-child">Bar Child</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>

export default ({
   name:'MyToc'
})
</script>

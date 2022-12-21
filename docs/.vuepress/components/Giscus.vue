<template>
      <CommentService :darkmode="isDarkMode" />
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
const isDarkMode = ref(false);

let observer;
onMounted(() => {
  const html = document.querySelector("html") as HTMLElement;
  isDarkMode.value = html.classList.contains("dark");
  // watch theme change
  observer = new MutationObserver(() => {
       isDarkMode.value = html.classList.contains("dark");
  });
  observer.observe(html, {
        attributeFilter: ["class"],
        attributes: true,
  });

 let pages=document.getElementsByClassName('giscus-wrapper');
 for(var i=0;i<pages.length;i++){
     pages[i].style.maxWidth="none";           
     pages[i].style.margin="0 auto";
     pages[i].style.padding="0 0 0 0";                       
 }

});

onBeforeUnmount(() => {
  observer.disconnect();
});

</script>
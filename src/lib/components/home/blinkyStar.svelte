<script lang="ts">
	import type { star } from "./types/types";

    let stars: star[] = [];
    
    function generateStars(count: number) {
      for (let i = 0; i < count; i++) {
        stars.push({
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          width: Math.random() * 400 + 'px',
          animationDelay: Math.random() * 2 + 's',
          color: `hsl(${Math.random() * 360}, 100%, 80%)`
        });
      }
    }
  
    generateStars(30);
</script>

<style>
.star-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -50;
}

.star {
    position: absolute;
    border-radius: 50%;
    /* width: 140px;
    height: 140px; */
    opacity: 0;
    animation: blink 4s infinite;
    z-index: -50;
}

@keyframes blink {
    0%, 100% { opacity: 0; }
    25%, 75% { opacity: 0.25; }
    50% { opacity: 0.5; }
}
</style>

<div class="star-background">
{#each stars as { top, left, animationDelay, color, width }}
    <div class="star" style={`top: ${top}; left: ${left}; animation-delay: ${animationDelay}; background-color: ${color}; width: ${width}; height: ${width}`}></div>
{/each}
</div>

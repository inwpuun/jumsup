<script lang="ts">
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
  
    interface CardData {
      id: string;
      title: string;
      imageUrl: string;
    }
  
    export let card: CardData;
  
    const cardX = spring(0, {
      stiffness: 0.1,
      damping: 0.25
    });
  
    let isDragging = false;
    let startX: number;
    let startCardX: number;
  
    function handleMouseDown(event: MouseEvent): void {
      isDragging = true;
      startX = event.clientX;
      startCardX = $cardX;
    }
  
    function handleMouseMove(event: MouseEvent): void {
      if (!isDragging) return;
      const dx = event.clientX - startX;
      cardX.set(startCardX + dx);
    }
  
    function handleMouseUp(): void {
      isDragging = false;
      if (Math.abs($cardX) > 100) {
        // Swipe threshold reached, animate out
        const direction = $cardX > 0 ? 1 : -1;
        cardX.set(direction * window.innerWidth);
      } else {
        // Return to center
        cardX.set(0);
      }
    }
  
    $: rotation = $cardX * 0.1;
    $: opacity = 1 - Math.abs($cardX) / 200;
    $: likeOpacity = Math.max(0, Math.min(1, $cardX / 100));
    $: dislikeOpacity = Math.max(0, Math.min(1, -$cardX / 100));
    $: background = $cardX > 0 
      ? `linear-gradient(to left, rgba(0,255,0,${likeOpacity * 0.2}), rgba(0,255,0,0))` 
      : `linear-gradient(to right, rgba(255,0,0,${dislikeOpacity * 0.2}), rgba(255,0,0,0))`;
  </script>
  
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    {#if opacity > 0}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="card"
        style="transform: translateX({$cardX}px) rotate({rotation}deg); opacity: {opacity}; background: {background};"
        on:mousedown={handleMouseDown}
        on:mousemove={handleMouseMove}
        on:mouseup={handleMouseUp}
        on:mouseleave={handleMouseUp}
      >
        <div class="p-6 flex flex-col justify-between h-full">
          <div class="text-2xl font-bold">{card.title}</div>
          <img
            src={card.imageUrl}
            alt={card.title}
            class="w-full h-40 object-cover rounded-md"
          />
          <div class="flex justify-between items-center mt-4">
            <div style="opacity: {dislikeOpacity};">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div style="opacity: {likeOpacity};">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .card {
      width: 16rem;
      height: 20rem;
      background-color: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
      user-select: none;
      cursor: grab;
      position: absolute;
      border: 4px solid #e5e7eb;
    }
  
    .card:active {
      cursor: grabbing;
    }
  </style>
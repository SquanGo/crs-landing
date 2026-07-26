const SVGS = {
  linux: `<svg class="platform-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C20 8 13 18 14 30C15 40 9 45 8 52C7 58 15 59 21 56C25 54 28 53 32 53C36 53 39 54 43 56C49 59 57 58 56 52C55 45 49 40 50 30C51 18 44 8 32 8Z" fill="currentColor"/>
    <ellipse cx="24" cy="27" rx="3" ry="4" fill="white"/>
    <ellipse cx="40" cy="27" rx="3" ry="4" fill="white"/>
    <path d="M27 38C29 40 35 40 37 38" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  windows: `<svg class="platform-icon" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10L29 7V30H5V10Z"/>
    <path d="M34 6L59 3V30H34V6Z"/>
    <path d="M5 34H29V57L5 54V34Z"/>
    <path d="M34 34H59V61L34 58V34Z"/>
  </svg>`,

  android: `<svg class="platform-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 25H44V47C44 51 41 54 37 54H27C23 54 20 51 20 47V25Z" fill="currentColor"/>
    <path d="M16 27V45" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 27V45" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <path d="M26 19L22 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 19L42 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M20 25C20 17 25 12 32 12C39 12 44 17 44 25" fill="currentColor"/>
    <circle cx="27" cy="20" r="1.5" fill="white"/>
    <circle cx="37" cy="20" r="1.5" fill="white"/>
    <path d="M26 54V59" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M38 54V59" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  web: `<svg class="platform-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24"/>
    <path d="M8 32H56"/>
    <path d="M32 8C39 15 42 23 42 32C42 41 39 49 32 56"/>
    <path d="M32 8C25 15 22 23 22 32C22 41 25 49 32 56"/>
  </svg>`,
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('svg-linux').innerHTML = SVGS.linux;
  document.getElementById('svg-windows').innerHTML = SVGS.windows;
  document.getElementById('svg-android').innerHTML = SVGS.android;
  document.getElementById('svg-web').innerHTML = SVGS.web;
});

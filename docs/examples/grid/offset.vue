<template>
  <div class="grid-demo">
    <div class="space-vertical">
      <div class="row">
        <div class="col-8">col - 8</div>
        <div class="col-8 col-offset-8">col - 8 | offset - 8</div>
      </div>
      <div class="row">
        <div class="col-6 col-offset-8">col - 6 | offset - 8</div>
        <div class="col-6 col-offset-4">col - 6 | offset - 4</div>
      </div>
      <div class="row">
        <div class="col-12 col-offset-8">col - 12 | offset - 8</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid-demo .row {
  --at-apply: bg-gray-200;
}
.grid-demo .row [class*="col-"] {
  --at-apply: h-12 lh-12 c-white text-center;
}

.grid-demo .row [class*="col-"]:nth-child(2n) {
  --at-apply: bg-primary;
}

.grid-demo .row [class*="col-"]:nth-child(2n+1) {
  --at-apply: bg-primary op-60;
}
</style>

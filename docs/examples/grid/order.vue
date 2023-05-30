<template>
  <div class="grid-demo">
    <div class="row">
      <div class="col-6 order-4">1 col-order-4</div>
      <div class="col-6 order-3">2 col-order-3</div>
      <div class="col-6 order-2">3 col-order-2</div>
      <div class="col-6 order-1">4 col-order-1</div>
    </div>
  </div>
</template>

<style scoped>
.grid-demo .row [class*="col-"] {
  --at-apply: h-10 lh-10 c-white text-center;
}

.grid-demo .row [class*="col-"]:nth-child(2n) {
  --at-apply: bg-primary;
}

.grid-demo .row [class*="col-"]:nth-child(2n+1) {
  --at-apply: bg-primary op-60;
}
</style>

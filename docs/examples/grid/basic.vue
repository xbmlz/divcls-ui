<template>
  <div class="grid-demo ">
    <div class="space-vertical flex">
      <div class="row">
        <div class="col-24">24 - 100%</div>
      </div>
      <div class="row">
        <div class="col-12">12 - 50%</div>
        <div class="col-12">12 - 50%</div>
      </div>
      <div class="row">
        <div class="col-8">8 - 33.33%</div>
        <div class="col-8">8 - 33.33%</div>
        <div class="col-8">8 - 33.33%</div>
      </div>
      <div class="row">
        <div class="col-6">6 - 25%</div>
        <div class="col-6">6 - 25%</div>
        <div class="col-6">6 - 25%</div>
        <div class="col-6">6 - 25%</div>
      </div>
      <div class="row">
        <div class="col-4">4 - 16.66%</div>
        <div class="col-4">4 - 16.66%</div>
        <div class="col-4">4 - 16.66%</div>
        <div class="col-4">4 - 16.66%</div>
        <div class="col-4">4 - 16.66%</div>
        <div class="col-4">4 - 16.66%</div>
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

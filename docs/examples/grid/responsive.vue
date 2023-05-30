<template>
  <div class="grid-demo">
    <div class="space-vertical">
      <div class="row">
        <div class="col-sm-4 col-md-6 col-lg-8 col-xl-10">col</div>
        <div class="col-sm-16 col-md-12 col-lg-8 col-xl-4">col</div>
        <div class="col-sm-4 col-md-6 col-lg-8 col-xl-10">col</div>
      </div>
      <div class="row">
        <div class="col-sm-5-offset-1 col-lg-6-offset-2">col</div>
        <div class="col-sm-11-offset-1 col-lg-6-offset-2">col</div>
        <div class="col-sm-5-offset-1 col-lg-6-offset-2">col</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

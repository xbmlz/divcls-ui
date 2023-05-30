<template>
  <div class="grid-demo">
    <p>Horizontal</p>
    <div class="row row-gutter-24">
      <div class="col-12">
        <div>col - 12</div>
      </div>
      <div class="col-12">
        <div>col - 12</div>
      </div>
    </div>
    <p>Responsive</p>
    <div class="row row-gutter-md-8 row-gutter-lg-24 row-gutter-xl-32">
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
    </div>
    <p>Horizontal and Vertical</p>
    <div class="row row-gutter-24-12">
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
      </div>
      <div class="col-6">
        <div>col - 6</div>
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

.grid-demo .row [class*="col-"] > div{
  --at-apply: flex items-center justify-center h-full;
}

.grid-demo .row [class*="col-"]:nth-child(2n) > div {
  --at-apply: bg-primary;
}

.grid-demo .row [class*="col-"]:nth-child(2n+1) > div {
  --at-apply: bg-primary op-60;
}
</style>

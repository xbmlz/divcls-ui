<template>
  <div class="grid-demo">
    <p>Arrange top</p>
    <div class="row justify-start">
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
    <p>Arrange center</p>
    <div class="row items-center">
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
    <p>Arrange bottom</p>
    <div class="row items-end">
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
/* row col-* */
.grid-demo .row [class*="col-"] {
  --at-apply: h8 lh-8 c-white text-center;
}

.grid-demo:last-child {
  --at-apply: mb-0;
}

.grid-demo .row [class*="col-"]:nth-of-type(1) {
  --at-apply: h16 lh-16;
}
.grid-demo .row [class*="col-"]:nth-of-type(2) {
  --at-apply: h10 lh-10;
}
.grid-demo .row [class*="col-"]:nth-of-type(3) {
  --at-apply: h20 lh-20;
}
.grid-demo .row [class*="col-"]:nth-of-type(4) {
  --at-apply: h-12 lh-12;
}

.grid-demo .row [class*="col-"]:nth-child(2n) {
  --at-apply: bg-primary;
}

.grid-demo .row [class*="col-"]:nth-child(2n+1) {
  --at-apply: bg-primary op-60;
}
</style>

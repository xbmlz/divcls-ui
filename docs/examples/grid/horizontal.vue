<template>
  <div class="grid-demo">
    <p>Arrange left</p>
    <div class="row justify-start">
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
    </div>
    <p>Arrange center</p>
    <div class="row justify-center">
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
    </div>
    <p>Arrange right</p>
    <div class="row justify-end">
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
    </div>
    <p>Space around</p>
    <div class="row justify-around">
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
    </div>
    <p>Space between</p>
    <div class="row justify-between">
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
      <div class="col-4">
        <div>col - 4</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid-demo .row {
  --at-apply: bg-gray-200;
}
.grid-demo .row [class*="col-"] {
  --at-apply: h-10 lh-10 c-white text-center;
}

.grid-demo .row [class*="col-"]:nth-child(2n) > div {
  --at-apply: bg-primary;
}

.grid-demo .row [class*="col-"]:nth-child(2n+1) > div {
  --at-apply: bg-primary op-60;
}
</style>

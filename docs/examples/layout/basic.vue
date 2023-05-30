<template>
  <div class="layout-demo">
    <div class="layout h-400px">
      <div class="layout-header">Header</div>
      <div class="layout-content">Content</div>
      <div class="layout-footer">Footer</div>
    </div>
    <br />
    <div class="layout h-400px">
      <div class="layout-header">Header</div>
      <div class="layout flex-row">
        <div class="layout-sider">Sider</div>
        <div class="layout-content">Content</div>
      </div>
      <div class="layout-footer">Footer</div>
    </div>
    <br />
    <div class="layout h-400px">
      <div class="layout-header">Header</div>
      <div class="layout flex-row">
        <div class="layout-content">Content</div>
        <div class="layout-sider">Sider</div>
      </div>
      <div class="layout-footer">Footer</div>
    </div>
  </div>
</template>
<style scoped>
.layout-demo .layout-header,
.layout-demo .layout-sider,
.layout-demo .layout-content,
.layout-demo .layout-footer {
  --at-apply: flex flex-col justify-center c-white text-center text-xl;
}

.layout-demo .layout-header,
.layout-demo .layout-footer {
  --at-apply: h-64px bg-primary op-80;
}

.layout-demo .layout-sider {
  --at-apply: w-200px bg-primary op-70;
}

.layout-demo .layout-content {
  --at-apply: bg-primary;
}
</style>

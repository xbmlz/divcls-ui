<template>
  <div class="space">
    <div class="card card-hoverable w-360px">
      <div class="card-cover">
        <img
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
          alt="dessert">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <div class="card-meta-content">
            <div class="card-meta-title">Card Title</div>
            <div class="card-meta-desc">
              This is the description
            </div>
          </div>
          <div class="card-meta-footer">
            <div class="flex items-center">
              <div class="avatar bg-primary w-28px h-28px text-12px">
                <span class="i-ri-user-3-line"></span>
              </div>
              <span class="ml-2">Username</span>
            </div>
            <div class="card-actions">
              <div class="icon-hover">
                <span class="i-ri-thumb-up-line"></span>
              </div>
              <div class="icon-hover">
                <span class="i-ri-share-forward-line"></span>
              </div>
              <div class="icon-hover">
                <span class="i-ri-more-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon-hover {
  --at-apply: flex items-center justify-center w-24px h-24px rounded-full cursor-pointer ml-8px children:(w-16px h-16px c-neutral-6 hover:(bg-primary-hover)) hover:(bg-gray-2);
}
</style>

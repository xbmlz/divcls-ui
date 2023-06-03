<template>
  <div class="space">
    <div class="card card-hoverable w-360px">
      <div class="card-header">
        <div class="card-header-title">Default hover style</div>
        <div class="card-header-extra">
          <button class="btn btn-mini btn-link btn-primary">More</button>
        </div>
      </div>
      <div class="card-body">
        Card content <br />
        Card content <br />
        Card content
      </div>
    </div>

    <div class="card card-hoverable w-360px hover:(transition-all -translate-y-4px)">
      <div class="card-header">
        <div class="card-header-title">Custom hover style</div>
        <div class="card-header-extra">
          <button class="btn btn-mini btn-link btn-primary">More</button>
        </div>
      </div>
      <div class="card-body">
        Card content <br />
        Card content <br />
        Card content
      </div>
    </div>
  </div>
</template>

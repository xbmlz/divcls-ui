export default function Layout() {
  return (
    <div>
      {/* 分割线 */}
      <div>
        <h1 class="text-2xl my-2">分割线 Divider</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <div class="divider"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <div class="divider divider-dashed"></div>
          <span>Item 1</span>
          <div class="divider-v"></div>
          <span>Item 2</span>
          <div class="divider-v"></div>
          <span>Item 3</span>

          <p>A design is a plan or specification for the construction of an object.</p>
          <div class="divider">
            <span class="divider-text-left">Text</span>
          </div>
          <p>A design is a plan or specification for the construction of an object.</p>
          <div class="divider">
            <span class="divider-text-right">Text</span>
          </div>
          <p>A design is a plan or specification for the construction of an object.</p>
          <div class="divider">
            <span class="divider-text">Text</span>
          </div>
        </div>
      </div>
      {/* 栅格 */}
      <div>
        <h1 class="text-2xl my-2">Grid 栅格</h1>
        <div class="divider">
          <span class="divider-text-left">基础栅格</span>
        </div>
        <div class="row">
          <div class="col-24">
            <div class="p-2 bg-blue-6">col-24</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="p-2 bg-blue-4">col-12</div>
          </div>
          <div class="col-12">
            <div class="p-2 bg-blue-6">col-12</div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="p-2 bg-blue-4">col-8</div>
          </div>
          <div class="col-8">
            <div class="p-2 bg-blue-6">col-8</div>
          </div>
          <div class="col-8">
            <div class="p-2 bg-blue-4">col-8</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="p-2 bg-blue-4">col-6</div>
          </div>
          <div class="col-6">
            <div class="p-2 bg-blue-6">col-6</div>
          </div>
          <div class="col-6">
            <div class="p-2 bg-blue-4">col-6</div>
          </div>
          <div class="col-6">
            <div class="p-2 bg-blue-6">col-6</div>
          </div>
        </div>

        <div class="divider">
          <span class="divider-text-left">栅格偏移</span>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="p-2 bg-blue-4">col - 8</div>
          </div>
          <div class="col-8 col-offset-8">
            <div class="p-2 bg-blue-6">col - 8 | offset - 8</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-offset-8">
            <div class="p-2 bg-blue-4">col - 6 | offset - 8</div>
          </div>
          <div class="col-6 col-offset-4">
            <div class="p-2 bg-blue-6">col - 6 | offset - 4</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-offset-8">
            <div class="p-2 bg-blue-4">col - 12 | offset - 8</div>
          </div>
        </div>

        <div class="divider">
          <span class="divider-text-left">区块间隔</span>
        </div>
        <div class="row row-gutter-16">
          <div class="col-12">
            <div class="p-2 bg-blue-4">col - 12</div>
          </div>
          <div class="col-12">
            <div class="p-2 bg-blue-6">col - 12</div>
          </div>
        </div>
      </div>
      <div>
        {/* <h1 class="text-2xl my-2">Grid 栅格</h1>
        <div class="divider">
          <span class="divider-text-left">基础用法</span>
        </div>
        <div class="grid-4 grid-gap-x-12">
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
        </div> */}

        {/* <div class="divider">
          <span class="divider-text-left">间隔</span>
        </div>
        <div class="grid-4 grid-gap-x-12 grid-gap-y-8">
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col">
            <div class="bg-blue-6 h30"></div>
          </div>
        </div> */}

        {/* <div class="divider">
          <span class="divider-text-left">偏移</span>
        </div>
        <div class="grid-4 grid-gap-x-12">
          <div class="grid-col grid-col-offset-1">
            <div class="bg-blue-4 h30"></div>
          </div>
          <div class="grid-col grid-col-offset-1">
            <div class="bg-blue-6 h30"></div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

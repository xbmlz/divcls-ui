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
        {/* 基础栅格 */}
        <div class="divider">
          <span class="divider-text-left">基础栅格</span>
        </div>
        <div class="row">
          <div class="col-24">
            <div>col-24</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div>col-12</div>
          </div>
          <div class="col-12">
            <div>col-12</div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div>col-8</div>
          </div>
          <div class="col-8">
            <div>col-8</div>
          </div>
          <div class="col-8">
            <div>col-8</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div>col-6</div>
          </div>
          <div class="col-6">
            <div>col-6</div>
          </div>
          <div class="col-6">
            <div>col-6</div>
          </div>
          <div class="col-6">
            <div>col-6</div>
          </div>
        </div>

        <div class="divider">
          <span class="divider-text-left">栅格偏移</span>
        </div>
        <div class="row">
          <div class="col-8">
            <div>col - 8</div>
          </div>
          <div class="col-8 col-offset-8">
            <div>col - 8 | offset - 8</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-offset-8">
            <div>col - 6 | offset - 8</div>
          </div>
          <div class="col-6 col-offset-4">
            <div>col - 6 | offset - 4</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-offset-8">
            <div>col - 12 | offset - 8</div>
          </div>
        </div>

        <div class="divider">
          <span class="divider-text-left">区块间隔</span>
        </div>
        <p>Horizontal</p>
        <div class="row row-gutter-16">
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

        <div class="divider">
          <span class="divider-text-left">水平布局</span>
        </div>
        <p>Arrange left</p>
        <div class="row row-start">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Arrange center</p>
        <div class="row row-jc">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Arrange right</p>
        <div class="row row-je">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Space around</p>
        <div class="row row-jsa">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Space between</p>
        <div class="row row-jsb">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <div class="divider">
          <span class="divider-text-left">垂直布局</span>
        </div>
        <p>Arrange top</p>
        <div class="row row-is">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Arrange center</p>
        <div class="row row-ic">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>

        <p>Arrange bottom</p>
        <div class="row row-ie">
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
          <div class="col-4">
            <div>col-4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

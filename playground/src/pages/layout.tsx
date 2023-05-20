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
      </div>
    </div>
  )
}

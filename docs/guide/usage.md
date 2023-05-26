---
title: Use
description: Add component classes to your HTML
---

# Add component classes to your HTML

How to use divclsUI classes to style your page?

Once you [installed](/guide/install.md) divclsUI, you can use the component classes in your anyone project like HTML, Vue, React, Angular, etc.

1. So instead of making a button using only utility classes:

```html
<button class="relative inline-flex items-center justify-center box-border font-400 truncate cursor-pointer select-none transition-1 bg-neutral-2 c-neutral-8 b-1px b-solid b-transparent hover:bg-neutral-3 active:bg-neutral-4 h-8 text-sm px-4 rd-sm">Button</button>
```
<button class="relative inline-flex items-center justify-center box-border font-400 truncate cursor-pointer select-none transition-1 bg-neutral-2 c-neutral-8 b-1px b-solid b-transparent hover:bg-neutral-3 active:bg-neutral-4 h-8 text-sm px-4 rd-sm">Button</button>

2. You can just use a component class like this:

```html
<button class="btn">Button</button>
```
<button class="btn">Button</button>

3. Then you can modify the component with daisyUI additional utility classes:

```html
<button class="btn btn-primary">Button</button>
```
<button class="btn btn-primary">Button</button>

4. Or you can modify the component with UnoCSS utility classes:

```html
<button class="btn btn-primary w-64 rd-full">Button</button>
```
<button class="btn btn-primary w-64 rd-full">Button</button>

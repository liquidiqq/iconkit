<p align="center">
  <a href="https://github.com/liquidiqq/iconkit" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/18516326/211879247-75111eac-a99a-46ac-981c-076cf363a833.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/18516326/211878662-e0696425-1abb-43bb-bd0b-b589f9db8148.svg">
      <img alt="Iconkit" src="https://user-images.githubusercontent.com/18516326/211878662-e0696425-1abb-43bb-bd0b-b589f9db8148.svg" width="190"  style="max-width: 100%">
    </picture>
  </a>
</p>

<p align="center">
Community icons for the Svelte ecosystem.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img src="https://img.shields.io/npm/dw/@liquidiqq/iconkit" alt="NPM Downloads"></a>
  <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img src="https://img.shields.io/npm/v/@liquidiqq/iconkit?color=%23cb3737&logo=npm" alt="NPM Latest Release"></a>
  <!-- <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@liquidiqq/iconkit"></a> -->
  <a href="https://github.com/liquidiqq/iconkit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/liquidiqq/iconkit" alt="License"></a>
</p>

> **Note**
> Iconkit's website for browsing icons is coming soon.

---

<br />

## About

Iconkit is meant to be used with Svelte or SvelteKit. It's a collection of community icons from different sources, including [Heroicons](https://heroicons.com/), [Ionicons](https://ionicons.com/) brand logos, and icons made by Iconkit.

## Features

- Heroicons and Ionicons brand logos out of the box
- Add your svg logos, and custom icons in three modes: `outline`, `solid`, and `mini`
- Full tree-shaking (only used icons are bundled)
- Works with or without Tailwindcss

<br />

## Getting started

### Install via CLI

```bash
npx iconkit-cli
```

The CLI will install Iconkit, add the required classes, and import them to your `+layout.svelte` so you can start using Iconkit right away:

```html
<!-- +page.svelte or component.svelte -->

<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="face-smile" />
```

<br />

### Install manually (skipping the CLI)

#### step 1. Install Iconkit:
```bash
npm install -D @liquidiqq/iconkit
```
#### step 2. Add classes:
Copy below classes to your global stylesheet e.g. `app.css`/`app.postcss` if you are not using Tailwindcss:

> **Note**
> If you are using Tailwindcss, you can skip this step as Tailwindcss already has these classes.

```css
/* app.css` or `app.postcss */

/* --- Iconkit regular icon size --- */
.h-6 {
  height: 1.5rem;
}
.w-6 {
  width: 1.5rem;
}

/* --- Iconkit mini icon size --- */
.h-5 {
  height: 1.25rem;
}
.w-5 {
  width: 1.25rem;
}
```

Now you can use Iconkit:

```html
<!-- +page.svelte or component.svelte -->

<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="face-smile" />
```

---

<br />

## Props

| **Name**                    |  **Type** | **Default value** | **Description**                                              |
|-----------------------------|:---------:|:-----------------:|--------------------------------------------------------------|
| **Component props:**        |           |                   |                                                              |
| `name`                      |  `string` |         -         | Name of icon, e.g. `"gift"` or `"svelte-logo"`              |
| `mode`                      |  `string` |    `outline`    | Sets mode of icon. Accepts: `outline \| solid \| mini` |
| `strokeWidth`               |  `string` |         -         | Sets current icon's stroke width                             |
| `noDefaultSize`             | `boolean` |      `false`      | Disables current icon's global size (`height` and `width`)   |
| **Stroke global settings:** |           |                   |                                                              |
| `$defaultStrokeWidth`       |  `string` |      `1.5`      | Sets global stroke width for all outline icons               |
| `$loadingStrokeWidth`       |  `string` |         -         | If not set, gets `$defaultStrokeWidth`'s value (`"1.5"`)             |
| **Size global settings:**   |           |                   |                                                              |
| `$defaultSizes`             | `boolean` |       `true`      | Disables global sizes for `regular` and `mini`               |
| `$regularSize`              |  `string` |    `"h-6 w-6"`    | Sets global `regular` size                                   |
| `$miniSize`                 |  `string` |    `"h-5 w-5"`    | Sets global `mini` size                                      |

<br />

---

## Documentation

### Basic usage

```html
<!-- +page.svelte or component.svelte -->

<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="face-smile" />
```


### Icon sources and optimizations

All icons are manually optimized for SvelteKit and adopted to `24px` by `24px`, and `20px` by `20px` from [Heroicons](https://heroicons.com/) and [Ionicons](https://ionic.io/ionicons/). Search icon names [here](https://heroicons.com/) until Iconkit's website is launched. Search major brand logo names [here](https://ionic.io/ionicons/). Logo icon names are suffixed with `-logo`. For example, `svelte-logo`:

```html
<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="svelte-logo" />
<Icon name="github-logo" />
<Icon name="discord-logo" />
<Icon name="apple-logo" />
```

### Modes
All icons have `outline`, `solid`, and `mini` modes. If not defined, default is `outline`:

```html
<Icon name="bell-alert" mode="solid" />
```


### Global stroke width

To change the global stroke width, use the `$defaultStrokeWidth` store. For auto sub and unsub use the `$` syntax:

```html
<script>
  import { defaultStrokeWidth, Icon } from '@liquidiqq/iconkit'

  $defaultStrokeWidth = "4"
</script>

<Icon name="flag" />
```

This will change the stroke width of all icons across the app. It provides the flexibility to match your theme aesthetics. If you have a global place for your app settings, it's best to place it there, e.g. `+layout.svelte`, or any `globalSettings` file and initialize it in `layout`.


### Single icon stroke width

To change a single icon's stroke width use the `strokeWidth` prop, this will only change the current icon's stroke width:

```html
<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="credit-card" strokeWidth="2" />
```

<br />

---

### Icon sizing

#### Global icon sizes

Icons are sized using Tailwindcss classes. Regular icon size is `h-6 w-6` and mini icon size is `h-5 w-5`. To change these global sizes with Tailwindcss, use the `$regularSize`, and `$miniSize` stores:

```html
<script>
  import { regularSize, miniSize } from '@liquidiqq/iconkit'

  $regularSize = "h-8 w-8"
  $miniSize = "h-7 w-7"
</script>
```

This will affect all icon sizes across your app. It gives you the ability to keep your design system intact.

If you are not using Tailwindcss, you can change the `height` and `width` values for `h-6 w-6` and `h-5 w-5` classes:

> **Warning**
> Not recommended if Tailwindcss is installed, it may override Tailwindcss default classes.

```css
/* do this only if you are NOT using tailwindcss */

/* --- Iconkit regular icon size --- */
.h-6 {
  height: 1.5rem; /* add your value */
}
.w-6 {
  width: 1.5rem; /* add your value */
}

/* --- Iconkit mini icon size --- */
.h-5 {
  height: 1.25rem; /* add your value */
}
.w-5 {
  width: 1.25rem; /* add your value */
}
```

If you have your own theme classes for sizing, assign them to `$regularSize` and `$miniSize`:


```html
<!-- +layout.svelte -->

<script>
  import { regularSize, miniSize, Icon } from '@liquidiqq/iconkit'

  $regularSize = "your-theme-regular-size"
  $miniSize = "your-theme-mini-size"
</script>

<Icon name="fire" />
<Icon name="fire" mode="mini" />
```

```css
/* your theme.css or app.css */

  .your-theme-regular-size {
    height: 2.5rem;
    width: 2.5rem;
  }
  .your-theme-mini-size {
    height: 2rem;
    width: 2rem;
  }
```

To disable global sizing for all icons, set `$defaultSizes` store to `false`, however, you will have to manually set the size for each icon which is not recommended as it can lead to inconsisent styling, but the option is there if you need it:

> **Warning**
> Not advised, instead, define your own classes for $regularSize and $miniSize.

```html
<script>
  import { defaultSizes } from '@liquidiqq/iconkit'

  $defaultSizes = false
</script>
```

It is not recommended to disable the default sizes, instead, define your own classes for `$regularSize` and `$miniSize`:

```html
<script>
  import { regularSize, miniSize } from '@liquidiqq/iconkit'

  $regularSize = "custom-regular-size"
  $miniSize = "custom-mini-size"
</script>
```

#### Single icon sizing

Simply add the `noDefaultSize` prop without assigning any value (shown below), now you can add `height` and `width` as you like, e.g. either through native attributes such as `style` or `class`. This will only change the current icon's size and not affect other icons, good for one-offs, e.g. hero section logo, card header logo, etc:

```html
<Icon name="fire" class="h-12 w-12" noDefaultSize />
```

<br />

---

### Colors

By default, colors are set to `currentColor`, which means the icon inherits the parent's color:

```html
<div class="text-slate-500">
  <!-- Icon inherits parent's color -->
  <Icon name="gift" />
</div>
```

To assign a color to an icon:

```html
<Icon name="globe" class="text-pink-500" />
```

<br/>

### Loading icon

A simple loading icon is shipped with Iconkit.

```html
<Icon name="loading-circle" />
```

### Change loading icon's stroke width

You can change the loading icon's global stroke width using the `$loadingStrokeWidth` store, this is a global setting and will affect all loading icons across the app:

```html
<script>
  import { loadingStrokeWidth, Icon } from '@liquidiqq/iconkit'

  $loadingStrokeWidth = "2"
</script>

<Icon name="loading-circle" />
```

### Change single loading icon's stroke width

To change the stroke width of a single loading icon, use the `strokeWidth` prop, this will not affect other loading icons:

```html
<script>
  import { Icon } from '@liquidiqq/iconkit'
</script>

<Icon name="loading-circle" strokeWidth="2" />
```

<br/>

## Custom icons

> **Note**
> Adding custom icons to Iconkit requires familiarity with SVG.

### Custom icon sets
Iconkit offers 2 types of sets for users to add custom icons, `brand` and `extra` sets. Each type has 4 variants, the `default` variant, and the `outline`, `solid`, and `mini` variants.

The default variant is flexible. It takes any size and color, giving you the ability to add compex logos and icons in your app.

The other 3 variants `outline`, `solid`, and `mini` follow a strict API. They need to adhere to `24x24` and `20x20` in dimentions. It has the default color of `currentColor`. These properties are meant to be configured via the global [props](https://github.com/liquidiqq/iconkit#props). Check the docs for more on [props](https://github.com/liquidiqq/iconkit#props).

### Variants
**1- Default variant**: is recommneded for:
  - complex logos and icons
  - any size but it should be specified via the `viewBox` key with a value in `"0 0 0 0"` pattern
  - any color, flat or gradient

**2- Outline, solid, and mini variants:** is recommended for:
  - UI development
  - strict size of `24x24` and `20x20` (for mini)
  - color is set to `currentColor` by default, configurable via the global [props](https://github.com/liquidiqq/iconkit#props)

### `outline`, `solid`, and `mini` Variants
Since the default variant does not require any prepping, you can simply add the `viewBox`, and
svg data to the relevant icon set, in this case, `brandIcons`, or `extraIcons`, and you are good to go. The 3 other variants require minimal adjustment. Iconkit takes care of these adjustments under the hood. So if you skip them, they will be taken care of.

Remove the following attributes from the svg data of the `outline`, `solid`, and `mini` variants:
- `fill` attribute
- `storke` attribute
- `stroke-width` attribute

For example:
```html
<path fill="#FF3E00" fill-rule="evenodd" clip-rule="evenodd" ... /> <!-- remove only fill, not the fill-rule and clip-rule -->

<path stroke="#09ff00" stroke-width="2" fill-rule="evenodd" clip-rule="evenodd" ... /> <!-- remove only stroke, and stroke-width -->
```

❌	INCORRECT:

```html
<path fill="#FF3E00" fill-rule="evenodd" clip-rule="evenodd" ... />
```

✅	CORRECT:

````html
<path fill-rule="evenodd" clip-rule="evenodd" ... />
````

In case if the above attributes are not removed from the svg data, Iconkit will remove them since these will be handled via the props.

**Adjust `viewBox` for `outline` and `solid` variants:**
- Adjust the `viewBox` to `"0 0 24 24"` of your icon in Figma or the software of your choice, if the icon is not 1:1, then either the `height` or `width` should be `24`.

**Adjust `viewBox` for `mini` variant:**
- Adjust the `viewBox` to `"0 0 20 20"` of your icon in Figma or the software of your choice, if the icon is not 1:1, then either the `height` or `width` should be `20`.

### Choosing the right variant
You can add your custom icons (`brand`, or `extra`) as you like, but it's recommended to use the **Brand icon sets** for brand or site logos, yours or your client's. And use the **Extra icon sets** for custom icons required by your app, below are some tips:

* Client logo with colors - add to `brandIcons`
* My own brand logo in outline - add to `brandOutline`
* Pizza slice icon in outline and solid - add to `extraOutline`, and `extraSolid`
* Client logo in solid - add to `brandSolid`
* Small arrow down icon - if meets the mini variant requirements add to `extraMini`
* My client want his client's logo with colors - add to  `extraIcons`
* Umbrella icon with 3 variants - add to `extraOutline`, `extraSolid`, and `extraMini`
* Different Github logo in color - add to  `extraIcons`

This way, your custom icons will take a consistent shape and structure, and will be easily accessible via the `<Icon name="my-custom-icon" />` component.


### How to add custom icons

**STEP 1:**

Copy everything between the opening and closing `<svg>` tags:

```html
<svg viewBox="0 0 48 120" >
<!-- COPY START -->
  <g>
  	<path ... />
  	<circle ... />
  </g>
  	<rect ... />
    <path ... />
  	...
<!-- COPY END -->
</svg>
```

**STEP 2:**

Paste your svg data inside the backticks of the `path` key in the correspoding icon set, in this case, `brandIcons`:

```js
brandIcons.set({
	"your-brand-name": {
		path: `PASTE HERE`
	}
})
```

✅	CORRECT:

```js
path: `<path ... /><circle ... /><rect ... />`
```

❌	INCORRECT:

```js
// do not include the <svg> tags
path: `<svg><path ... /><path ... /><path ... />...</svg>`
```



> **Note**
> If you forget to remove the openning and closing `<svg>` tags, Iconkit will remove them as it natively provides the `<svg>` wrapper with global [props](https://github.com/liquidiqq/iconkit#props).

Then in your `+page.svelte` or `component.svelte`:

```html
<script>
	import { Icon } from "@liquidiqq/iconkit"
</script>

<Icon name="your-brand-name" />
```

### Anatomy of custom icon sets

```js
brandIcons.set({  //	icon set name, `brandIcons` `extraMini` etc
	"your-brand-name": {  // icon name, recommended naming convention: kebab-case, e.g. "brand", "brand-colored", "brand-main"
		viewBox: "",  // required only if your icon is not 24x24 e.g. "0 0 22 113", if it's 24x24, don't need to add this property
		path: `paste here`  // paste your svg data inside the backticks
	}
})
```

**PRO TIP: Some svg datas are lengthy and hard to read, e.g.:**

```js
brandIcons.set({
    "icon-one": {
      path: `
        <path ...this part gets large with complex icons />
        <circle ... />
        <rect ... />
        ...
      `
    },
    "icon-two": {
      path: `
        <g>
          <path ...complex path />
          <path ...complex path />
          <path ...complex path />
          ...
        </g>
      `
    }
})
```

To make it more readable, you can put them in one line and turn on `word-wrap` with `alt+z` in vscode:

```js
brandIcons.set({
    "icon-one": {
      path: `<path ... /><circle ... /><rect ... />`
    },
    "icon-two": {
      path: `<g><path ... /><path ... /><path ... />...</g>`
    }
})
```

Or even better:

```js
brandIcons.set({
    "icon-one": {path: `<path ... /><circle ... /><rect ... />`},
    "icon-two": {path: `<g><path ... /><path ... /><path ... />...</g>`}
})
```

<br/>

## Browsing icons

Iconkit website coming soon.

<br/>

## License

[MIT](LICENSE).
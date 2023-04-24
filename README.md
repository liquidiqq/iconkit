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


<div align="center" style="margin:auto;width:400px;color:rgba(244,120,0,1);background-color:rgba(255,220,0,0.12);border-radius:7px;padding:10px 10px"><strong>Iconkit's website for browsing icons is coming soon.</strong></div>

<br />

---

<br />

## Installation

```bash
# Svelte/SvelteKit is required
npm create svelte@latest [your-app]

# Tailwindcss is optional
npx svelte-add@latest tailwindcss

# Install Iconkit
npm install -D @liquidiqq/iconkit
```


Copy below classes to your global stylesheet e.g. `app.css`/`app.postcss` if you are not using Tailwindcss:

> **Note**
> If you are using Tailwindcss, you can skip this step as Tailwindcss already has these classes.

```css
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

<br />

---

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

## Quick start

### Usage

```html
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

## Icon sizing

### Global icon sizes

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

I have you your own theme classes for sizing, assign them to `$regularSize` and `$miniSize`:


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
/* your theme.css */

  .your-theme-regular-size {
    height: 2.5rem;
    width: 2.5rem;
  }
  .your-theme-mini-size {
    height: 2rem;
    width: 2rem;
  }
```

To disable global sizing, set `$defaultSizes` store to `false`, however, you will have to manually set the size for each icon which is not recommended as it can lead to inconsisent styling, mainly for `mini` sizes:

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

### Single icon sizing

Simply add the `noDefaultSize` prop without assigning any value (shown below), now you can add `height` and `width` as you like, e.g. either through native attributes such as `style` or `class`. This will only change the current icon's size and not affect other icons, good for one-offs, e.g. hero section logo, card header logo, etc:

```html
<Icon name="fire" class="h-12 w-12" noDefaultSize />
```

<br />

---

## Colors

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

## Loading icon

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

## Adding brand and custom icons

Coming soon.

<br/>

## Browsing icons

Iconkit website coming soon.

<br/>

## License

[MIT](LICENSE).

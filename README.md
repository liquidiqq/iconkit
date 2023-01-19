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
Handpicked community icons for the Svelte ecosystem.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img src="https://img.shields.io/npm/dw/@liquidiqq/iconkit" alt="NPM Downloads"></a>
  <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img src="https://img.shields.io/npm/v/@liquidiqq/iconkit?color=%23cb3737&logo=npm" alt="NPM Latest Release"></a>
  <a href="https://www.npmjs.com/package/@liquidiqq/iconkit"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@liquidiqq/iconkit"></a>
  <a href="https://github.com/liquidiqq/iconkit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/liquidiqq/iconkit" alt="License"></a>

</p>

<div align="center">
	<strong>Browsing icons and documentation coming soon.</strong>
</div>

---

## Installation

```bash
# Svelte/SvelteKit is required
npm create svelte@latest [your-app]

# Tailwindcss is optional
npx svelte-add@latest tailwindcss

# Install Iconkit
npm install -D @liquidiqq/iconkit
```


## Properties

| **Name**                    | **Type**  | **Default value** | **Description**                                        |
|-----------------------------|-----------|-------------------|--------------------------------------------------------|
| **Component Props:**        |           |                   |                                                        |
| `name`                      | `string`  | -                 | Name of icon, e.g. "gift", or "svelte-logo"            |
| `mode`                      | `string`  | `"outline"`       | Sets mode of icon. Accepts: `outline \| solid \| mini` |
| `strokewidth`               | `string`  | -                 | Sets current icon's stroke width                       |
| **Stroke global settings:** |           |                   |                                                        |
| `$strokeWidth`               | `string`  | `"1.5"`           | Sets global stroke with for all outline icons          |
| `$loadingStrokeWidth`        | `string`  | -                 | If not set, gets `strokeWidth`'s value (`"1.5"`)       |
| **Size global settings:**   |           |                   |                                                        |
| `defaultSizes`              | `boolean` | `true`            | Disable's global sizes for `regular` and `mini`        |
| `$regularSize`               | `string`  | `"h-6 w-6"`       | Sets global `regular` size                             |
| `$miniSize`                  | `string`  | `"h-5 w-5"`       | Sets global `mini` size                                |
|                             |           |                   |                                                        |


## Quick Start

### Usage

```html
<script>
	import { Icon } from '@liquidiqq/iconkit';
</script>

<Icon name="face-smile">
```


### Icon Sources and Optimizations

All icons are manually optimized for SvelteKit and adopted to `24px` by `24px`, and `20px` by `20px` viewBox sizes.

All Heroicons are included. Search icon names [here](https://heroicons.com/) until Iconkit's website is launched. Logos are from [Ionicons](https://ionic.io/ionicons/). Logo icon names are suffixed with `-logo`. For example, `svelte-logo`:

```html
<Icon name="svelte-logo">
<Icon name="github-logo">
<Icon name="discord-logo">
<Icon name="apple-logo">
```


### Modes
Modes are `outline`, `solid`, and `mini`. If not defined, default is `outline`:

```html
<Icon name="bell-alert" mode="solid">
```


### Global Stroke Width

To change the global stroke width, use the `strokeWidth` store. For auto sub and unsub use the `$` syntax:

```html
<script>
  import { strokeWidth } from '@liquidiqq/iconkit'

  $strokeWidth = "4"
</script>

<Icon name="flag">
```

This will change all icons' stroke width across the app. It gives you the flexibility to match your theme aesthetics. If you have a global place for your app settings, it's best to place it there, e.g. `+layout.svelte`.


### Single Icon Stroke Width

To change a single icon's stroke width use the `strokewidth` prop, this will only change the current icon's stroke width:

```html
<Icon name="credit-card" strokewidth="2" />
```


## Icon Sizing

### Global Icon Sizes

Icons are sized using Tailwindcss classes. The regular size is `h-6 w-6` and mini is `h-5 w-5`. To change these global sizes, use the `regularSize`, and `miniSize` stores:

```html
<script>
  import { regularSize, miniSize } from '@liquidiqq/iconkit'

  $regularSize = "h-8 w-8"
  $miniSize = "h-7 w-7"
</script>
```

This will affect all icon sizes across your app. It gives you the ability to keep your design system consistent. If you have a global place for your app settings, it's best to place it there, e.g. `+layout.svelte`.

If you are not using Tailwindcss, you can use your own classes:

```html
<script>
  import { regularSize, miniSize } from '@liquidiqq/iconkit'

  $regularSize = "custom-regular-size"
  $miniSize = "custom-mini-size"
</script>

<Icon name="fire" />
<Icon name="fire" mode="mini" />

<!-- It is advised to put styles in a global sheet, such as, app.postcss, app.css, etc  -->
<style>
  :global(.custom-regular-size) {
    height: 2.5rem;
    width: 2.5rem;
  }
  :global(.custom-mini-size) {
    height: 2rem;
    width: 2rem;
  }
</style>
```


If you want to disable global sizing, set the `defaultSizes` store's value to `false`, however, you will have to manually set the size for each icon which is bad practice and can produce inconsisent styling:

```html
<script>
  import { defaultSizes } from '@liquidiqq/iconkit'

  // Not advised, instead, define your own classes for regularSize and miniSize
  $defaultSizes = false
</script>
```

It is not recommended to disable the default sizes, instead, define your own classes for `regularSize` and `miniSize`:

```html
<script>
  import { regularSize, miniSize } from '@liquidiqq/iconkit'

  $regularSize = "custom-regular-size"
  $miniSize = "custom-mini-size"
</script>
```


### Single Icon Size

To change a single icon's size simply use the `class` prop, this will only change the current icon's size and not affect other icons, good for one-off icons:

```html
<Icon name="fire" class="h-8 w-8" />
```


### Colors

By default, colors are set to `currentcolor`:

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


## Loading Icon

A loading icon is shipped with Iconkit.

```html
<Icon name="loading-circle" />
```


### Change Loading Icon's Stroke Width

You can change the loading icon's stroke width using the `loadingStrokeWidth` store, this is a global setting and will affect all loading icons across the app:

```html
<script>
  import { loadingStrokeWidth } from '@liquidiqq/iconkit'

  $loadingStrokeWidth = "2"
</script>
```


### Change Single Loading Icon's Stroke Width

To change a single loading icon's stroke width, use the `strokewidth` prop, this will not affect other loading icons:

```html
<Icon name="loading-circle" strokewidth="2" />
```


## Handling State

### Switch From Outline To Solid

To switch from outline to solid, use a `boolean` with the `mode` prop:

```html
<script>
  let isLiked = false

  function handleLike(){
    // ...
    isLiked = true
  }
</script>

<Icon name="heart" mode={isLiked ? 'solid' : 'outline'}/>
```


### Handle Loading State

Use a `boolean` with the `name` prop:

```html
<script>
  let isLoading = false

  function handleSubmit(){
    isLoading = true
    // ... submit logic
    isLoading = false
  }
</script>

<Icon name={isLoading ? 'loading-circle' : 'paper-airplane'} />
```


## Browsing icons & Documentation

Coming soon.


## License

[MIT](LICENSE).

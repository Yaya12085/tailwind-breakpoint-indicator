# Tailwind Breakpoint Indicator

A minimal Tailwind CSS plugin that displays the current breakpoint during development.

## Demo

https://github.com/Yaya12085/tailwind-breakpoint-indicator/assets/demo.mp4

## Installation

```bash
npm install tailwind-breakpoint-indicator
# or
yarn add tailwind-breakpoint-indicator
# or
pnpm add tailwind-breakpoint-indicator
```

## Usage

Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require("tailwind-breakpoint-indicator")({
      // options are optional
      indicatorPosition: "bottom-right",
      indicatorBackground: "rgba(59, 130, 246, 1)",
      indicatorColor: "white",
      showInProduction: false,
    }),
  ],
};
```

Add the indicator element to your HTML:

```html
<div class="breakpoint-indicator"></div>
```

## Options

| Option                | Type                                                                 | Default                | Description                                 |
| --------------------- | -------------------------------------------------------------------- | ---------------------- | ------------------------------------------- |
| `indicatorPosition`   | `'top-left'` \| `'top-right'` \| `'bottom-left'` \| `'bottom-right'` | `'bottom-right'`       | Position of the breakpoint indicator        |
| `indicatorBackground` | `string`                                                             | `'rgba(0, 0, 0, 0.8)'` | Background color of the indicator           |
| `indicatorColor`      | `string`                                                             | `'white'`              | Text color of the indicator                 |
| `showInProduction`    | `boolean`                                                            | `false`                | Whether to show the indicator in production |

## Default Breakpoints

The plugin uses Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## License

MIT

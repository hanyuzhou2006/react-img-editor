# react-img-editor - Image Editor

react-img-editor is an image editor react component that supports image cropping, doodling, text editing, mosaic processing, and other operations, as well as custom plugins and flexible style configuration.

![example](assets/demo.png)

View our [storybook](https://hanyuzhou2006.github.io/react-img-editor) for a live demo.

## ✨ Features

- Support free brush, rectangle, circle, arrow, text, mosaic drawing
- Support eraser, undo, screenshot and image download
- Support custom plug-ins and toolbar configuration
- Support stretching, dragging and deleting of rectangle, circle, arrow, text and other nodes
- Support for multiple components on the same page at the same time

## 📦 Download

```
yarn add @sansitech/react-img-editor
```

## 🔨 Introduce and use

```jsx
import ReactImgEditor from "@sansitech/react-img-editor";
import "@sansitech/react-img-editor/lib/index.css";

<ReactImgEditor src="https://www.w3schools.com/html/img_girl.jpg" />;
```

## 🧰 API

| Properties | Description    | Type                 | Default |
| ---------- | -----------    | ----                 | ------- |
| src        | image url      | string               | - |
| width      | board width    | number?              | 700 |
| height     | board height   | number?              | 500 |
| style      | styles         | React.CSSProperties  | -  |
| plugins    | Custom plugins | Plugin[]             | [] |
| toolbar           | toolbar configuration                                                                                                   | { items: string[] }  | {items: ['pen', 'eraser', 'arrow', 'rect', 'circle', 'mosaic', 'text', ' / ', 'repeat', 'download', 'crop']} |
| getStage          | Get the [Stage](https://konvajs.org/api/Konva.Stage.html) object of KonvaJS, which can be used to download images, etc. | (stage: any) => void |
| defaultPluginName | The default selected plugin name                                                                                        | string?              | -                                                                        |
| crossOrigin       | Handling cross-domain images                                                                                            | string?              | -                                                                        |
| language          | Editor language (de,en)                                                                                                 | string?              | en                                                                       |

## 📝 TODO

- [ ] Load images dynamically
- [ ] Download image type configuration
- [ ] Provide plugin configuration items configuration
- [ ] Optimize free brush writing experience
- [x] Internationalization support

## 🤝 Contribute

Development

```bash
yarn run develop
```

## Credits

This project is a fork of [react-img-editor](https://github.com/YaoKaiLun/react-img-editor)

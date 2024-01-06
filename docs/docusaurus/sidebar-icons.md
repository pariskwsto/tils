# Sidebar Icons

## Add icon next to each sidebar menu text with css

> Here is one way you can add icon next to each sidebar menu text in three steps

1. Add the png or svg icons you want to use into `static/img` directory
2. Add css to use the icons

```css title="src/css/custom.css"
.icon > div::before {
  content: '';
  display: inline-block;
  margin: auto -8px auto 8px;
  width: 20px;
  height: 20px;
}

.docusaurus-icon > div::before {
  background: url('/static/img/icons/docusaurus.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

3. Add the classes `icon docusaurus-icon` into `_category_.json` file

```json title="_category_.json"
{
  "label": "Docusaurus",
  "className": "icon docusaurus-icon",
  "link": {
    "type": "generated-index",
    "description": "Docusaurus is a static-site generator..."
  }
}
```

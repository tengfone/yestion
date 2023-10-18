# Yestion

Notion clone, taught by [Code with Antonio](https://www.youtube.com/watch?v=0OaDyjB9Ib8&t=341s). [Github](https://github.com/AntonioErdeljac/notion-clone-tutorial/tree/master)

## Notes

- if need h-full to fill screen, go to global:

````html,
body,
:root {
  height: 100%;
}```
````

- Convex
- Groups in Tailwind

```
DIV_A=className="group/sidebar..."
...
DIV_B=className="opacity-0 group-hover/sidebar:opacity-100"
// If hover over DIV_A, DIV_B will show itself
```

- Sidebar using mediaquery for resizing
- event.stopPropagation prevents "layed" functions e.g 2 divs inner and outer, u click inner, but outer also triggers.
- Overlaying event listener with custom state management (zustand)

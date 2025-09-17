# U7-UI

A lightweight React UI component library built with **React**, **Motion**, and **UnoCSS**.  
Easily integrate buttons, dialogs, tabs, dropdown menus, and more into your projects. 🚀

---

## 📦 Installation

```bash
npm install u7-ui
```

```bash
import "u7-ui/dist/style.css";
```

```jsx
import { Button, Dialog, Tabs, ToastProvider, DropDownMenu } from "u7-ui";

export default function App() {
  return (
    <ToastProvider>
      <div className="p-4">
        <Button>Click Me</Button>

        <Dialog isOpen={true} onClose={() => console.log("Closed")}>
          <p>Hello from Dialog!</p>
        </Dialog>

        <Tabs
          tabs={[
            { label: "Tab 1", content: <div>Content 1</div> },
            { label: "Tab 2", content: <div>Content 2</div> },
          ]}
        />

        <DropDownMenu
          trigger={<Button>Open Menu</Button>}
          items={[
            { label: "Profile", onClick: () => console.log("Profile") },
            { label: "Settings", onClick: () => console.log("Settings") },
          ]}
        />
      </div>
    </ToastProvider>
  );
}
```
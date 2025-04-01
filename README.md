# 🔗 Lerna Monorepo Template – Shared Packages Made Easy

A template project demonstrating how to use **Lerna** to manage multiple packages and apps in a monorepo setup.

> Avoid copy-pasting shared code.  
> Skip repeated `npm publish && npm install`.  
> Just code, link, and reflect changes instantly.

---

## 🧠 Why This Template Exists

In many projects, shared UI components, utilities, and configurations (like ESLint) are scattered or manually duplicated across apps.  
This leads to time wasted on:

- Repeated publishing and installing
- Manual symlinking
- Redundant configuration
- Lack of instant feedback

### Common issues:
- You want to **edit a shared button** and see it reflected in 10 apps immediately.
- You want to **reuse ESLint config**, without creating another npm package.
- You want to **split responsibilities** and keep code modular.
- You **might** want to publish a package later, but not now.

---

## 🧩 What's Inside

```bash
.
├── independent-app               # Simulates a separate project using published package
│   └── package.json              # Depends on published public-lib
│
└── monorepo
    ├── package.json              # Lerna + workspace setup
    └── packages
        ├── monorepo-app          # Local app(s) inside monorepo
        ├── private-config        # Shared ESLint config (non-published)
        ├── private-lib           # Shared UI components (e.g., Button)
        └── public-lib            # Utility library – meant to be published

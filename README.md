old repo

 app
    ├── (auth)
    │   ├── forgot-password
    │   │   ├── forgot-password-form.tsx
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── login
    │   │   ├── login-form.tsx
    │   │   └── page.tsx
    │   └── register
    │   │   ├── actions.ts
    │   │   ├── page.tsx
    │   │   └── register-form.tsx
    ├── account
    │   ├── actions.ts
    │   ├── delete-account-button.tsx
    │   ├── my-favourites
    │   │   ├── page.tsx
    │   │   └── remove-favourite-button.tsx
    │   ├── page.tsx
    │   └── update-password-form.tsx
    ├── admin-dashboard
    │   ├── actions.ts
    │   ├── edit
    │   │   └── [propertyId]
    │   │   │   ├── actions.ts
    │   │   │   ├── edit-property-form.tsx
    │   │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── new
    │   │   ├── actions.ts
    │   │   ├── new-property-form.tsx
    │   │   └── page.tsx
    │   ├── page.tsx
    │   └── properties-table.tsx
    ├── api
    │   └── refresh-token
    │   │   └── route.ts
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
    ├── property-search
    │   ├── @modal
    │   │   ├── (..)login
    │   │   │   ├── actions.ts
    │   │   │   └── page.tsx
    │   │   └── default.tsx
    │   ├── actions.ts
    │   ├── filters-form.tsx
    │   ├── layout.tsx
    │   ├── loading.tsx
    │   ├── page.tsx
    │   └── toggle-favourite-button.tsx
    └── property
    │   └── [propertyId]
    │       ├── back-button.tsx
    │       └── page.tsx
├── components.json
├── components
    ├── auth-buttons.tsx
    ├── continue-with-google-button.tsx
    ├── login-form.tsx
    ├── multi-image-uploader.tsx
    ├── property-form.tsx
    ├── property-status-badge.tsx
    └── ui
    │   ├── alert-dialog.tsx
    │   ├── avatar.tsx
    │   ├── badge.tsx
    │   ├── breadcrumb.tsx
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── carousel.tsx
    │   ├── dialog.tsx
    │   ├── dropdown-menu.tsx
    │   ├── form.tsx
    │   ├── input.tsx
    │   ├── label.tsx
    │   ├── select.tsx
    │   ├── skeleton.tsx
    │   ├── sonner.tsx
    │   ├── table.tsx
    │   └── textarea.tsx
├── context
    ├── actions.ts
    └── auth.tsx
├── data
    ├── favourites.ts
    └── properties.ts
├── eslint.config.mjs
├── firebase
    ├── client.ts
    └── server.ts
├── lib
    ├── imageUrlFormatter.ts
    └── utils.ts
├── middleware.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── file.svg
    ├── globe.svg
    ├── hero.webp
    ├── next.svg
    ├── vercel.svg
    └── window.svg
├── tailwind.config.ts
├── tsconfig.json
├── types
    ├── property.ts
    └── propertyStatus.ts
└── validation
    ├── propertySchema.ts
    └── registerUser.ts
# Chili — Forever Our Good Girl

A memorial website for Chili, our beloved German Shepherd (2019–2026).

## About

A single-page static memorial built with vanilla HTML, CSS, and JavaScript. No frameworks, no build steps — just open `index.html`.

### Features

- **Responsive** — works on phones, tablets, and desktops
- **Dark / Light mode** — automatically adapts to your system preference via `prefers-color-scheme`
- **Bilingual** — English and Chinese (中文), switchable with one click
- **Thoughts** — family members can write and save messages for Chili (stored in browser localStorage)
- **Smooth animations** — gentle fade-in effects on scroll
- **Fast** — zero dependencies, no external requests, pure static files

## Project Structure

```
forchili/
├── index.html          # Main page (all sections)
├── css/
│   └── style.css       # Styles with CSS custom properties for theming
├── js/
│   └── main.js         # i18n, thoughts/localStorage, scroll animations
├── .gitignore
├── LICENSE
└── README.md
```

## Hosting on GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select the branch (e.g., `main`) and folder (`/ (root)`)
4. Click **Save**
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Thoughts Feature

The "Words for Chili" section lets family members leave messages. Messages are stored in the browser's `localStorage`, meaning:

- Messages persist across visits on the same browser
- Different browsers or devices have separate message stores
- No server or account required

## Customization

- **Content**: Edit the text directly in `index.html` or update the translation strings in `js/main.js`
- **Colors**: Adjust CSS custom properties in `:root` and the `@media (prefers-color-scheme: dark)` block in `css/style.css`
- **Portrait**: The German Shepherd illustration is inline SVG in `index.html` — edit the paths and colors to customize

## License

See [LICENSE](LICENSE).

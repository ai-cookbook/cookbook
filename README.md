# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

The project follows a typical Docusaurus structure with some custom components and data. Here are the key directories and files:

### Main Directories

- `/src/` - Contains the main source code
  - `/src/data/` - Data files including user showcase and cookbook information
  - `/src/pages/` - Page components and layouts
  - `/src/components/` - Reusable React components
  - `/src/utils/` - Utility functions and helpers

### Key Files

- `/src/data/users.tsx` - Contains the showcase data for all applications, including descriptions, tags, and author information
- `/src/data/cookbook.tsx` - Contains the data for all guides and tutorials, including descriptions, difficulty levels, and author information
- `/src/pages/showcase/_components/ShowcaseCard/` - The main component for displaying application cards
  - `index.tsx` - Component logic and structure
  - `styles.module.css` - Styling for the showcase cards
- `/src/pages/cookbook/_components/CookbookCard/` - The main component for displaying guide cards
  - `index.tsx` - Component logic and structure
  - `styles.module.css` - Styling for the cookbook cards

### Image Assets

- `/src/data/showcase/` - Contains all application preview images
  - Images should be at least 640px wide
  - Recommended aspect ratio is 2:1
  - Supported formats: JPG, PNG
- `/public/img/cookbook/` - Contains all guide preview images
  - Same image requirements as showcase
- `/public/img/authors/` - Contains author profile images
  - Recommended size: 80x80px
  - Should be square aspect ratio
  - Supported formats: JPG, PNG

### Pages

#### Showcase Page (`/showcase`)
A gallery of applications built with our tools, featuring:
- Application preview images
- Descriptions and links
- Source code links
- Tags for filtering
- Author information

#### Cookbook Page (`/cookbook`)
A collection of guides and tutorials, featuring:
- Guide preview images
- Descriptions and links to full guides
- Difficulty levels (Beginner/Intermediate/Advanced)
- Topic tags for filtering
- Author information

### Development

The project uses:
- React with TypeScript for components
- CSS Modules for styling
- Docusaurus for static site generation
- Various utility scripts for image processing and maintenance

To add a new application to the showcase:
1. Add the application preview image to `/src/data/showcase/`
2. Add the application data to `/src/data/users.tsx`
3. Run `check_images.py` to verify image requirements
4. Build and test locally using `yarn start`

To add a new guide to the cookbook:
1. Add the guide preview image to `/public/img/cookbook/`
2. Add the guide data to `/src/data/cookbook.tsx`
3. Ensure the guide's difficulty level and tags are appropriate
4. Build and test locally using `yarn start`

# Documentation Starter Website

This is a website for publishing online documentation.

- Content Management System: [Pico CMS](https://picocms.org) version 2.1.4
- Search: [Pico-Search](https://github.com/PontusHorn/Pico-Search "PontusHorn Pico-Search in GitHub") plugin by PontusHorn.
- Theme: based on the [CoderDocs](https://themes.3rdwavemedia.com/demo/bs5/coderdocs/index.html) Bootstrap 5 Documentation Template by [Xiaoying Riley](http://themes.3rdwavemedia.com/).

## Installation

- [Requirements](https://picocms.org/docs/#install "Pico Installation Documentation"): PHP 5.3.6+ and the PHP extensions 'dom' and 'mbstring' to be enabled.
- Instructions: Copy the repository to the root of the web folder.

## Additional Files

These are subsets of the repository.

### coderdocs-site.*

- Contains the entire repo minus some files not necessary for production.
- To Install: unpack this archive to the root of the web folder.

### coderdocs-install.*

- Contains: plugin, theme, content, assets and config.
- Use to add the theme to a default installation of Pico.
- To Install:
  + Unpack Pico to the root of the web folder, then;
  + Unpack this archive to the root of the web folder.

### coderdocs-theme.*

  - CoderDocs theme for Pico
  - To Install:
    + Unpack this archive to the themes folder of the Pico installation; *~/themes* by default
    + Change the theme setting to **"theme: coderdocs"** in the ~/config/config.yml file
    + See the [Pico documentation](https://picocms.org/docs/#themes "Themes - Pico documentation) for more information.
    
### coderdocs-content.*

- Sample content:
  + **Documentation** on using the theme/website.
  + The folders and files are numbered to indicate their order.
- To Install:
  + Unpack this archive to the content folder of the Pico installation; *~/content* by default
    
**Note:**

The template assumes all content of the website is part of the documentation.

To incorporate any existing content. The files must be organised as specified in the documentation.

Refer to the contents of this folder for more information.
    
## Usage

- Usage requirements and other documentation for the inputs are available at the links above.
- Documentation for the managing the content based on the theme is in the **~/content** folder.
- The documentation forms starter content for the website, demonstrating its use.

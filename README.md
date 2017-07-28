# Gulp Skeleton

This contains my skeleton for starting any gulp-workflow project.

## Getting started
Download to computer and navigate to directory in terminal. _feel free to edit the package.json to match your project -- just don't remove any dependancies._
* Run the command `npm install -y`. This will initialize the project and install node js modules, including the gulp task dependancies.
* Run the command `gulp setup`. This will create the proper base file structure for the src file.

## File Structure
The tasks files are set up to watch all files with in the structure. Everything will write to the `./site` folder according the the following rules.
* Image files will be cached -- so they will only copy once to the `./site/stuff/images ` folder.
* Any pug page in the `pug/pages` directory will become a page in the `./site` folder
* For styles, gulp will create the `styles.stl` as the css file as `/site/stuff/styles.css`
### Structure
        src
        |- img
        |- jade
        |-- layouts
        |--- global // modules that belong to templates, like headers & footers
        |-- pages
        |-- parts // shared modules -- like list or cards
        |- js
        |- stylus
        |-- base
        |-- layouts
        |--- global
        |--- pages
        |--- parts

### Cleanup
To clean out the `./site` folder at any time run the task `gulp cleanroot`.

### GH-Pages
To publish the `./site` folder to Github page run the task `gulp deploy`

## Companion Stylus Skelton
Still to come...

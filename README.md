# <img src="https://user-images.githubusercontent.com/7829486/207825273-2d544b4d-c4ed-4c7d-a321-5e7f727287ac.png" height="100" />

Using React, the mini-game "Color Junction" that was playable on [iGoogle](https://wikipedia.org/wiki/IGoogle) which ended in 2013, was revived in 2022.

## How to Play
![game screen](https://user-images.githubusercontent.com/7829486/207826926-604ba0d5-f4f9-43ca-ae12-9530ad55e186.png)

When two or more pieces of the same color are connected, they stick together to form a clump.
When you click on a clump, it disappears.
The game is completed when there are no pieces left.  
Simple, right?

## Live Demo
[Click here to play the game](https://fugamaru.com/projects/ColorJunction/)

> You may paste an iframe of this URL into your website so that you can play the game on your website, but the URL is subject to change without notice.

## Specifying Grid Size
You can change the grid size by specifying the URL parameter.
> If the grid size is too small, the layout may be corrupted; conversely, if it is too large, it may take longer to process.

Parameters
| Property | Default |
| :---: | :---: |
| height | 15 |
| width | 15 |

Example: `https://fugamaru.com/projects/ColorJunction/?height=10&width=20`

## How to Build
If you want to host this project on your own server, etc., please do the build yourself (generate static HTML files).

1. Install the libraries
```bash
# If yarn is not installed -> npm i -g yarn
yarn install
```

2. Customize `basename` attribute
> If you will put static HTML files in the server's root directory, you do not need to do this.

Open `src/index.tsx` and enter the path to the subdirectory in the `basename` attribute of the `BrowserRouter` component.

Example of URL: `https://fugamaru.com/projects/ColorJunction/`
Example: `<BrowserRouter basename="/projects/ColorJunction/">`

3. Execute build
```bash
yarn build
```

When the build is complete, a `build` directory is created in the project root, then copy these files to the server.

## License
This project is released under the MIT License, see LICENSE file.
# 使用說明

## 安裝套件

```
npm install
```

## src 架構

```bash
.
├── api
├── assets
│   ├── fonts
│   └── images
├── components
│   ├── Footer
│   └── Navbar
├── pages
│   ├── AboutPage
│   ├── HomePage
│   └── LoginPage
└── utils
```

## 檔案解釋

- `jsconfig.json` 是用來設定 `import` 的路徑，這樣就不用一層一層的找檔案了
- `package.json` 是用來設定套件的版本，以及一些指令
- `package-lock.json` 是用來記錄套件的版本，不用管他
- `public` 資料夾是放靜態檔案的地方，例如圖片、網頁的 icon
- `src` 資料夾是放程式碼的地方
- `src/App.js` 是 root component，也就是整個網頁的最外層
- `src/index.js` 是整個網頁的進入點，也就是從這裡開始執行程式
- `src/components` 資料夾是放 component 的地方，component 是可以重複使用的元件，例如按鈕、表格、輸入框等等
- `src/pages` 資料夾是放 page 的地方，page 是網頁上的一個頁面，例如首頁、登入頁、註冊頁等等
- `src/utils` 資料夾是放工具的地方，例如跟伺服器溝通的 API、驗證資料的函式等等
- `src/pages/xxx/index.js` 是一個頁面的進入點，也就是從這裡開始執行程式


以下都是預設的說明

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

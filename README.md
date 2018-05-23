<h1 align="center">
  <br>
  <a href="https://project52.tech/" target="blank"><img src="https://raw.githubusercontent.com/blacksector/authenticator/master/src/assets/imgs/logo.png" alt="Authenticator Logo" width="80"></a>

  <br>
  News App
  <br>
</h1>

<h4 align="center">A simple news updates app.</h4>

<h6 align="center">Current Version: 0.0.1</h6>

<p align="center">
  <a href='https://ko-fi.com/V7V65XWA' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>

<p align="center">
  <a href="#screenshots">Screenshots</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#setup">Setup</a> •
  <a href="#license">License</a>
</p>

## Screenshots
<p align="center">
<img src="https://project52.tech/wp-content/uploads/2018/05/Screenshot_20180523-134907.png" alt="Home Screen" width="200">
<img src="https://project52.tech/wp-content/uploads/2018/05/Screenshot_20180523-134918.png" alt="Stories / More News Screen" width="200">
<img src="https://project52.tech/wp-content/uploads/2018/05/Screenshot_20180523-135354.png" alt="News Article" width="200">
</p>

## Key Features

Tech Stack:
* Hybrid (Ionic 3)
* Local Notifications (setup in the code but I have not yet completed the code for it)

Backend:
* NewYorkTimes API


Ok so displaying news and the article is loaded directly from the New York Times API. A future update should include notifications, which means every **X** number of hours you will get a notification with news updates (still need to figure out how I will do that).

## Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. You will also need Cordova and Ionic, follow the <a href="https://ionicframework.com/getting-started">Ionic getting started</a> guide for more.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/blacksector/newsapp

# Go into the repository
$ cd newsapp

# Install dependencies
$ npm install

# Run the app - All of the features won't work, I recommend deploying on an emulator
$ ionic serve --lab

```

To get the API to pull information from the NYT Database, create a new account [here](https://developer.nytimes.com/signup) and request a "Top Stories" API key.

After you have successfully received a new key, in the `src/providers/api/api.ts` file modify line 12 to include your API key:

```typescript
apiKey: string = 'YOUR_API_KEY_HERE';
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License
The News App Logo is Copyright &copy; Omar Quazi. Do not in any way or form reproduce or reuse this logo. If you wish to use the logo, ask me first!

The rest of the code is MIT Licensed:

```
Copyright 2018 Omar Quazi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

---

> [Project 52](https://project52.tech) &nbsp;&middot;&nbsp;
> [Omar Quazi](https://quazi.co) &nbsp;&middot;&nbsp;
> [@quaziomar](https://instagram.com/quaziomar)

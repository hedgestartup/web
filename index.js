
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, shrink-to-fit=0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <title>svg-mesh-3d</title>
  <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700' rel='stylesheet' type='text/css'>
  <style type="text/css">
  body {
    font-family: 'Noto Sans', Helvetica, sans-serif;
    font-size: 16px;
    background: #97c2c5;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    color: #4C4C4C;
  }
  canvas {
    display: block;
    position: fixed;
    z-index: -5;
  }
  div {
    margin: 10px;
    font-weight: 700;
    font-size: 13px;
  }
  p {
    z-index: 10;
    font-weight: 300;
    margin: 5px 0px;
  }
  .link, .link:active, .info:visited {
    text-decoration: none;
    font-weight: 700;
    color: #424242;
    position: relative;
  }
  .link:hover {
  }
  .link::after, .link:hover::after {
    content: ' ';
    width: 100%;
    left: 0;
    background: currentColor;
    z-index: 10;
    position: absolute;
    -webkit-transition: all 0.05s ease-out;
    -moz-transition: all 0.05s ease-out;
    -ms-transition: all 0.05s ease-out;
    -o-transition: all 0.05s ease-out;
    transition: all 0.05s ease-out;
  }
  .link::after {
    height: 0px;
    bottom: 0px;
  }
  .link:hover::after {
    height: 4px;
    bottom: -4px;
  }
  </style>
</head>
<body>
  <canvas></canvas>

  <script src="bundle.js" async></script>
</body>
<footer>
  <div>
    <a class="link main" href="main.html">BITSG is BLUE ISLAND TOKEN SECTOR G</a>
  </div>
</footer>
</html>

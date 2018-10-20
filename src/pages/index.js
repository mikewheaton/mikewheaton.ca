import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Home from '../components/Home/Home';
import Page from '../components/Page/Page';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Overpass+Mono:300|Overpass:400,700');

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Use styled components to define the theme. */
  :root {
    --primary: #0606f9;
    --secondary: #e2dfcf;
    --black: #0d0d0d;
    --gray: #f1f1f1;
    --white: #ffffff;
    --monospace: 'Overpass Mono', monospace;
    --sans: 'Overpass', sans-serif;
  }

  /* @todo: Most of these styles should be part of specific pages, not global. */
  body {
    font-family: var(--sans);
    background-color: var(--primary);
    color: var(--white);
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmAgMAAACjabO2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU5RjBCRjk2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU5RjBCRkE2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTlGMEJGNzZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTlGMEJGODZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvx33JMAAAAJUExURQAAAP///////3N4pWMAAAADdFJOU///ANfKDUEAAABBSURBVBjTXcypAQAxEAJAzBqqw2x/0VR5IpeHqHED2rbxg6AYKGgGCpqBgmagoBnoQsChZjbRaB54A7u08cvg4gPv/1fR9dPARwAAAABJRU5ErkJggg==')
        5 5,
      auto;
    margin: 0;
    height: 100vh;
    padding: 20px;
  }

  a,
  a:visited {
    border-bottom: 2px solid var(--secondary);
    color: var(--white);
    text-decoration: none;
  }
  a:hover {
    border-bottom-width: 4px;
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsAgMAAAB9I4IhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU5RjBCRkQ2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU5RjBCRkU2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTlGMEJGQjZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTlGMEJGQzZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgj0zqsAAAAJUExURQAAAP///////3N4pWMAAAADdFJOU///ANfKDUEAAABOSURBVBjTrcuhEcAwDATBJ09Uncj1J6wqA0KU2JkxCFuy6q7o7i5NOf+WNkKxyhkb5ZTCiRMNOQ28hAEeKljUPlR9KmvqLgcqgDiQJE1dw9ma97mQdGMAAAAASUVORK5CYII=')
        15 5,
      auto;
  }
`;

const Index = () => (
  <Page>
    <GlobalStyles />
    <Home />
  </Page>
);

export default Index;

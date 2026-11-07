# Article Extractor API

## Introduction
This API extracts the article from the link. And returns the following details about the article:
1. Title
2. Description
3. Image
4. Content
5. Author
6. Published Date
7. Other Links to the same Article

### Tools and Languages Used: 
- Javascript
- NodeJS
- ExpressJS

### Node Packages or Dependencies Used:
- ExpressJS version "^5.2.1"
- @extractus/article-extractor version "^8.0.20"

This API was hosted locally and the port used is 3000. In order to use it:
- After getting the files, go to any CLI like BASH CLI and type "node index.js", you will se it shows the message "index.js Listening on Port 3000".
- Then, after that go to the browser and type: "http:localhost:3000/extract?articleUrl=[URL]". Here in [URL], type the input article url.
- And thus, you will get information about that article.
- If the article is not accessible, it will show the request incomplete message.


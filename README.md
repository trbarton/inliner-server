# webpage-inliner-server

Used as part of a University Project. Acts as a proxy when requesting webpages.
Given a URL the server fetches it and it's dependencies, inlines all the assets
including: CSS, JS, and Images, then returns the page as a single file.

Usage:

* docker build -t inliner-server .
* docker run -p 80:7300 inliner-server
* Use Postman or similar to send a post request to http://localhost/api with a body like below

```json
{
  "url": "http://google.co.uk"
}
```

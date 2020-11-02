# 2. Use Netlify as a hosting platform

## Status
Accepted

## Context
We need somewhere to host the site. Requirements include ability to save form data securely, custom domain names and an SSL certificates.

## Decision
Use Netlify (personal account) to host the site.

## Consequences
Netlify give us form handling, custom domain names and Let's Encrypt SSL certificates, so that takes away a lot of the complexity required. We will have to stick to ststic site generators or come up with revised hosting plan if we shift to Rails or Django in the future for more functionality.

# 3. Use Nunjucks templating

## Status
Accepted

## Context
Eleventy gives us a range of templating languages. We need to choose one to allow looping and splitting out of markup to separate files.

## Decision
Use NunJucks templating.
11ty supports nunjucks out the box, it is well documented and has all the features that we need for looping through auction items and reusing templates for forms etc.

## Consequences
We might have to convert to a different templating engine if we change to Rails or something int the future. Structure of templates is probably more important than language though.
Nunjucks is well documented though and has some advanced features missing from other languages.

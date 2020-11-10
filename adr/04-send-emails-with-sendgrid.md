# 4. Use SendGrid API for sending emails

## Status
Accepted

## Context
As Eleventy is a static site generator, we don't have the ability to send emails. So we need to use a third party to send the emails. We can use Netlify funtions to make the API call.

## Decision
Use SendGrid. SendGrid has been chosen as it has a node package that does what we need, I have used it before and it has 100 emails per day for free.

## Consequences
Costs may be incurred if we go over 100 bids per day which is possible, but we should be warned if it approaches that number. SendGrid may change free offering so may need to change or incur costs at a later date.

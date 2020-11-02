# 1. Use Eleventy as a SSG for the Auction site

## Status
Accepted

## Context
COVID and lockdown mean that we can't run a standard in person silent auction to raise money for the Dunton Green PTA. We are building an online Silent Auction site to hopefully raise money in place of the Bazaar silent auction.

## Decision
We will use Eleventy.js for the initial auction site, as the main requirements are listing a collection of items and collecting bid information in a very simple way. We are not concerned with fake bids and will use this as a learning experience.

## Consequences
It will be more difficult to add complex features such as we could if we were running a Rails or Django backed application. We will need to use a hosting service that can allow us to handle forms or write our own form submission system.

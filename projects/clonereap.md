---
layout: project
title: CloneReap&#58 Kill Technical Debt
---

## What is it?
CloneReap is a github app and continuous integration tool that keeps your code
free of evil clones.

## What's a clone and why are they evil?
The simplest example of a clone is a function that's been copy-pasted into a
different spot in your project. In practice, it's any section of code
(regardless of syntax or structure) that is functionally identical to another
section of code.

Clones are bad because they're buggy and hard to maintain. Bugfixes and modifications that
need to be made in duplicate code quickly multiply your workload -- and if you
overlook just one duplicate line of code, your app could come crashing down.

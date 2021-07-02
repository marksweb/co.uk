---
title: 'Whitesource Renovate'
category: 'git'
description: 'renovate bot is so a must!'
date: '2021-04-06'
slug: 'whitesource-renovate'
header_image: header.png
og_image: 
tags:
    - node
    - packages
    - maintenance
---

When I was building this site with gatsby I stumbled across a tool called [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate) from [Whitesource](https://www.whitesourcesoftware.com) which is available as a [github app](https://github.com/marketplace/renovate), or via npm.

I've integrated that github app into the repo for this site and it's incredible. It provides a bot which will watch your packages and create pull requests as new versions become available, ensuring compatibility and keeping everything up to date. That's where the incredible part comes in, because it'd be a full time job in itself to keep packages up to date and compatible with oneanother.

It also works with basically everything "including JavaScript, Java, Ruby, PHP, Python, Go, Cargo, Elixir, Docker, etc.". So if you haven't yet, go check it out and make your life easier.

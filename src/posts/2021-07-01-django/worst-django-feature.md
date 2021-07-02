---
title: 'Worst feature of Django 3.2'
category: 'django'
description: 'I dont have an int for a SITE_ID'
date: '2021-07-01'
slug: 'worst-django-feature'
og_image: 
tags:
    - python
    - django
    - django-multisite
---

I love django, it's kept me in decent jobs for most of my career. But recently I've discovered the first change that causes a problem for me - the `SITE_ID` setting now has to be an `int`.

At work we created a project last year which was to be a multi-site application. We opted for django 2.2 with [django-cms](https://www.django-cms.org) to allow for dynamic content and a postgres database. We run things from Amazon Web Services (AWS) so can easily scale our application and keeping things simple is always a good idea.

Generally speaking, at least from what I've seen, multi-site django applications have a settings file per site. That's just a nightmare of maintenance jobs for the future. I discovered [django-multisite](https://github.com/ecometrica/django-multisite) which uses an object for the `SITE_ID` setting, `SITE_ID = SiteID(default=1)`.

This was perfect, allowing us to have just 1 settings file.

Recently django-cms introduced support for django 3.2 so I started looking at our upgrade path and quickly became aware of a change that didn't make it into the [release notes](https://docs.djangoproject.com/en/3.2/releases/3.2/). As part of the checks django runs on startup, there's a new [system check for SITE_ID](https://code.djangoproject.com/ticket/31802) to ensure the value is an `int`.

Therefore, anybody currently using django-multisite who tries to upgrade to 3.2 will get an error with `The SITE_ID setting must be an integer` preventing them from running their application.

I can't think of a way to proceed with this besides monkey patching that system check so that we can upgrade to 3.2 without rebuilding our application. So I've got a [pull request](https://github.com/shestera/django-multisite/pull/7) open to do this. Unfortunately the repo hasn't had an activity since March 2020 so not sure if that will get merged. Perhaps I'll reach out to the author and see if they'd like help, like I did with [django-bleach](https://www.github.com/marksweb/django-bleach) and [django-sql-explorer](https://github.com/marksweb/django-sql-explorer), both of which I'm now a maintainer for.

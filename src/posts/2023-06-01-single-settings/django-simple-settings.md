---
title: 'Django Simple Settings'
category: 'django'
description: 'Could a single settings file make life easier?'
date: '2023-06-01'
slug: 'django-simple-settings'
header_image: header.png
og_image: 
tags:
    - django
---

I'm on my way home from DjangoCon Europe 2023 in Edinburgh and I've been thinking about the [Locality of Behaviour](https://htmx.org/essays/locality-of-behaviour) concept.

So often I see environment specific settings files - a file for dev/staging/production. Sometimes I'd agree this can be a good idea, but it also reminds me of my early years as a django developer. When we used this settings structure and also had a ``local_settings.py`` for any environment specific settings that were kept out of version control. Developers would have to SSH to servers and manually update settings as & when necessary which certainly increased the risk of sites going down!

In the years after that, everything moved to containerised workflows, serverless and infrastructure as code. This enabled a rethink of how projects were built and allowed developers to run projects just like they are ran remotely. A single settings file came with this change, and managing environment variables in CloudFormation or Terraform is straightforward, as is integrating the secret stores of AWS and Google Cloud.

Then I started a new job earlier this year and I'm working with this settings structure again. This seems to always end up with a star import along the lines of ``from project.settings.base import *`` because all environments have common settings and people don't want to maintain a list of imports. But we all know that we shouldn't use star imports. It goes against [The Zen of Python](http://legacy.python.org/dev/peps/pep-0020/)

> Explicit is better than implicit.

And of course...

> Readability counts.

I know we can't always avoid these things, which is why we sometimes need ``#noqa`` but I think it's worth considering if you could keep that default ``settings.py`` file next time you start a project. You won't need to import all the things, and you'll have all your settings there in 1 file, thus keeping Locality of Behaviour. All you need to do is store those settings values in environment variables.

Managing environment variables while you're developing is so simple. If you're using ``docker compose``, then it'll already [read a ``.env`` file automatically](https://docs.docker.com/compose/environment-variables/set-environment-variables/#compose-file) and load the content into the environment. Then there are the python packages like [``python-dotenv``](https://www.pypi.org/p/python-dotenv), [``django-environs``](https://www.pypi.org/p/django-environs) and [``environs``](https://www.pypi.org/p/environs).

My preference with these is ``python-dotenv`` because it's very simple, you just get it to load your given file in ``manage.py`` & chose a way to cast settings to ``int`` and ``bool`` where necessary. The other two packages have ways of casting built in and as you may expect from a django specific package, a few more helpers on top of that. Just be aware that exceptions get thrown if an environment variable can't be found.

Something especially true for anyone using docker throughout their environments is the benefit you get from having a development machine that matches staging/production - no more "But it works on my machine". But the more the way to develop locally differs from those remote servers, the more risk there is of mistakes or unreproducible scenarios.

When I've been using separate settings, projects can end up with a complex chain of imports and having to duplicate settings in files for your remote environments where you need to point at your database & cache servers etc. Often also leading to hardcoded values which you don't really need in version control, **especially if they're meant to be secret**. This information is an ops or deployment detail, not something you want to be running through your full development process should something need to change.

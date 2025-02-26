---
title: 'A version number problem'
category: 'django'
description: 'When a major version becomes more than just a version number'
date: '2025-02-25'
slug: 'version-number-problem'
og_image: 
tags:
    - django
    - django-cms
    - versioning
---

Some years back a small team of engineers got a chance to do something that I think many of us often wish we could - rewrite a system. They were tasked with making django-cms "enterprise ready". A significant piece of work to bring efficiency, enhanced feature support and flexible functionality.

The project became known as "version 4" because all of our [40 something] packages follow [semantic versioning](https://semver.org/) and this was a clear major version change, with the pypi version being at 3.

Version 4 was picked up by the open source contributors to test & develop it to work "outside the box" of the organisation who sponsored it's development to ensure it suited the django-cms community.

By this point, a new version number had become much more than that. It was a reference to a new way of working - to a new CMS. And for pypi releases, we were past the point where breaking changes could create a new major version, because then "version 4" would actually be version 5.

This became a frustration of mine with some of the late version 3 releases where we considered significant change, but kept having to say, "but version 4 is nearly ready". There were some breaking changes that then came in as minor version increments, but there could have been more done to that version of the application if we'd not held ourselves to a new major version.

Version 4 [released](https://pypi.org/project/django-cms/4.1.0/) as 4.1 on 31st December 2023, and it brought with it interest and an increased pace of development. The big change for 4.1 for users coming from previous versions was the management of content versioning. Ironic perhaps while I'm talking about versions being a problem, because here it was a great improvement. The redesigned system now has it's own version control system for pieces of content, and you can intregrate your own apps so that they to can be versioned. With all these new changes, 2024 became a year of ideas and developing the broader ecosystem of django-cms applications.

At some point in 2024 we started to consider what 4.2 might look like, what features we'd want to bring in. We're now nearing a point where we can release, we've started to prepare release note drafts but there are breaking changes. So it feels like we're at a crossroads. Do we move to version 5.0 because that's what semantic versioning says you do, or do we redefine our versioning approach where the major version effectively reflects the state of django-cms core.

Defining the major version of django-cms to reflect it's current state while all our corresponding apps move to a similar approach where they carry a major version which matches would be a clear way to reflect supporting applications. [djangocms-blog](https://pypi.org/project/djangocms-blog/) for example, is currently on version 2, with full support for django-cms 4 nearly complete. So perhaps the release moves to 4.0 to signify that it supports django-cms 4. I can't foresee a significant re-write style update to django-cms core happening again for a long time, so it could allow the ecosystem to become more uniform in a clear versioning approach, but equally, semantic versioning is really easy to understand and it's not too much work to check what support there is of a given version of a package to it's dependencies.

My final takeaway from this is that we should avoid considering a version number until we're at the point we're preparing a release. At that point you take a look at your change log and consider if changes are backward compatible, introducing new features, or just fixing issues. Then increment the version number as appropriate. Maybe in the meantime we need to consider codenames, or just call it "the next release".

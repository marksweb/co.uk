---
title: 'Django blocktranslate'
category: 'django'
description: 'Using blocktranslate tags can create extra space'
date: '2024-11-18'
slug: 'blocktranslate'
og_image: 
tags:
    - django
    - translation
    - i18n
---

I have recently been adding support for translations to [djangoproject.com](https://www.djangoproject.com).

One area of translations that was interesting was with emails. There are tests to verify the format of emails, ensuring there isn't extra whitespace. From the terminal it's fairly easy to test how an email template will render;

```python
from django.template import loader
print(loader.get_template("djangoproject/templates/fundraising/email/payment_failed.txt").render({"context": "values"}))
```

When translating paragraphs of text, I'm quite fond of the `trimmed` option which trims newline characters and looks a bit neater in the `.po` file so it's easier to maintain the layout between languages. Therefore my initial approach to translating was;

```html
{% load i18n %}
{% blocktranslate trimmed %}
Hi {{ name }},
{% endblocktranslate %}

{% blocktranslate trimmed %}
This is to let you know that payment for your recurring donation to the Django Software Foundation has failed.
This might be because your payment card has expired.
{% endblocktranslate %}
```

When this was rendered, the initial `{% load i18n %}` rendered as an empty line, as did things like `{% url "" %}` tags.

So I had to find an alternative way of translating the templates like this. Without using `trimmed` the new lines in the translated
block are maintained so that was a way to reliably maintain structure without extra whitespace.

But there's still the empty lines for loading `i18n` and defining any `urls` necessary within the text. But we've got [`spaceless`](https://docs.djangoproject.com/en/5.1/ref/templates/builtins/#spaceless), so I had another idea which worked nicely to give a final template of;

```html
{% load i18n %}{% spaceless %}{% url 'fundraising:manage-donations' as manage_url %}
{% blocktranslate %}
Hi {{ name }},

This is to let you know that payment for your recurring donation to the Django Software Foundation has failed.
This might be because your payment card has expired.

Please go to {{ manage_url }} to add a new card. We won't be able to take any payments in the mean time.

Thanks very much for your support.

Regards,
Django Software Foundation
{% endblocktranslate %}
{% endspaceless %}
```

By wrapping the content from the first, to the last line, `spaceless` prevents those extra lines from being rendered. Job done!
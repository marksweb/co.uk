---
title: 'Mystery OCSP requests'
category: 'django'
description: 'OCSP requests spam my localhost'
date: '2021-07-07'
slug: 'ocsp-spam'
header_image: header.png
og_image: 
tags:
    - django
    - macos
    - ocsp
---

I've got a django project that runs multiple sites, so locally I have my hosts file setup to serve corresponding domains to 127.0.0.1 on port 80.

This works really well, but one day my local server started getting spammed with requests. These must be coming from something in macOS related to OCSP;

```bash
[07/Jul/2021 16:04:31] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:31] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:32] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:32] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:32] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:32] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
[07/Jul/2021 16:04:33] "GET /ocsp-devid01/ME4wTKADAgEAMEUwQzBBMAkGBSsOAwIaBQAEFDOB0e%2FbaLCFIU0u76%2BMSmlkPCpsBBRXF%2B2iz9x8mKEQ4Py%2Bhy0s8uMXVAIIHOTNg61vyxk%3D HTTP/1.1" 302 0
```

As you can see, these requests absolutely hammer the server coming in multiple times per second.

I've learnt to ignore these, until just now, running said server in [Pycharm](https://www.jetbrains.com/pycharm/) and trying to debug django middleware. The middleware sets something into thread local storage (tls). But that's impossible to debug with pycharm's breakpoints because of all these OCSP requests taking over.

I think it started after I ran the website evidence collector from the European Data Protection Supervisor, but I didn't get a lot of support when I reported [the issue](https://github.com/EU-EDPS/website-evidence-collector/issues/45).

I once contacted apple support about this and the guy told me he's a Windows user and he couldn't find anything to help.

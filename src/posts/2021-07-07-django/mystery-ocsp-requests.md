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

This works really well, but one day my local server started getting spammed with requests which must be coming from something on my machine which look something like this;

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

I've learnt to ignore these, until just now, running said server in pycharm and trying to debug some django middleware which sets something into thread local storage (tls) to make it available elsewhere. Turns out that's impossible to debug with pycharm's breakpoints because of all these OCSP requests taking over.

I once contacted apple support about this and the guy told me he's a Windows user and he couldn't find anything to help.

---
title: Why and How I remade the Anyrep Appliance Repairs website
description: The version of the site that was live before this was made very early in my web development journey; quite frankly it didn't reach the targets I set for it.
image: anyrepBlog1Bg.png
imageExternal: https://drive.google.com/uc?export=view&id=1Y7vvYH_OjROR-Ml3JMKhT5Ce3KTRdNds
tags:
  - website release
author: William Yallop
pinned: true
accentColor: '#1E63EB'
---

## What is Anyrep Appliance Repairs?
Anyrep is an appliance repair business that my dad owns and runs that specialises in domestic and commercial appliance repairs. This covers appliance repairs from <a href="https://www.anyrep.co.uk/washing-machine-repairs/">washing machines</a> and <a href="https://www.anyrep.co.uk/fridge-and-freezer-repairs/">fridges</a>, all the way to walk in freezer units and fryers like the ones you might find at your favourite restaurants.

## The Story
On the 4th of October, I took it upon myself to remake the Anyrep Appliance Repairs website again (yes again..). The version of the site that was live before this was made very early in my web development journey; quite frankly it didn't reach the targets I set for it. It lacked SEO, information on the appliance repair services, and left room for improvement when it came to converting visitors into clients.

It needed updating.

## The Plan:
Instead of rushing into the project headfirst, I decided to take it slow and plan out a list of targets and how I would meet each one.

The targets are as followed:
- SEO
- Conversion rate optimisation
- Load speed

### SEO
As with the old website, I still wanted to use Vue.js as its what I'm most comfortable with. However, I knew it would also need Nuxt if I were to meet my target of improving the SEO. It allows you to generate static HTML files for each page so that search engines have an easier time indexing the site.

It was also imperative that I include more copy on the pages I want to rank as the old version only had one paragraph on the home page making adding keywords difficult without sacrificing readability. 

### Conversion Rate Optimations
As the websites main goal is to convert visitors into clients for Anyrep, it was also imperative that I add a new feature to the site: a booking form. The old website lacked this feature, with the only call to action being a contact now button on the banner and a small phone button with the number next to it on the top bar.

### Load Speed
Load speed was never much of an issue on the old website. However, the addition of lazyloading and Nuxt with its generated pages will improve this tenfold, especially for visitors that have old devices.

## Designing the website.
The design was never the Achilles heel of the website, with some quick work on Adobe XD I adjusted the colour scheme, added some new features such as an FAQ and the booking form for conversion and I was off to the races and ready to start development.

<img class="blogImg" src="https://drive.google.com/uc?export=view&id=1gWmbjLGJF4KcNY37Z6l-eC_Vq35qOGyT" alt="Anyrep Adobe XD Design history"/>

## Development
As with all new projects, my priority to set up the foundations of the website. I get my navigation slider working, I set global CSS classes for buttons, padding, and variables, then create empty pages and component folders.

Once I have the basics complete, I start working through creating the necessary components for each page. I start with the index and work my way down the page; where possible making all components reusable through the use of Vue.js props. Example bellow:

```javascript
<Banner
:title="'Dont hesitate to contact or book with us!'"
:title2="''"
:subTitle="`If you are experiencing any problems with your domestic or commercial appliances then don't hesitate to contact us today!`"
:buttons="[{id: 1, href: '/book', text: 'Book Now'}, {id: 2, href: '/store', text: 'Store'}]"/>
```

With the more complex components such as the booking form, I first create the style, add form validation, then I send the data to my Node RESTful API to validate the data once more and then use Nodemailer to send the visitor and Anyrep the booking confirmation email.

Once I have finished all the components, and style, there are a couple of performance and SEO steps I take:
- Optimise Images
- Replace placeholder copy
- Add META info
- Go through Google Insights 
- Add a Sitemap

<img class="blogImg" src="https://drive.google.com/uc?export=view&id=13xVQgk0tBu3TJVsYWNn_g7TDDdL968oi" alt="Anyrep Google Insights Score"/>

> Unfortunately, there seems to be a bug in the workbox module that is console logging an error that is stopping the best practices from reaching 100/100.

At this point when the website is ready for production, I generate the static files and upload them to my webserver. From here I go through the website one last time to make sure everything works and also test it on a couple of devices.

You can view the code on my <a href="https://github.com/WillYallop/anyrep">GitHub</a>.

And the website at <a href="https://www.anyrep.co.uk/">anyrep.co.uk</a>

## Conclusion
3 days, 23 commits and litres of coffee later... Anyrep Appliance Repairs has a shiny new website to show off. It's speedy and responsive, has a new conversion strategy and primed to start its journey ranking on Google. 

It turned out better than I could ever imagine, but don't take my word for it. Check it out yourself, and remember: if you require an <a href="https://www.anyrep.co.uk/">appliance repair in Norwich</a>, contact Anyrep Domestic & Commercial Appliance Repairs.
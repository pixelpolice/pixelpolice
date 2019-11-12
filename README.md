> NOTE: this is currently a work in progress

# Pixel police

A design token integration testing tool

# Why

Design tokens are the core of what makes your brand look like your brand. A lot of effort goes in to defining what these should be, but unfortunately deviations happen:

* Good deviation: in this context this tested better
* Bad deviation: I think this looks better, my opinion over rules the design system
* Ugly deviation: This UI comes from a third party and I've done my best to tidy it up

Finding these deviations can be be difficult and hard to manage. Over time these deviations increase design debt, increase the amount of work required to remedy, and can potentially ruin the consistency of your brand.

When defining design tokens there are usually CSS properties that they are intended to be used with: eg a background colour design token should only be used on the background-color css property. Pixel police was build to automate this process and make it easy to spot deviations.

As Pixel police cannot tell between the types of deviations, it's helpful to think of it as an automated design review - a conversation starter not a build breaker.


## Things I'm think of doing:

* sitemap input
* --urls in CLI
* save scores as JSON - design debt tracker
* rem
* config validation messaging
* --config-test-properties only run for subset of properties listed in config
* docs favicon

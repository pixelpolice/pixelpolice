# pixelpolice

Design token integration testing tool

This tool aims to do a few things

* Test
* Fill some gaps not covered by visual regression tests
* Provide a metric to help track design debt

Visual regression tests are great but they have a couple of limitations which this tool hopes to help with:

* Visual regression tools can only tell you that something has changed, not if that change is ok
* Unless a change is expected visual regression tests can take some time to debug
* Visual regression tests can group together changes (eg background colours and copy changes)
* Visual regression tests assume that what's been set as a baseline is correct


## TODO

* --urls in CLI
* --config-url in CLI eg --url 0 for first url specified
* docs (make responsive)
* save scores - design debt tracker
* rem
* config validation messaging
* --config-test-properties only run for subset of properties listed in config

## Migration of Mandrill (by Mailchimp) accounts

### What it does

It currently migrates the following between from the source to the target account:

- Rejection whitelist
- Rejection blacklist
- Templates

### Installation

You must have a recent version of [NodeJS](https://nodejs.org).

Clone this repo, then install dependencies:

    git clone git@github.com:daqcri/mandrill-migrate.git
    cd mandrill-migrate
    npm install

### How to use

Set 2 environment variables then run the main script:

    export MANDRILL_APIKEY_SOURCE=<YOUR_SOURCE_ACCOUNT_API_KEY>
    export MANDRILL_APIKEY_TARGET=<YOUR_TARGET_ACCOUNT_API_KEY>
    node index.js

That's it, you are done.

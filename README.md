## Migration of Mandrill (by Mailchimp) accounts

### What it does

It currently migrates the following between from the source to the target account:

- Rejection whitelist
- Rejection blacklist
- Templates

### Installation

You must have a recent version of [NodeJS](https://nodejs.org).

    npm install mandrill-migrate

### How to use

Set 2 environment variables then run mandrill-migrate:

    export MANDRILL_APIKEY_SOURCE=<YOUR_SOURCE_ACCOUNT_API_KEY>
    export MANDRILL_APIKEY_TARGET=<YOUR_TARGET_ACCOUNT_API_KEY>
    mandrill-migrate

That's it, you are done.

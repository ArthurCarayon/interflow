# Script JS for a client project in case he doesn't pay you

It's a simple script (made in an hour), designed for webflow project. In case your client doesn't want to pay you and remove your access to the project, this script will ask for a remote JSON file, that you host in a free github project, if yes or no project has been paid. If not, change the headline "This company don't pay freelance" and remove all buttons, for example.

## Installation

Create a GitHub page from a new project (check on google hot to do that, easy and quick). Put it in the JSON file. 

```bash
dead:"false" // Do nothing
```
```bash
dead:"true" // Excecute script in webflow project
```

### In Webflow
In the webflow project add "Embedded script", and copy-paste content from *webflow-hidden-script-paiement.js*, custom it with the correct class and text.
Change the URL of JSON with the URL to the JSON file hosted on your GitHub page.


## Usage

In Github, change the value of **dead** in json file to **true**, and the value of **message** by the text you want

```bash
{ "dead":"false", "msg":"This company dont pay his suppliers" }

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
title: Draw the rest of the owl
---

It's time to build something cool. 🤘

We're using the code-along approach 👇

1.  Swizec explains what we're going to do
2.  Swizec codes a part of it and makes a commit
3.  You fill in the blanks
4.  Swizec shows you how to fill in the blanks

The following is an outline of what we're doing to help us keep on track.

We're going to copypasta from my solution repo in some places to save time.
Also helps with typos :P

## Setup

We're gonna start from scratch and build things together.

You'll need `gatsby-cli` and `serverless`.

```
$ npm install -g gatsby serverless
```

Clone the starter repo. It comes with an initialized Gatsby app and a place for
backend stuff.

```
$ git clone git@github.com:Swizec/modern-webapp-starter-repo.git
```

Mind you both of those are their own npm/yarn repository ... package? You'll
have to be careful about that going forward. It's easy to trip up.

### Dependencies for webapp

Go into the `webapp` directory and install dependencies:

```
$ yarn add apollo-boost graphql-tag isomorphic-fetch react-apollo react-apollo-hooks react-pose reakit-theme-default styled-tools gatsby-source-graphql
```

### Dependencies for server

Go into `server` directory and install dependencies:

```
$ yarn add aws-sdk graphql
```

## Build the UI

### Set up Reakit theme and provider

### Build GroceryList component

### Use hooks to drive state

### Add list name

### Input for a new item

### List items

### Add a remove button

## Build a basic GraphQL server

### Setup a handler

### Create serverless.yaml

### Build GraphQL query to read a grocery list name

Test with curl

```
$ curl -G 'https://z1kksu6iwb.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query={groceryList(listId: "bla", { listName }}'
```

### Build a GraphQL mutation to write a list

```
$ curl -G 'https://z1kksu6iwb.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query=mutation {changeGroceryList(listId: "bla", listName: "my list" )}'
```

### Save mutation to DB

### Read from DB

### Add GraphQL to write groceries

Test with

```
$ curl -G 'https://z1kksu6iwb.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query=mutation {changeGroceryList(listId: "bla", listName: "This is my party list", groceries: [{itemName: "beer", key:"123", done: false}, {itemName: "vodka", key: "124", done: false}])}'
```

### Add GraphQL to read groceries

Test with

```
$ curl -G 'https://z1kksu6iwb.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query={groceryList(listId: "bla", { listName, groceries { itemName } }}'
```

## Read GraphQL with Gatsby

### Setup gatsby-source-graphql

### Play with writing queries in GraphiQL

### Read list state with a page query

## Save changes

### Use apollo client to save listName changes

### Save list item changes too

## Read GraphQL on the fly

### Use apollo client to re-fetch your list on mount

## Enable PWA mode

## Deploy

-- Install now cli

-- Add Gatsby config

Do the thing

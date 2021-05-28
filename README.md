# Mentors Matching

Mentors Matching is an application which provides 3 step registration process and the last step is making a match suggestion of mentors based on options specified by user while registration(on 2nd step).

User can select mentors and able to select not more than 5 matches.
After the registration step is complete, the user navigated to their
profile page which includes a link allowing them to return and manage their
suggestions

## Installation

Use the following commands to install all the dependencies.

```bash
cd mentor-match
npm i
```

## Usage

You can run tha app useing the following commands sequense
```bash
npm start
npm start-server
```

## Features
Currently application supports following features:

* Implemented registration process with multi-step profile filling third step is making a match suggestion.
* The match suggestion list is parsed from provided CSV file
* The matched suggesion list is available to user
* The user is able to select up to 5 items from suggestion list
* The user can manage and reorder suggestions list by drag and drop
* After registration step is complete the user is navigated to profile page
* The profle page includes a link allowing users to return and manage their
suggestions.


And some additional features:
* Utils for parsing given CSV file into json and provide it to fake API
* Fake API server which provides parsed employees list with HTTP request as mock data
* npm scrips to run data parsing and fake API server
* Configured "redux" as state management tool
* Pages Routing with "react-router-dom"
* Redirect from non-existing routes to main page
* Page styleing with "react-jss"
* Basic password validation

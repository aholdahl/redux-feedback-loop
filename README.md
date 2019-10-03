# Redux Feedback Loop

This is an online portal for students to provide daily feedback on their personal and educational wellbeing.

## SETUP

Create your database and tables using the provided `data.sql` file. 

brew services start postgresql

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

npm run client
```

### ADD NEW FEEDBACK

There will be 4 views for the form parts:

- How are you feeling today?
- How well are you understanding the content?
- How well are you being supported?
- Any comments you want to leave?

Clicking next should move the user to the appropriate step in the process.

Each step should only allow the user to advance to the next step if a score was provided.

The `Comments` step is not required, an empty value is okay.

The last step of the process will allow the user to review their feedback then click Submit. If the user wishes to go back and change their responses, they will be allowed to do so from this view.

The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

### ADMIN SECTION

All of the existing feedback will be displayed at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

### TECHNOLOGIES USED

React, Redux, Axios, PostgreSQL, Material-UI

### FURTHER DEVELOPMENT

- Add the ability to flag an existing feedback entry for further review on the /admin view
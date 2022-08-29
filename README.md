# patchstack-spa-app

## Description

A simple application to view and modify a list of web app security risks, as well as add new ones.

View the web app here: https://patchstack-spa-app-liamgentile.netlify.app/.

## Important Folders+Files

### views (base page components)

- AddRiskPage.vue
  - page for adding a new risk
- EditRiskPage.vue
  - page for editing an existing risk
- HomePage.vue
  - home page where you can view the risks
- ViewRiskPage.vue 
  - a page where you can view more specific information about a given risk
  
 ### components
 
RiskForm.vue
 
Form Component for adding the security risk information. Used by both the EditRiskPage and AddRiskPage and changes dynamically.

RisksAccordion.vue 

Accordion Component which displays the current security risks. Used by the HomePage component.

### router (index.js)

Defines the routes for the application.

### store (index.js)
I used several Vuex states for this app. They allow me to update components dynamically based on the state, rather than creating individual pages for each risk. It also allows me to access this state across all components.

The states are securityRisks (the object holding all the saved risks), currentRisk (for viewing and editing the selected risk), and originalIndex (in order to properly delete an already existing object).

## Tools + Technologies used

Vue.js, Netlify, Bootstrap


  


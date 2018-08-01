STRUCTURE :

    BLOG MODULE
        - ACCOUNTS MODULE
            - Login ( Smart and Dumb )                                      WORKING                                
            - Forgot Password                                            
            - Show and Edit Profile                                         
        - DASHBOARD MODULE
            - View Page                                                     WORKING
        - POSTS MODULE 
            - Show Posts                                                    WORKING
            - Add Posts                                                     WORKING
            - Delete Posts                                                  WORKING
            - Edit Posts                                                    WORKING

Kulang : 
- Profile pages (interest and birthdate)
- Draft boolean
----------------------------------------------------------------------------------------------------------

DESCRIPTION :
    -BLOG MODULE
        - just contains the following modules for organization
        - Blog Component : similar to AppComponent
    - ACCOUNTS MODULE
        - responsible for account related matters
    - DASHBOARD MODULE  
        - View Component 
            - in charge of changing the View
            - shows the dashboard to the user
            - connects with the other modules
            - has states that indicates whether the user wants to see the post, add posts, edit posts, etc. and then
                it calls the components from the Post Module depending on the current state.
    - POSTS MODULE
        - responsible for post related matters
        - Add Component is called by the Dashboard Module because the add button is in the dashboard module
        - has a state as an output
    - USER SERVICE
        - Http Client requests
        - Contains the current user to make the user accesible to any component 
            and also cause im stubborn and i wanted to experiment so much back then 
            and when I realized that it wasnt a good approach since whenever I refresh, the currentUser somehow
            gets deleted, it's too late to take it back.

----------------------------------------------------------------------------------------------------------

ISSUES IN THE PROJECT :
- Refreshing --> deletes the current user in the service
- After editing a post or deleting a post, you need to click at home again to see the new results
- Dates with the same day but with different time are not sorted properly because 
    the dates came from a string datatype

----------------------------------------------------------------------------------------------------------

QUESTIONS ENCOUNTERED : 
1. When going to the other component, when do you use the 'routing' method and when do you use the 'smart-dumb' 
    component approach ?
2. What is this '=>' and how does it work ?
3. Why is the currentuser (which is in the service) gets deleted every time I refresh the browser ? 
4. What is the best practice in building the structure of your modules and components ?


----------------------------------------------------------------------------------------------------------

REMARKS : 
- Unsure if my structure makes sense -- it's messy
- a lot of flaws in the application
- Im sorry

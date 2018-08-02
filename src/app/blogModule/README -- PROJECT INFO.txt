STRUCTURE :

    BLOG MODULE
        - ACCOUNTS MODULE
            - Login ( Smart and Dumb )                                      WORKING                                
            - Forgot Password                                               WORKING
            - Show and Edit Profile                                         WORKING                                        
        - DASHBOARD MODULE
            - View Page                                                     WORKING
        - POSTS MODULE 
            - Show Posts                                                    WORKING
            - Add Posts                                                     WORKING
            - Delete Posts                                                  WORKING
            - Edit Posts                                                    WORKING


----------------------------------------------------------------------------------------------------------

DESCRIPTION :
    -BLOG MODULE
        - just contains the needed modules for organization
    - ACCOUNTS MODULE
        - responsible for account related matters
        - FORGOT PASSWORD Component
        - LOGIN Component
        - PROFILE Component
            - contains edit
    - DASHBOARD MODULE  
        - VIEW Component 
            - in charge of changing the contents of the dashboard
            - Has a dumb component that is not so dumb (hybrid)
            - shows the dashboard to the user
            - connects with the other modules, because instead of using routers, I decided to just pass 
                the values among components. EXPERIMENT!!!
            - has states that indicates whether the user wants to see the post, add posts, edit posts, etc. and then
                it calls the components corresponding to its current state. EXPERIMENT!!!
            - you can say that the PostModule depends on this Module
    - POSTS MODULE
        - responsible for post related matters
        - SHOW Component
            - shows edit and delete if current user
            - Input : posts to show, can be filtered, myposts, mydrafts or all
            - Output : Emitter if the edit button is pressed -> Notify the VIEW component that  
                the edit button was pressed -> VIEW component will trigger the EDIT component to    
                show the edit form
        - ADD Component
            - Triggered by the Dashboard Module because the add button is in the dashboard module, in the navbar
            - Output : Emitter if the user is finished with the adding, hence, going back to home
        - EDIT Component
    
        

    - USER SERVICE
        - Http Client requests
        - Contains the current user to make the user accesible to any component 

----------------------------------------------------------------------------------------------------------

ISSUES IN THE PROJECT :
- Refreshing --> deletes the current user in the service
- After editing a post or deleting a post, you need to click at home again to see the new results
- Dates with the same day but with different time are not sorted properly because 
    the dates came from a string datatype

----------------------------------------------------------------------------------------------------------

QUESTIONS ENCOUNTERED : 

1. What is this '=>' and how does it work ?
2. Why is the currentuser (which is in the service) gets deleted every time I refresh the browser ? 
    Does this mean that the service restarts every time the refresh button is pressed?
3. What is the best practice in building the structure of your modules and components ?
4. Which is more wise : 
        - let the smart components be independent from the other smart components.
        - let the smart compoentns be dependent from the other smart components.
5. How do you know whether it's more appropriate to go to the other component with the help of input/output and directives rather
    than routing?
6. Is it ideal to put input and outputs in smart components?
7. I understand that to pass data among other modules without the user of service, i need to have a parent module. But how do you   
    do that when you have to route? When routing you dont actually call the component's selector right? So I couldnt use the input
    to supply the data from the parent to the child component. So how do you get the data? I couldnt find a way so I decided to just put it 
    in the service


----------------------------------------------------------------------------------------------------------

REMARKS : 
- Structure is messy because I was confused on what approach I should make so I decided to experiment and before I know it, 
    it took a domino effect on me.
- a lot of flaws in the application
- Im sorry
- I will remake this with a better approach

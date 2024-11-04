# Meet-app

# Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.


# Context

Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to
be the future of web development. By combining these two concepts, your app will not only work as a
normal web application, but it will also reap the benefits of both serverless architecture and PWAs:
● Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
● PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,
responsive design, and cross-platform compatibility.

For this app, you’ll be using a TDD approach, where you write tests before writing the actual
functionality for your app in code. Writing tests forces you to focus on the requirements of your
application before jumping into the code. TDD relies on the repetition of a very short development
cycle, allowing you to get immediate feedback and deliver high-quality code.

Last but not least, you’ll add some graphs to your app, which will make it more visually appealing and
allow you to more easily draw conclusions from the data. A picture is worth a thousand words, right?
With a number of visualization techniques under your belt, you’ll be able to display any type of data
you want and produce a variety of output formats. Your app will allow users to search for a city and
get a list of events hosted in that city. For the data visualization component, you’ll add two
charts—one that shows how many events will take place in each location (via a scatterplot), and
another that visualizes the popularity of event genres (via a pie chart).


# Mock-ups or Other Assets
In this section, you’ll find mockups for your app. We’ll keep things simple for now so that you can
focus on writing clean, readable code. Once you’ve mastered the foundational aspects of the code, we
encourage you to add unique flair to your app:

![image](https://github.com/user-attachments/assets/9357cdc7-65df-49f9-a5f3-10badf640cda)

![image](https://github.com/user-attachments/assets/d6dcc222-80ab-4f4b-9f08-ac3f2cb2805e)

![image](https://github.com/user-attachments/assets/cc32dc29-1b1f-4332-9e85-f25d0310e20e)

![image](https://github.com/user-attachments/assets/0a1ab6e0-914c-48bb-b36f-4dd6cd7bc4d5)


# User stories for Meet App:

*Feature 1: Show/Hide Event Details*

User Story: As a user, I should be able to toggle the visibility of event details, So that I can focus on the events that interest me.

*Feature 2: Specify Number of Events*

User Story: As a user, I should be able to set the number of events to display, So that I can customize my event feed.

*Feature 3: Use the App When Offline*

User Story: As a user, I should be able to access certain app features offline, So that I can use the app without an internet connection.

*Feature 4: Add an App Shortcut to the Home Screen*

User Story: As a user, I should be able to add a shortcut to the app on my home screen, So that I can quickly access the app.

*Feature 5: Display Charts Visualizing Event Details*

User Story: As a user, I should be able to view charts that visualize event details, So that I can easily understand event trends and patterns.
Here are the Gherkin scenarios for the user stories:

Feature 1: Show/Hide Event Details

Scenario: Show Event Details
Given I am viewing an event list
When I tap on an event
Then the event details should be displayed

Scenario: Hide Event Details
Given I am viewing an event with its details displayed
When I tap on the "Hide Details" button
Then the event details should be hidden

Feature 2: Specify Number of Events

Scenario: Set Number of Events 
Given I am on the settings page When I enter "10" in the "Number of Events" field Then the app should display 10 events on the main screen

Feature 3: Use the App When Offline

Scenario: Access Offline Features 
Given I have previously accessed event data while online When I switch to offline mode Then I should be able to view the previously accessed event data

Feature 4: Add an App Shortcut to the Home Screen

Scenario: Add App Shortcut
Given I am on the home screen When I long-press on the app icon Then a shortcut menu should appear, allowing me to add a shortcut to the home screen

Feature 5: Display Charts Visualizing Event Details

Scenario: View Event Charts 
Given I am viewing an event When I tap on the "View Charts" button Then charts visualizing event details should be displayed







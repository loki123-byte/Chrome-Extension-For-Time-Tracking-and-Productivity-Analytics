# Chrome-Extension-For-Time-Tracking-and-Productivity-Analytics

COMPANY : CODTECH IT SOLUTIONS

NAME: LOKENDRA DUTT BHATT

INTERN ID:CTO4DH283

DOMAIN:FRONT END DEVELOPMENT

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH

Build a Chrome extension that monitors and tracks the time users spend on different websites and provides a simple daily summary of their activity.

. Key Features
 
.Website Time Tracking

.Automatically detects when the user switches between tabs or websites.

.Calculates time spent on each domain (e.g., google.com, youtube.com).

.Real-Time Logging

.Uses Chrome’s background service worker to monitor activity.

.Stores time data in Chrome's local storage.

.Popup Summary

.Clicking the extension icon shows a popup with:

.List of websites visited

.Time spent on each (in minutes & seconds)

.A “Reset” button to clear the data

.Offline & Secure

.No internet/server required.

.All data is stored locally and never leaves the browser.

.Technology Used

Manifest V3 (Chrome Extension API)

JavaScript (Vanilla)

HTML/CSS for Popup UI

Chrome Storage API for data persistence

WORKING-:

.Extension listens for tab and window changes.

.When user switches tabs or focuses on a new website:

.It calculates how long the user stayed on the previous site.

OUTPUT-:

<img width="288" height="176" alt="Image" src="https://github.com/user-attachments/assets/a73019ab-f08c-4b60-b1b0-b21aaa1a6a06" />

.It updates the local data store with the time spent.

.The popup UI reads and displays this data in real-time.




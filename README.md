<h1>KAJJ Academy</h1><br>
https://hackathon-website-enfpf6p55q-uc.a.run.app/<br>
<h2>Basic Description</h2><br>
- A website application that is for children K-12 that are being homeschooled. Courses have several different sections for students to work through. Made one high quality course as a demostration. Project still in development.<br>
- The course is a Computer Science course for kids from 3rd to 8th grade. It is based around the fundamentals of coding. The range is from variables and data types to functions.<br>
- To access the game, go to Course > Introduction To Computer Science > Enroll. Enjoy!<br>

<h2>Elements(x = complete)</h2>
[x] Basic Website Design<br>
[x] Login Form<br>
[x] HTML Email<br>
[x] JWT/Authentification<br>
[x] Mobile Friendly<br>
[x] Code Execution within course<br>
[x] Google Cloud for Database Handling<br>
[x] SHA-512<br>
[ ]Allow student to be assigned to parent account<br>
[ ]Monetiziation<br>
[ ]Course Progress Tracker<br>
[ ]Sending Emails<br>
[ ]Assigning students to parents<br>

<h2>Tech Tree</h2>
All of the course content is written in JavaScript and HTML/CSS, with jQuery and Canvas on the front end, and Node.js, Express.js, and Handlebars.js on the backend. The website design is written with Bootstrap. The database has multiple tables designed to hold real data, and was done with MySQL, hosted on Google SQL. It's ready and can hold real data, however it is not connectied to our website instance. The website is hosted on Google Cloud Run, and is connected to our database on Google SQL.<br> 
We hash our user's login name and password (using SHA-512) from client side to back end in case of interception, only their account with us is compromised and not their password (assuming they use a strong password), then hash it again on our back end to compare login data.

<h2>Screenshots</h2>
![Data Server](https://user-images.githubusercontent.com/99719193/160279604-68614dc7-3db8-45f1-869f-69606d4ebfaf.png)
![background for game](https://user-images.githubusercontent.com/99719193/160280095-1e4272f4-1303-4b0f-8389-67bbf7486902.svg)
![knight1 for game](https://user-images.githubusercontent.com/99719193/160280120-feff3341-e1d6-46b2-8d4c-cc7b4ecbcd5a.svg)

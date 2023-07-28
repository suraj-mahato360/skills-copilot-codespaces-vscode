// Create web server
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var port = 3000;
var server = app.listen(port, listening);
function listening() {
    console.log("listening on port " + port);
}
// Use static files in public folder
app.use(express.static('public'));
// Get index.html
app.get('/', sendIndex);
function sendIndex(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
}
// Get comments.json
app.get('/comments', sendComments);
function sendComments(request, response) {
    response.sendFile(path.join(__dirname + '/comments.json'));
}
// Post comments.json
app.post('/comments', postComments);
function postComments(request, response) {
    var data = request.body;
    var comments = fs.readFileSync('comments.json');
    var commentsJSON = JSON.parse(comments);
    commentsJSON.push(data);
    var commentsString = JSON.stringify(commentsJSON);
    fs.writeFileSync('comments.json', commentsString);
}
// Post contact.json
app.post('/contact', postContact);
function postContact(request, response) {
    var data = request.body;
    var contact = fs.readFileSync('contact.json');
    var contactJSON = JSON.parse(contact);
    contactJSON.push(data);
    var contactString = JSON.stringify(contactJSON);
    fs.writeFileSync('contact.json', contactString);
}
// Post projects.json
app.post('/projects', postProjects);
function postProjects(request, response) {
    var data = request.body;
    var projects = fs.readFileSync('projects.json');
    var projectsJSON = JSON.parse(projects);
    projectsJSON.push(data);
    var projectsString = JSON.stringify(projectsJSON);
    fs.writeFileSync('projects.json', projectsString);
}
// Post skills.json
app.post('/skills', postSkills);
function postSkills(request, response) {
    var data = request.body;
    var skills = fs.readFileSync('skills.json');
    var skillsJSON = JSON.parse(skills);
    skillsJSON.push(data);
    var skillsString = JSON.stringify(skillsJSON);
    fs.writeFileSync('skills.json', skillsString);
}
// Post member.json
app.post('/member', postMember);
function postMember(request, response) {
    var data = request.body;
    var member = fs.readFileSync('member.json');
    var memberJSON = JSON.parse(member);
    memberJSON.push(data);
    var memberString =
var menu = {
    "work": "Work",
    "projects": "Projects",
    "education": "Education",
    "map": "Map"
}

$(".nav").append(HTMLnavStart);
for (link in menu) {
var formattedLink = HTMLnavLink.replace("%data%", menu[link]);
$("#nav_list").append(formattedLink);
}

var bio = {

        "name": "Jeff Bynum",
        "role": "Front End Developer",

        "contacts": {
            "mobile": "310-387-8056",
            "email": "bynumjj@mac.com",
            "twitter": "jjeffbynum",
            "github": "bynumjj",
            "location": "Los Angeles"
        },

        "welcomeMsg": "Welcome to my page.",
        "skills": ["Languages:  HTML, CSS, JavaScript", "Business Writing", "Project Management"],
        "bioPic": "images/biopic.jpg"
    };

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedbioPic);

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedlocation);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
 var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
 $("#skills").append(formattedSkill);
}
$("#header").append(formattedwelcomeMsg);


}



//work section

var work = {

        "jobs": [

            {
                "employer": "Self",
                "title": "Dad",
                "location": "Los Angeles",
                "dates": "2000 - 2015",
                "description": "Oversaw the development of two human beings.  Based on original material.  Was involved in all aspects of production."
                           },

            {
                "employer": "Joss Whedon - Mutant Enemy Productions",
                "title": "Senior Vice President",
                "location": "Los Angeles",
                "dates": "1998 - 1999",
                "description": "Senior executive in charge of film and television development. Supervised creative direction on all projects, selected writers, wrote extensive editorial notes and synopses, developed treatments and pitches.  Served as the primary liaison to talent agencies, networks, and 20th Century Fox Studio.   Tracked spec material and generated feature film ideas.  Maintained relationships with emerging writers and directors.  Supervised staffing for television series BUFFY THE VAMPIRE SLAYER and ANGEL.  Developed CHEAP SHOTS (half-hour sitcom pilot for the Fox network)."

                            },

            {
                "employer": "Walt Disney Pictures & Hollywood Pictures",
                "title": "Director of Production",
                "location": "Los Angeles",
                "dates": "1993 - 1997",
                "description": "Oversaw the development of over forty feature film projects.  Selected writers, wrote extensive editorial notes and synopses, developed treatments and pitches.  Served as a liaison to talent agencies and producers.   Tracked spec material and generated feature film ideas.  Maintained relationships with emerging writers and directors.  Produced projects include MIGHTY JOE YOUNG, SIMON BIRCH, JAMES AND THE GIANT PEACH, and TOM AND HUCK."

                  },

            {
                "employer": "Scott Rudin Productions",
                "title": "Creative Executive",
                "location": "Los Angeles",
                "dates": "1992-1993",
                "description": "Worked on the development of ADDAMS FAMILY 2, THE FIRM, NOBODY'S FOOL, GUARDING TESS, LIFE WITH MIKEY, among others.  Wrote story notes and script coverage; developed detailed treatments based on original story ideas, developed relationships with emerging writers and directors."
}

        ]
                };


work.display = function() {


for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = (formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
       var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);


}

};


work.display();

// projects section

var projects = {

        "projects": [

            {
                "title": "American Council on Makin' Bacon Pancakes",
                "dates": "2014",
                "description": "Provided &quotFull Stack&quot solutions for industry trade group. ",
                "images": ["images/pancakes.jpg"],
                "url": "https://www.makinbaconpancakes.com"
            },

            {

                "title": "Manic Energy Drinks",
                "dates": "2013",
                "description": "Created product website for demanding entrepreneur.",
                "images": ["images/maniac.jpg"],
                "url": "https://www.manicenergy.com"
            }

        ]
    }

projects.display = function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[project].images.length > 0) {

    for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
}
}


  var formattedProjectURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
    $(".project-entry:last").append(formattedProjectURL);

}
};

projects.display();


//Education section

var education = {

        "schools": [

            {
                "name": "UCLA Anderson School of Management",
                "location": "Los Angeles, CA",
                "degree": "M.B.A.",
                "major": ["Marketing"],
                "dates": 1992
        },

            {
                "name": "Yale University",
                "location": "New Haven, CT",
                "degree": "B.A.",
                "major": ["East Asian Studies, Chinese concentration"],
                "dates": 1985
            }

        ],

        "onlineCourses": [

            {
                "title": "Nanodegree: Front-End Web Developer",
                "school": "Udacity",
                "dates": 2015,
                "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            },

            {
                "title": "HTML & CSS   -   JavaScript   -   jQuery   -   Make a Website",
                "school": "Codecademy",
                "dates": 2015,
                "url": "https://www.codecademy.com/learn"
            }

        ]

    };


education.display = function() {

    for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
}

    if (education.onlineCourses.length > 0) {
      $(".education-entry:last").append(HTMLonlineClasses);

      for (course in education.onlineCourses) {


   var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
   $(".education-entry:last").append(formattedOnlineSchool);
   var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
   $(".education-entry:last").append(formattedOnlineDates);
   var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
   $(".education-entry:last").append(formattedOnlineTitle);
   var formattedOnlineURL = HTMLonlineURL.replace(/"%data%"/g, education.onlineCourses[course].url);
   $(".education-entry:last").append(formattedOnlineURL);

}



}
};

education.display();

// map section

$("#map").append(googleMap);

// internationalize button

$("#header").append(internationalizeButton)

function inName() {
    var name = bio.name;
    console.log(name);
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}



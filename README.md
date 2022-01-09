# Verdana

Welcome to Verdana! Instantly connect with **healthcare providers** no matter how far you are. Login and enjoy **unlimited** telehealth video calling.

Check it out here: https://msaini26.github.io/verdana/

## Inspiration

The pandemic has completely transformed our lives where our homes have become our workplace, gym, relaxation center, sleeping areas, and more. Because our movement outside of our homes was limited, in-person physician visits have also come to a complete stop. As a result, telehealth appointments are the new 'normal' for seeing your healthcare provider. According to the CDC, "during the first quarter of 2020, the number of telehealth visits increased by 50%, compared with the same period in 2019, with a 154% increase in visits noted in surveillance week 13 in 2020, compared with the same period in 2019." That's why I developed Verdana. My goal is to improve communication between physicians and their patients by creating a simple interface for telehealth visits.

## What it does

Verdana allows users to create or login into their account, and we will verify if their account credentials are correct or not. After, the patient inputs the room number and access code provided from their registration confirmation email. Next, they will enter a waiting room until the telehealth provider joins the video call. Once the physician connects, the patient is free to mute, unmute, and turn their camera on and off while they are in their telehealth visit. Upon completion of their appointment, the patient simply clicks the 'end call' button to return back to the login page. And voilà, the user will have completed their first telehealth visit.



## How I built it
I utilized VS Code to build my front end, creating a unique UI/UX design for our users. The web app contained a consistent theme and user interaction with the use of bootstrap. I also created a login page and tested edge cases to authenticate accounts. For example, if a user does not enter a valid email and/or password, an error will be thrown and they will have to re-enter their information in. I also utilized Adobe Illustrator to design the logo featured throughout the site. For the video call integration, I utilized Agora's Video Call API to grant users the ability to join a telehealth visit, end a telehealth visit, unmute themselves, mute themselves, turn their camera on, and turn their camera off. 

## Challenges I ran into
Utilizing Agora's API for the first time was difficult, so I spent time reading through the documentation to understand its functionality. In addition, I had trouble connecting my application to the server and back. After looking through my Agora console, I later realized that I was utilizing an outdated API key. 

## Accomplishments that I'm proud of
This was my first time utilizing Agora's API in a project. I thoroughly enjoyed developing Verdana because I could test my front-end knowledge and expand my back-end knowledge. Though I ran into some challenges, I am proud of my final implementation with its satisfying UI/UX design. Finally, I am extremely proud to have created a responsive website that can be viewed on mobile devices comfortably.

## What I learned
As mentioned before, this was my first time learning about and integrating Agora's APIs. Overall, building Verdana was an incredible education experience, where I expanded my knowledge of front-end and back-end frameworks.

## What's next for Verdana
My vision is that Verdana will continue to improve lives by creating a streamlined telehealth platform and connecting patients to their physicians quickly. I would like to expand the capabilities of the application for more services between a provider and consumer. In addition, I would like to create a more inclusive UI to help individuals with different needs.



// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const teamMembers = [
    { name: 'Di-Jancko Calitz ', role: 'Team Lead' },
    { name: '', role: 'Backend Developer' },
    { name: '', role: 'Frontend Developer' },
    { name: 'Di-Jancko Calitz ', role: 'Data Manager' },
    { name: '', role: 'Documentation Manager' }
];

const events = [
    { title: 'Hackathon', date: '2025-05-15', location: 'Online', image: 'tech.jpg' },
    { title: 'Art Festival', date: '2025-06-01', location: 'Stellenbosch', image: 'art.jpg' },
    { title: 'Music Jam', date: '2025-07-20', location: 'Cape Town', image: 'music.jpg' },
    { title: 'Startup Pitch Night', date: '2025-05-25', location: 'Johannesburg', image: 'pitch.jpg' },
    { title: 'Cultural Carnival', date: '2025-06-15', location: 'Durban', image: 'carnival.jpg' },
    { title: 'Book Fair', date: '2025-06-22', location: 'Pretoria', image: 'book.jpg' },
    { title: 'Charity Run', date: '2025-07-05', location: 'Sandton', image: 'run.jpg' },
    { title: 'Tech Expo', date: '2025-07-18', location: 'Online', image: 'expo.jpg' },
    { title: 'Wine Tasting Event', date: '2025-08-12', location: 'Stellenbosch', image: 'wine.jpg' },
    { title: 'Gaming Tournament', date: '2025-08-25', location: 'Online', image: 'gaming.jpg' },
    { title: 'Food Festival', date: '2025-09-10', location: 'Cape Town', image: 'food.jpg' },
    { title: 'Fashion Show', date: '2025-09-20', location: 'Johannesburg', image: 'fashion.jpg' },
    { title: 'Film Screening', date: '2025-10-05', location: 'Durban', image: 'film.jpg' },
    { title: 'Yoga Retreat', date: '2025-10-12', location: 'Plettenberg Bay', image: 'yoga.jpg' },
    { title: 'Robotics Workshop', date: '2025-10-25', location: 'Cape Town', image: 'robotics.jpg' },
    { title: 'Nature Walk', date: '2025-11-01', location: 'Kruger National Park', image: 'nature.jpg' },
    { title: 'Photography Meetup', date: '2025-11-10', location: 'Stellenbosch', image: 'photo.jpg' },
    { title: 'Comedy Night', date: '2025-11-15', location: 'Johannesburg', image: 'comedy.jpg' },
    { title: 'Christmas Market', date: '2025-12-05', location: 'Cape Town', image: 'christmas.jpg' },
    { title: 'New Year Gala', date: '2025-12-31', location: 'Durban', image: 'gala.jpg' }
];

router.get('/', (req, res) => {
});

router.get('/about', (req, res) => {
});

router.get('/events', (req, res) => {
});

router.get('/contact', (req, res) => {
});

router.get('/thankyou', (req, res) => {
});

module.exports = router;

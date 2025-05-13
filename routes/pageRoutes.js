// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const teamMembers = [
    { name: 'Di-Jancko Calitz ', role: 'Team Lead' },
    { name: 'Petrus Abel Viljoen', role: 'Backend Developer' },
    { name: '', role: 'Frontend Developer' },
    { name: 'Di-Jancko Calitz ', role: 'Data Manager' },
    { name: '', role: 'Documentation Manager' }
];

const events = [
    { title: 'Hackathon', date: '2025-05-15', location: 'Online', image: 'images/tech.jpg' },
    { title: 'Art Festival', date: '2025-06-01', location: 'Stellenbosch', image: 'images/art.jpg' },
    { title: 'Music Jam', date: '2025-07-20', location: 'Cape Town', image: 'images/music.png' },
    { title: 'Startup Pitch Night', date: '2025-05-25', location: 'Johannesburg', image: 'images/pitch.png' },
    { title: 'Cultural Carnival', date: '2025-06-15', location: 'Durban', image: 'images/carnival.png' },
    { title: 'Book Fair', date: '2025-06-22', location: 'Pretoria', image: 'images/book.jpg' },
    { title: 'Charity Run', date: '2025-07-05', location: 'Sandton', image: 'images/run.jpg' },
    { title: 'Tech Expo', date: '2025-07-18', location: 'Online', image: 'images/expo.jpg' },
    { title: 'Wine Tasting Event', date: '2025-08-12', location: 'Stellenbosch', image: 'images/wine.png' },
    { title: 'Gaming Tournament', date: '2025-08-25', location: 'Online', image: 'images/gaming.jpg' },
    { title: 'Food Festival', date: '2025-09-10', location: 'Cape Town', image: 'images/food.jpg' },
    { title: 'Fashion Show', date: '2025-09-20', location: 'Johannesburg', image: 'images/fashion.jpg' },
    { title: 'Film Screening', date: '2025-10-05', location: 'Durban', image: 'images/film.jpg' },
    { title: 'Yoga Retreat', date: '2025-10-12', location: 'Plettenberg Bay', image: 'images/yoga.jpg' },
    { title: 'Robotics Workshop', date: '2025-10-25', location: 'Cape Town', image: 'images/robotics.jpg' },
    { title: 'Nature Walk', date: '2025-11-01', location: 'Kruger National Park', image: 'images/nature.jpg' },
    { title: 'Photography Meetup', date: '2025-11-10', location: 'Stellenbosch', image: 'images/photo.jpg' },
    { title: 'Comedy Night', date: '2025-11-15', location: 'Johannesburg', image: 'images/comedy.jpg' },
    { title: 'Christmas Market', date: '2025-12-05', location: 'Cape Town', image: 'images/christmas.jpg' },
    { title: 'New Year Gala', date: '2025-12-31', location: 'Durban', image: 'images/gala.jpg' }
];

// Home page
router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

// Events page
router.get('/events', (req, res) => {
    res.render('pages/events', { title: 'Events', events: events });
});

// Contact page (GET)
router.get('/contact', (req, res) => {
    res.render('pages/contact.ejs', { title: 'Contact', errors: [], formData: {} });
});

// Contact page submit (POST)
router.post('/contact', (req, res) => {

    const { name, email, message } = req.body;
    const errors = [];

    if (!name || name.trim() === '') 
    {
        errors.push('Name is required');
    }

    if (!email || email.trim() === '') {
        errors.push('Email is required');
    } 
    else 
    {
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!emailRegex.test(email)) 
        {
        errors.push('Invalid email format');
        }
    }

    if (!message || message.trim() === '') 
    {
        errors.push('Message is required');
    }

    if (errors.length > 0) 
    {
        res.render('pages/contact.ejs', { title: 'Contact', errors, formData: { name, email, message } });
    } 
    else 
    { 
        res.redirect('/thankyou?name=' + encodeURIComponent(name));
    }
});

// Thank You page
router.get('/thankyou', (req, res) => {
    const name = req.query.name || 'Guest';
    res.render('pages/thankyou.ejs', { title: 'Thank You', name });
});

// 404 handler
router.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

module.exports = router;

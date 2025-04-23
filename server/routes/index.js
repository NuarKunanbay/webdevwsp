const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')

router.use('/user', userRouter)

// Add a simple schedule endpoint for the frontend to call
router.get('/schedule', (req, res) => {
    // Mock schedule data
    const scheduleData = {
        days: [
            {
                day: 'Monday',
                classes: [
                    { time: '9:00 - 10:30', subject: 'Mathematics', room: '301', teacher: 'Dr. Smith' },
                    { time: '10:45 - 12:15', subject: 'Physics', room: '209', teacher: 'Prof. Johnson' },
                    { time: '13:00 - 14:30', subject: 'Computer Science', room: '405', teacher: 'Dr. Williams' }
                ]
            },
            {
                day: 'Tuesday',
                classes: [
                    { time: '9:00 - 10:30', subject: 'Chemistry', room: '302', teacher: 'Dr. Brown' },
                    { time: '10:45 - 12:15', subject: 'Biology', room: '210', teacher: 'Prof. Miller' }
                ]
            },
            {
                day: 'Wednesday',
                classes: [
                    { time: '9:00 - 10:30', subject: 'Mathematics', room: '301', teacher: 'Dr. Smith' },
                    { time: '13:00 - 14:30', subject: 'Computer Science', room: '405', teacher: 'Dr. Williams' }
                ]
            },
            {
                day: 'Thursday',
                classes: [
                    { time: '10:45 - 12:15', subject: 'Physics', room: '209', teacher: 'Prof. Johnson' },
                    { time: '13:00 - 14:30', subject: 'Chemistry', room: '302', teacher: 'Dr. Brown' }
                ]
            },
            {
                day: 'Friday',
                classes: [
                    { time: '9:00 - 10:30', subject: 'Biology', room: '210', teacher: 'Prof. Miller' },
                    { time: '10:45 - 12:15', subject: 'Computer Science', room: '405', teacher: 'Dr. Williams' }
                ]
            }
        ]
    };
    
    res.json(scheduleData);
});

module.exports = router

// index.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Step 2 - DB Connection
mongoose.connect('mongodb://localhost:27017/videoapp', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Step 3 - Model definition  
const courseSchema = mongoose.Schema({
  title: String,
  description: String 
});

const Course = mongoose.model('Course', courseSchema);


// Step 4 - Routes
app.get('/api/courses', async (req, res) => {
  
  const courses = await Course.find({});

  res.json(courses);

});


app.listen(5000, () => {
  console.log('Server listening on port 5000');    
})


//Seed database

// index.js

async function seedDB() {

    // Clear existing courses    
    await Course.deleteMany({});
  
    // Seed sample course  
    const c1 = new Course({
      title: 'React Basics',
      description: 'Intro to React' 
    });
    
    await c1.save();
  
    const c2 = new Course({ 
      title: 'Node.js Basics',
    });
    await c2.save();
  }
  
  seedDB();


//   // Test GET route

//   node index.js 
//   // Server with MongoDB connection starts
  
//   GET /api/courses 
//   // Returns seeded courses JSON

// index.js

// All app code

app.listen(3000, () => {

    console.log('Server started');
  
    // Seed data
    seedDB();
     
    // SERVER NOW STARTED
    
    // Next steps after starting server
  
    // 1. Make GET request to test route
    // Sample request from client/Postman/code
    GET '/api/courses' 
  
  });


  // Expand routes
  app.post('/api/courses', async (req, res) => {
    // Code to create new course  
    const course = new Course({
      title: req.body.title,
    });
  
    await course.save();
    
    res.status(201).send(course);
  });
  
  app.delete('/api/courses/:id', async (req, res) => {
    // Code to delete course
    
    await Course.findByIdAndRemove(req.params.id);
    
    res.status(200).send();
  });
  
  // Other routes..get by id, update..
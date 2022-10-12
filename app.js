const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // an optional middleware to log incomming requests into the console window
const mongoose = require('mongoose');
const cron = require('node-cron');
const config = require('config');

//import middlewares
const AllowCORS = require('./middlewares/AllowCORSMiddleware');

//import routes
const announcementRoutes = require('./routes/AnnouncementRoute');
const departmentRoutes = require('./routes/DepartmentRoute');
const userRoutes = require('./routes/UserRoute');
const companyRoutes = require('./routes/CompanyRoutes');
const employeeRoute = require('./routes/EmployeeRoute');
const billingRoute = require('./routes/BillingRoutes');
const scheduleRoutes = require('./routes/SchedulingRoutes');
const settingRoutes = require('./routes/SettingsRoute');

//Cron Jobs
const { task } = require('./cron/sendReminder');

const app = express();

mongoose.connect(
  `mongodb+srv://${config.get('db_user')}:${config.get('db_password')}@${config.get('db_host')}`,
  { useNewUrlParser: true },
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev')); // Now all the incomming requests with funnel through it and will get logded into the console window.
app.use(AllowCORS); // Enable CORS
app.use('/announcement', announcementRoutes);
app.use('/department', departmentRoutes);
app.use('/user', userRoutes);
app.use('/company', companyRoutes);
app.use('/employee', employeeRoute);
app.use('/billing', billingRoute);
app.use('/schedules', scheduleRoutes);
app.use('/setting', settingRoutes);

task.start();

module.exports = app;

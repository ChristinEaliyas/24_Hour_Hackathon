const express = require('express');
const url = require('url');
const { pool } = require("./dbConfig");
const app = express();
const server = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/register',(req, res) => {
    res.render('register');
})


app.post('/team/reg', (req, res) => {
    let { team_name,team_leader, register_number, department, year_of_study, kmail, phone_number,
        team_member_2, register_number_2, department_2, year_of_study_2, kmail_2, phone_number_2,
        team_member_3, register_number_3, department_3, year_of_study_3, kmail_3, phone_number_3,
        team_member_4, register_number_4, department_4, year_of_study_4, kmail_4, phone_number_4,
        team_member_5, register_number_5, department_5, year_of_study_5, kmail_5, phone_number_5
    } = req.body;
    console.log(team_name,team_leader, register_number, department, year_of_study, kmail, phone_number,
        team_member_2, register_number_2, department_2, year_of_study_2, kmail_2, phone_number_2,
        team_member_3, register_number_3, department_3, year_of_study_3, kmail_3, phone_number_3,
        team_member_4, register_number_4, department_4, year_of_study_4, kmail_4, phone_number_4,
        team_member_5, register_number_5, department_5, year_of_study_5, kmail_5, phone_number_5,);
    res.redirect('/')
    pool.query(
        `INSERT INTO certificates (team_name,team_leader, register_number, department, year_of_study, kmail, phone_number,
            team_member_2, register_number_2, department_2, year_of_study_2, kmail_2, phone_number_2,
            team_member_3, register_number_3, department_3, year_of_study_3, kmail_3, phone_number_3,
            team_member_4, register_number_4, department_4, year_of_study_4, kmail_4, phone_number_4,
            team_member_5, register_number_5, department_5, year_of_study_5, kmail_5, phone_number_5)
        VALUES ($1, $2, $3, $4, $5, $6, $7,
            $8, $9, $10, $11, $12, $13, 
            $14, $15, $16, $17, $18, $19, 
            $20, $21, $22, $23, $24, $25, 
            $26, $27, $28, $29, $30, $31)`,
        [team_name,team_leader, register_number, department, year_of_study, kmail, phone_number,
        team_member_2, register_number_2, department_2, year_of_study_2, kmail_2, phone_number_2,
        team_member_3, register_number_3, department_3, year_of_study_3, kmail_3, phone_number_3,
        team_member_4, register_number_4, department_4, year_of_study_4, kmail_4, phone_number_4,
        team_member_5, register_number_5, department_5, year_of_study_5, kmail_5, phone_number_5,],
        (err, results) => {
            if(err){
                console.log(err);
            }else{
                console.log(results.rows)
            }
        }
    )
})



server.listen(3000)
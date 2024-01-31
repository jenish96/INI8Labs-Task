const con = require('./mysql');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/user/all', (req, res) => {
    try {
        con.query('select * from Registration', (err, result) => {
            if (err) {
                res.send('Error');
            } else {
                res.send(result);
            }
        })
    } catch {
        return res.status(500).json({
            success: false,
            message: "Error Occured!"
        });
    }
});

app.post('/user/register', (req, res) => {
    const { name, email, dob } = req.body

    if (!name || !email || !dob) {
        res.status(400).json({
            success: false,
            message: "All Fields are Required!"
        })
    }

    con.query('INSERT INTO Registration SET ?', req.body, (err, result, fields) => {
        if (err?.code == "ER_DUP_ENTRY") {
            return res.status(400).json({
                success: false,
                message: "Email is already Exist"
            })
        }
        return res.status(201).json({
            success: true,
            message: "User Successfully Registered"
        });
    })
});

app.put('/user/update/:id', (req, res) => {
    try {
        let payload = req.body
        let data = [payload.name, payload.email, payload.dob, req.params.id];
        con.query(`UPDATE Registration SET name=?, email=? , dob=? where id=?`, data, (err, result, fields) => {
            if (err?.code == "ER_DUP_ENTRY") {
                return res.status(400).json({
                    success: false,
                    message: "Email is already Exist"
                })
            }
            return res.status(201).json({
                success: true,
                message: "User Successfully Updated"
            });
        })
    } catch {
        return res.status(500).json({
            success: false,
            message: "Error Occured!"
        });
    }
});

app.delete('/user/delete/:id', (req, res) => {
    try {
        const { id } = req.params
        con.query(`DELETE FROM Registration WHERE id=${id}`, (err, result, fields) => {
            return res.status(201).json({
                success: true,
                message: "User Successfully Deleted"
            });
        })
    } catch {
        return res.status(500).json({
            success: false,
            message: "Error Occured!"
        });
    }
});

app.listen('5000', () => {
    console.log("Server Running on http://localhost:5000/")
});
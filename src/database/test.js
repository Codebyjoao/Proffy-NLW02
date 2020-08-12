const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) =>{
    
    proffyValue ={
        name: "Diego Fernades",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"6599945789",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
        
    }

    classValue = {
        subject: 1,
        cost:"20",
        
    }

    classeScheduleValues = [
        {
            weekday:1,
            time_from:720,
            time_to:1220
        },
        {
            weekday:0,
            time_from:520,
            time_to:1220
        }
    ]


    //await createProffy(db, {proffyValue, classValue, classeScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesandProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectedClassesandProffys)

    const selectedClassesSchedule = await db.all(`
        SELECT classe_schedule.*
        FROM classe_schedule
        WHERE classe_schedule.class_id = ""1"
        AND classe_schedule.weekday = "0"
        AND classe_schedule.time_from <= "1300"
        AND classe_schedule.time_to > "1300"

    `)

    console.log(selectedClassesSchedule)
})
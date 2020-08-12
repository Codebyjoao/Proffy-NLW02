module.exports = async function(db, { proffyValue, classValue, classeScheduleValues}){
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"  
        );
    `)

    const class_id = insertedClass.lastID

    const insertdAllClasseScheduleValues = classeScheduleValues.map((classeScheduleValue) => {
        return db.run(`
            INSERT INTO classe_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classeScheduleValue.weekday}",
                "${classeScheduleValue.time_from}",
                "${classeScheduleValue.time_to}"
            );
        `)
    })

    await Promise.all(insertdAllClasseScheduleValues)
}
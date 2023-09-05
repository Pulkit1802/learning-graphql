const myList = [
    "id", 
    "name",
    {
        "books": ["title", "id", "createdAt", 
            {
                "likedBy": ["id", "name"]
            }
        ]
    }
]

const selectBuilder = (select) => {

    if ( select === null ) 
        return null;


    let selectObj = {};
    
    select.forEach((field) => {
        if ( typeof field === "string" ) {
            // @ts-ignore
            selectObj[field] = true;
        } else {
            for (const [key, value] of Object.entries(field)) {
                // @ts-ignore
                selectObj[key] = {
                    'select': selectBuilder(value),
                };
            }
        }
    });

    return selectObj;
};

console.log(selectBuilder(myList));
const {writeFile} = require('fs');

async function makeFile() {
    try{
        await writeFile('./content/practice2.txt', (err, result) => {
            if(err) {
                console.log(err);
                return;
            };
            return result;
        })

        // try {
        //     await writeFile('./content/practice2.txt', "This is the first line.")
        //     }
        // try {
        //     await writeFile('./content/practice2.txt', "This is line 2", {flag: 'a'})
        // }
    }
    catch(error){
        console.log(error, "")
    }
}
makeFile()
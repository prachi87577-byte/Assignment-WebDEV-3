const fs = require("fs");

const fileName = "sample.txt";

console.log("File Manager Started");

// CREATE
fs.writeFile(fileName, "Hello! This is my Node.js file.", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("1. File created successfully.");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("2. File content:");
        console.log(data);

        // UPDATE
        fs.appendFile(
            fileName,
            "\nThis file has been updated.",
            (err) => {
                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("3. File updated successfully.");

                // DELETE
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("4. File deleted successfully.");
                    console.log("File Manager Completed");
                });
            }
        );
    });
});
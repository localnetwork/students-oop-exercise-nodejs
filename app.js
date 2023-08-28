const readline = require('readline');

const Student = require('./models/student');
const Parent = require('./models/parent'); 
const Sponsor = require('./models/sponsor')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter student ID: ', (studentId) => {
    rl.question('Enter student Name:', (studentName) => {
        rl.question('Enter student age:', (studentAge) => {
            const student = new Student(studentId, studentName, studentAge); 
            rl.question('Enter parent id:', (parentId) => {
                rl.question('Enter parent name:', (parentName) => {
                    rl.question('Enter parent job:', (parentJob) => {
                        const parent = new Parent(parentId, parentName, parentJob);
                        rl.question('Enter sponsor id: ', (sponsorId) => {
                            rl.question('Enter sponsor Name:', (sponsorName) => {
                                rl.question('Enter sponsor given amount: ', (sponsorAmount) => {
                                    const sponsor = new Sponsor(sponsorId, sponsorName, sponsorAmount);
                                    console.log(student.study());
                                    console.log(parent.work()); 
                                    console.log(sponsor.give()); 
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

// const student1 = new Student(1, 'John', 20);
// const parent1 = new Parent(1, 'Sample Parent Name 1', 'Web Developer'); 
// const sponsor1 = new Sponsor(1, 'Diome', 5000); 


// console.log(student1.study());
// console.log(parent1.work()); 
// console.log(sponsor1.give());
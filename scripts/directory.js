async function getMembers(){
const response = await fetch('data/members.json');

const members = await response.json();
    console.log(members);
}

getMembers();


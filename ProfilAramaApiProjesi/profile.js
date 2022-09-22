class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret =''
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();
        console.log(profile)
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json();
        console.log(todo)
        return {
            profile,
            todo
        }

    }

}
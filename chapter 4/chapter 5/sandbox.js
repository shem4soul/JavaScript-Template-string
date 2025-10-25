//object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'berlin',
    blogs: ['why mac & chesse rules', '10 things to make with marmite'],
    login: function () {
        console.log('The user logged in');
    },
    logout: function (params) {
        console.log('The User logged out');
        
    },
    logBlogs: function (params) {
        console.log('This user has written the following Blogs:');
       this.blogs.forEach(blog =>{
        console.log(blog);
       })      
    }
};

user.logBlogs();
console.log(this);


console.log(user);
console.log(user.name);

//user.age = 35;
console.log(user.age);


console.log((user['location']));
user['name'] = 'chun-li';

console.log(user['name']);

console.log((typeof user));

user.login();
user.logout();
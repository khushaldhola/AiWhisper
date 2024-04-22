git clone https://github.com/rrs301/Social-community-MERN-Starter-Pack.git -- frontend starter setup
npm install
_uyils - nextjs not considering it as a route
git clone https://github.com/rrs301/mongodb-nextjs-server-starter.git -- backend starter setup
npm i in server as welll to install dependency and modules
get mongodb uri and paste in .env node app.js in server folder
also i have used mongodb compass 

https://clerk.com/ for authentication
npm install @clerk/nextjs -- in aiwhisper
put clerk keys in .env.local and than wrap html with <ClerkProvider>
created custome page so i can eliminate their url and shows our url

there is one issue without sign in we cannot brouse any tab or windoe in site so toslve that issue -- middleware.ts and add publicRoutes: []

now i am storing the users data into server/storage

with use of rest client extention performed get and post to mongodb which is written in router.rest

created endpoint to store posts/strings 

npx shadcn-ui@latest add toast -- to add toast whle adding or creating post 

moment js lib to convert timstamps in actual human redable time
npm install moment --save 

not responsive -- some bugs in styling --

implemented like func , i hv noticed that by contineuous clicking like it may crash..

my toast not working as it should hv to fix it...

npx shadcn-ui@latest add alert-dialog
my shadcn is not working properly hv to reinstall it...

was getting Unhandled Runtime Error
TypeError: Cannot read properties of undefined (reading 'map') than i realised there are some previous post in which comments is not present there so error was that,
and toast is working now just had to move files to diff dir.
npx shadcn-ui@latest add popover

now it's a simple project anyone can do it(yet some functionality and sections are remains to build) but i need to add some ai stuff into this app to make it unique...
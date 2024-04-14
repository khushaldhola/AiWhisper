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
#Steps to use Express and Mongo together

1. For this we need only two files uchihaApi.js and uchiha.js .
2. Make sure we have node_modlues folder , In terminal ,now we goto a location where these two files present.
3. Hit command node uchihaApi.js

This will result in successful connection of MongoDB with express.

#Steps to get the data of database in express environment in browser.

1. Hit url (dont forget to add /api)
   http://localhost:3000/api Or
   http://localhost:3000/api/uchihas

#About this project

1. Make a react build, now we have App.js
2. Add bootstrap <script> and css file in index.html of react build.
3. Make structure as shown in repo.
4. npm start in CMD.


#Dynamic image rendering in react
1. Put Images folder in public folder of react build.
2. Follow below snipet

   <!-- var path = "Images/"
    return (
      <div className="text-info">
        <MyForm toggle={toggle} />
        <ul>
          {user &&
            user.length > 0 &&
            user.map((userObj, index) => (
              <div>
                <img
                  src = {path + userObj.name + ".jpg"}
                  alt="Logo" 
                  width="150"
                  height="200"
                />
                <h4>{userObj.name}</h4>
              </div>
            ))}
        </ul>
      </div>
    ); -->
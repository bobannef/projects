import { createBrowserRouter } from "react-router-dom";
import { Navlayout } from "./layouts/Navlayout";
import { postListRoute } from "./pages/Posts";
import { userListRoute } from "./pages/Users";
import { todosListRoute } from "./pages/Todos";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newPostRoute } from "./pages/NewPost";
import { editPostRoute } from "./pages/EditPost";


export const router = createBrowserRouter ([
 
    {
      path: '/',
      element: <Navlayout/>, children: [
      {errorElement:<h1>Error</h1>, children : [

        { path: 'posts',  children: [

          {index: true, ...postListRoute},

          {path:':postId', children: [
          {index:true, ...postRoute},
          {path:'edit', ...editPostRoute}

          ] 
        },

          {path:'new',...newPostRoute }

         ],
         
       },

   
   
         {path: 'users', children:[
   
           {index:true, ...userListRoute },
   
           {path:':userId', ...userRoute}
   
         ] 
       },
   
         {path: 'todos', children: [
   
         {index:true,...todosListRoute}
         ] 
       },
       {path:'*', element:<h1>404 Page not found</h1>}

      ]},
      

    ]

    }

])

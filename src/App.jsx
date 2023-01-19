import "./App.css";
export default function App() {

const names = ["Jaayu", "Daahil", "Paahil"]
const users =
[{name:"Jaayu",
pic:"https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
},
{name:"Daahil",
pic:"https://i.pinimg.com/236x/f3/af/1c/f3af1ca137939bad4e7f8d95d96d96b6.jpg"
},
{name:"Paahil",
pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7rNYRqdBhKmsTiW0pes2TrBJnzv7zqbjMp9W9J4cX4XK8jSeUmHBgHrgIt9AmANjxk&usqp=CAU",
}]

  return (
    <div className="App">
       {users.map((user)=>(
        <Msg name= {user.name} pic={user.pic} />

        ))}
      <Msg 
      name= "Jaayu" 
      pic="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" />
      <Msg 
      name= "Daahil"
      pic="https://i.pinimg.com/236x/f3/af/1c/f3af1ca137939bad4e7f8d95d96d96b6.jpg"/>
      <Msg 
      name= "Paahil"
      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7rNYRqdBhKmsTiW0pes2TrBJnzv7zqbjMp9W9J4cX4XK8jSeUmHBgHrgIt9AmANjxk&usqp=CAU"
      />
      
    </div>
  );
}
function Msg({pic, name}){
  return(
    <div>
      <img className="user-pic" src={pic} alt="{name}" />
      <h1>Hello, <span className="user-name">{name}</span>🙌😎🤩💐❤️</h1>
    </div>
    

  );
}
import { useEffect, useState } from "react";
import "./profile.css"
export default function Profile() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);
  return (
    <div className="profile">
        {
            users.map((curElem) => {
                const {avatar_url, followers_url, login, type} = curElem;
                return (
                    <div className="singleProfile">
                    <img src={avatar_url} alt="" />
                <div className="information">
                    <h1>Jahid Hasan</h1>
                    <h3>{login}</h3>
                    <div className="info">
                    <div className="details">
                        <p>{type}</p>
                        <span>4K</span>
                    </div>
                    <div className="details">
                        <p>Post</p>
                        <span>10</span>
                    </div>
                    <div className="details">
                        <p>Rating</p>
                        <span>7.5</span>
                    </div>
                    </div>
                </div>
                </div>
                )
            })
        }

        
    </div>
  )
}

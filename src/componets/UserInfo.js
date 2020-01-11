import React from 'react';
import PropTypes from 'prop-types';


const UserInfo = ({ userinfo }) => (
    <div className="user-info">
        <img src={userinfo.photo} />
        <h1>
            <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
        </h1>
        <div className="repos-info">
            <ul>
                <li>{`Repositórios: ${userinfo.repos}`}</li>
                <li>{`Seguidores: ${userinfo.followers}`}</li>
                <li>{`Seguindo: ${userinfo.folloing}`}</li>
            </ul>
        </div>
    </div>
)
UserInfo.protoTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        folloing: PropTypes.number.isRequired,
    })
}

export default UserInfo;
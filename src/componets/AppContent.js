import React from 'react';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';
import PropTypes from "prop-types";

const AppContent = ({ userinfo, repos, starred, handleSearch }) => (
    <div className="app">
        <Search handleSearch={handleSearch} />
        {/* !! -> transforma a variável em boleano evitando rederinzar o valor dele */}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions />}
        {!!repos.length &&
            < Repos className="repos" title="Repositórios:"
                repos={repos} />}
        {!!starred.length && <Repos className="starred" title="Favoritos:"
            repos={starred} />}
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default AppContent;
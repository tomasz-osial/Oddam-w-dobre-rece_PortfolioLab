import React, {Component} from "react";

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg'

class HomeHelp extends Component {

    state = {
        helpInstitutions: [],
        institution: "foundations",
        currentPage: 0
    };

    fetchInstitutionsDefault = () => {
        const URL_ADDRESS = 'http://localhost:3000/institutions';
        fetch(URL_ADDRESS)
            .then(resp => resp.json())
            .then(institutions => this.setState({
                helpInstitutions: institutions.filter(el => el.type === "foundation")
            }));
    };

    get items() {
        const { helpInstitutions, currentPage } = this.state;
        return helpInstitutions.slice(currentPage * 3, currentPage * 3 + 3)
    }

    changeCurrentPage = (i) => () => {
        this.setState({
            currentPage: i
        })
};

    get pagination() {
        const pageAmmount = Math.ceil(this.state.helpInstitutions.length / 3)
        const result = [];
        for (let i =0; i < pageAmmount; i++) {
            result.push(<li key={i} onClick={this.changeCurrentPage(i)}>
                {i + 1}
            </li>)
        }

        return result
    }

    showFoundations = () => {
        const URL_ADDRESS = 'http://localhost:3000/institutions';
        fetch(URL_ADDRESS)
            .then(resp => resp.json())
            .then(institutions => this.setState({
                helpInstitutions: institutions.filter(el => el.type === "foundation")
            }));
        this.setState({
            institution: "foundations"
        });
    };

    showOrganisations = () => {
        const URL_ADDRESS = 'http://localhost:3000/institutions';
        fetch(URL_ADDRESS)
            .then(resp => resp.json())
            .then(institutions => this.setState({
                helpInstitutions: institutions.filter(el => el.type === "organisation")
            }));
        this.setState({
            institution: "organisations"
        });
    };

    showLocals = () => {
        const URL_ADDRESS = 'http://localhost:3000/institutions';
        fetch(URL_ADDRESS)
            .then(resp => resp.json())
            .then(institutions => this.setState({
                helpInstitutions: institutions.filter(el => el.type === "local")
            }));
        this.setState({
            institution: "locals"
        });
    };
    componentDidMount() {
        this.fetchInstitutionsDefault();
    }

    render() {
        const { helpInstitutions } = this.state;
        return (
            <div className='helpContainer' id="fundations">
                <div className='helpTitleContainer'>
                    <div className='helpTitle'>
                        Komu pomagamy?
                    </div>
                    <img src={decoration} alt="decoration"/>
                </div>
                <div className='helpInstitutionsContainer'>
                    <div className={
                             this.state.institution === "foundations" ? 'helpInstitutionsActive' : ''}
                         onClick={this.showFoundations}
                        >Fundacjom
                    </div>
                    <div className={
                        this.state.institution === "organisations" ? 'helpInstitutionsActive' : ''}
                         onClick={this.showOrganisations}
                        >Organizacjom<br/>pozarządowym
                    </div>
                    <div className={
                        this.state.institution === "locals" ? 'helpInstitutionsActive' : ''}
                         onClick={this.showLocals}
                        >Lokalnym<br/>zbiórkom
                    </div>
                </div>
                <div className='institutionsList'>
                    <ul>
                        {this.items.map(el =>
                            <li key={el.id}>
                                <div className='institutionName'>
                                    {el.name}
                                </div>
                                <div>
                                    {el.description}
                                </div>
                                <div>
                                    {el.item}
                                </div>
                        </li>
                        )}
                    </ul>
                    <ul>{this.pagination}</ul>
                </div>
            </div>
        )
    }
}



export default HomeHelp;
import React, {Component} from "react";

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg'

class HomeHelp extends Component {

    state = {
        items: [],
        desc: '',
        institution: "foundations",
        currentPage: 0
    };

    get elements() {
        const { items, currentPage } = this.state;
        return items.slice(currentPage * 3, currentPage * 3 + 3)
    }

    changeCurrentPage = (i) => () => {
        this.setState({
            currentPage: i
        })
};

    get pagination() {
        const pageAmount = Math.ceil(this.state.items.length / 3);
        const result = [];
        for (let i = 0; i < pageAmount; i++) {
            result.push(<li key={i} onClick={this.changeCurrentPage(i)}>
                {i + 1}
            </li>)
        }

        return result
    }

    showFoundations = (name) => () => {
        this.fetchFoundations(name)
    };

    fetchFoundations = (name) => {
        const URL_ADDRESS = `http://localhost:3000/${name}`;
        fetch(URL_ADDRESS)
            .then(resp => resp.json())
            .then(data => data[0])
            .then(institutions => this.setState({
                desc: institutions.desc,
                items: institutions.items,
                institution: name
            }));
    };

    componentDidMount() {
        this.fetchFoundations('foundations');
    }

    render() {
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
                         onClick={this.showFoundations('foundations')}
                        >Fundacjom
                    </div>
                    <div className={
                        this.state.institution === "organisations" ? 'helpInstitutionsActive' : ''}
                         onClick={this.showFoundations('organisations')}
                        >Organizacjom<br/>pozarządowym
                    </div>
                    <div className={
                        this.state.institution === "locals" ? 'helpInstitutionsActive' : ''}
                         onClick={this.showFoundations('locals')}
                        >Lokalnym<br/>zbiórkom
                    </div>
                </div>
                <div className='institutionsContainer'>
                    <div className='institutionsDesc'>
                        {this.state.desc}
                    </div>
                    <div className='institutionsList'>
                                {this.elements.map(el =>
                                        <div key={el.header}
                                        className='listContainer'>
                                            <div className='nameContainer'>
                                                <div className='institutionName'>
                                                    {el.header}
                                                </div>
                                                <div className='institutionMission'>
                                                    {el.subheader}
                                                </div>
                                            </div>
                                            <div className='institutionItems'>
                                                {el.description}
                                            </div>
                                        </div>
                                )}
                        <ul className='listPagination'>
                            {this.pagination}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHelp;
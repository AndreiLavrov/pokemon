import React, { Component } from "react";
import { connect as reduxConnect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

import {
  loadPokemonsList,
  loadOnePokemon,
} from "../../actions/action-creators/main";
import Pokemon from "../pokemon/Pokemon";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: -1,
    };
  }

  componentDidMount() {
    const { loadPokemonsList } = this.props;

    loadPokemonsList();
  }

  clickListener = (index) => {
    const { pokemonsList, loadOnePokemon } = this.props;
    const { url } = pokemonsList[index];
    if (!url) return;

    if (
      !pokemonsList.weight &&
      !pokemonsList.height &&
      !pokemonsList.base_experience &&
      !pokemonsList.abilities
    ) {
      loadOnePokemon(url, index);
    }

    this.setState({ active: index });
  };

  render() {
    const { pokemonsList } = this.props;
    const { active } = this.state;

    return (
      <>
        {pokemonsList &&
          pokemonsList.map((item, index) => {
            console.log(active == index);
            return (
              <Pokemon
                data={item}
                active={active == index}
                index={index}
                listener={this.clickListener}
              />
            );
          })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonsList: state.main.pokemonsList,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadPokemonsList,
      loadOnePokemon,
    },
    dispatch
  );

export default withRouter(
  reduxConnect(mapStateToProps, mapDispatchToProps)(HomePage)
);

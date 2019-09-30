import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AlbumList from './page/AlbumList';
import Album from './page/Album';
import Play from './components/Play';

class App extends Component {
	state = {
		currentMusic: '',
		player: 'stopped'
	};

	componentDidUpdate = (preProps, preState) => {
		if (preState.currentMusic !== this.state.currentMusic) {
			this.player.src = this.state.currentMusic.url;
			this.player.play();
		}
	};

	stopMusic = () => {
		if (this.state.player === 'playing') {
			this.player.pause();
			this.setState({ player: 'stopped' });
		}
	};

	changeCurrentMusic = (selected) => {
		const { player } = this.state;

		this.setState({ currentMusic: selected });
		if (player === 'stopped') {
			this.setState({ player: 'playing' });
		}
	};

	render() {
		const { player } = this.state;
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/" component={Header} />
					</Switch>
				</div>
				<div>
					<Switch>
						<Route exact path="/" render={(props) => <AlbumList {...props} stopMusic={this.stopMusic} />} />
						<Route
							path="/album/:name"
							render={(props) => (
								<Album
									{...props}
									changeCurrentMusic={this.changeCurrentMusic}
									playerHandler={this.playerHandler}
								/>
							)}
						/>
					</Switch>
				</div>
				<audio ref={(ref) => (this.player = ref)} />
				{player !== 'stopped' ? <Play item={this.state.currentMusic} /> : null}
			</Router>
		);
	}
}

export default App;

import React, { Component } from 'react';

class PlayListEntry extends Component {
	playBtnHandler = () => {
		const { item, changeCurrentMusic, playerHandler } = this.props;
		changeCurrentMusic(item);
	};
	render() {
		const { item, idx } = this.props;
		return (
			<div>
				<span>{idx + 1}</span>
				<span>{item.name}</span>
				<span>{item.artist}</span>
				<input type="button" onClick={this.playBtnHandler} value="재생" />
			</div>
		);
	}
}

export default PlayListEntry;

import React, { Component } from 'react';
import PlayListEntry from '../PlayListEntry';

class PlayList extends Component {
	state = {
		currentMusicUrl: null
	};

	render() {
		const { musiclist, changeCurrentMusic, playerHandler } = this.props;
		console.log(this.state.currentMusicUrl);
		return (
			<div>
				<div>
					<span>번호</span>
					<span>곡</span>
					<span>아티스트</span>
					<span>듣기</span>
				</div>
				<div>
					{musiclist.map((item, idx) => (
						<PlayListEntry
							item={item}
							idx={idx}
							changeCurrentMusic={changeCurrentMusic}
							playerHandler={playerHandler}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default PlayList;

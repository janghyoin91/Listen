import React, { Component } from 'react';
import PlayList from '../../components/PlayList';
import AlbumDetail from '../../components/AlbumDetail';

class Album extends Component {
	state = {
		musiclist: null
	};
	componentDidMount = () => {
		const { album } = this.props.location.state;
		console.log(album);
		fetch('http://ec2-13-125-105-172.ap-northeast-2.compute.amazonaws.com:4000/musiclist', {
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				albumId: album.id
			})
		})
			.then((res) => res.json())
			.then((json) => {
				this.setState({ musiclist: json });
			});
	};

	render() {
		const { changeCurrentMusic, playerHandler } = this.props;
		const { album } = this.props.location.state;
		const { musiclist } = this.state;
		return musiclist ? (
			<div>
				<div>{album.name}</div>
				<div>
					<AlbumDetail album={album} />
				</div>
				<div>
					<div>수록곡</div>
					<PlayList
						musiclist={musiclist}
						changeCurrentMusic={changeCurrentMusic}
						playerHandler={playerHandler}
					/>
				</div>
			</div>
		) : null;
	}
}

export default Album;

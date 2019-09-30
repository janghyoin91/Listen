import React, { Component } from 'react';

class Play extends Component {
	state = {
		isPlaying: true,
		album: null
	};

	componentDidMount = () => {
		const { item } = this.props;
		fetch('http://localhost:4000/fetchAlbum', {
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				albumId: item.album_id
			})
		})
			.then((res) => res.json())
			.then((json) => {
				console.log('json', json);
				this.setState({ album: json });
			});
	};

	togglePlay = () => {
		this.state.isPlaying ? this.setState({ isPlaying: false }) : this.setState({ isPlaying: true });
	};

	render() {
		const { isPlaying, album } = this.state;
		const { item } = this.props;
		return (
			<div>
				<div>{album ? <img src={album.cover} /> : null}</div>
				<div>
					<div>{item.name}</div>
					{album ? <div>{album.artist}</div> : null}
				</div>
				{isPlaying ? <div onClick={this.togglePlay}>정지</div> : <div onClick={this.togglePlay}>재생</div>}
			</div>
		);
	}
}

export default Play;

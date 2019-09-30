import React, { Component } from 'react';
import AlbumPreView from '../../components/AlbumPreView';

class AlbumList extends Component {
	state = {
		albumlist: null
	};

	componentDidMount = () => {
		const { stopMusic } = this.props;
		fetch('http://localhost:4000/albumlist', {
			method: 'get',
			headers: {
				'Content-type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((json) => {
				this.setState({ albumlist: json });
			});

		stopMusic();
	};

	render() {
		const { albumlist } = this.state;
		console.log(albumlist);
		return albumlist ? (
			<div>
				<div>{albumlist.map((album, idx) => <AlbumPreView album={album} idx={idx} />)}</div>
			</div>
		) : null;
	}
}

export default AlbumList;

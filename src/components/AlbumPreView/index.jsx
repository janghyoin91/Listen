import React from 'react';
import { Link } from 'react-router-dom';

const AlbumPreView = ({ album, idx }) => {
	return (
		<Link
			to={{
				pathname: `/album/${album.name}`,
				state: { album }
			}}
		>
			<div>
				<div>
					<img src={album.cover} />
				</div>
				<div>
					<div>{album.name}</div>
					<div>{album.artist}</div>
					<div>{album.released}</div>
				</div>
			</div>
		</Link>
	);
};

export default AlbumPreView;

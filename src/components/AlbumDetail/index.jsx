import React from 'react';

const AlbumDetail = ({ album }) => {
	return (
		<div>
			<div>
				<img src={album.cover} />
			</div>
			<div>
				<div>
					<span>아티스트</span>
					<span>{album.artist}</span>
				</div>
				<div>
					<span>앨범종류</span>
					<span>album.</span>
				</div>
				<div>
					<span>발매일</span>
					<span>{album.released}</span>
				</div>
				<div>
					<span>장르</span>
					<span>{album.genre}</span>
				</div>
				<div>
					<span>기획사</span>
					<span>{album.company}</span>
				</div>
				<div>
					<span>재생시간</span>
					<span />
				</div>
			</div>
		</div>
	);
};

export default AlbumDetail;

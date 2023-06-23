// 불러오기
import Modal from 'react-modal';

function WriteModalFunc({isOpen, closeModal, changeFeeling, changeContent, handleSubmit }) {

	const modalStyle = {
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.45)",
			zIndex: 10,
		},
		content: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			background: "#fff",
			color: "black",
			overflowY: "auto",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: "50%",
			height: 500,
			WebkitOverflowScrolling: "touch",
			outline: "none",
			zIndex: 10,
			padding: 30,
		},
	};


	console.log(isOpen)
	// 사용법
	return (
		<>
			<Modal
				isOpen={isOpen}
				style={modalStyle}
				onRequestClose={closeModal}
				ariaHideApp={false}
			>
				<div className='inputBox'>
					How do you feel?
					<textarea className='textWriteArea' onChange={changeContent}></textarea>
					<br/>
					Choose your mood
					<select className='feelingSelect' onChange={changeFeeling}>
						<option value={'맑음'}>맑음</option>
						<option value={'흐림'}>흐림</option>
						<option value={'비'}>비</option>
						<option value={'천둥'}>천둥</option>
					</select>
				</div>
				<button className='uploadBtn' onClick={handleSubmit}>upload</button>
			</Modal>
		</>
	)	
}

export default WriteModalFunc;
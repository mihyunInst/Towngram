// 불러오기
import Modal from 'react-modal';

function ModalFunc({isOpen, closeModal, content}) {

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
			background: "#fff",
			color: "black",
			overflowY: "auto",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: "50%",
			height: 300,
			WebkitOverflowScrolling: "touch",
			outline: "none",
			zIndex: 10,
			padding: 30,
		},
	};


	// 사용법
	return (
		<>
			<Modal
				isOpen={isOpen}
				style={modalStyle}
				onRequestClose={closeModal}
				ariaHideApp={false}
			>
				
				<p>{content}</p>

			</Modal>
		</>
	)	
}

export default ModalFunc;
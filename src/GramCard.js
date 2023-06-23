import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faSun, faCloud, faDroplet, faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalFunc from './ModalFunc';
import WriteModalFunc from './WriteModalFunc';

function GramCard({loginUser, handleLogout}) {

    const [cardList, setCardList] = useState([]);
    const [content, setContent] = useState('');
    const [search, setSearch] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isWriteModalOpen, setWriteModalOpen] = useState(false);
    const [writeContent, setWriteContent] = useState({
        userNo: loginUser.userNo,
        feeling: '',
        content: ''
    });

    const changeFeeling = (e) => {
        setWriteContent({...writeContent, feeling : e.target.value})
    }

    const changeContent = (e) => {
        setWriteContent({...writeContent, content : e.target.value})
    }

    const handleWrite = () => {
        console.log("click")
        if(isWriteModalOpen) {
            setWriteModalOpen(false);
        } else {
            setWriteModalOpen(true)
        }
    }

    const handleContentClick = (cn, un) => {
        if(loginUser.userNo != un) increaseReadCount(cn);

        for(const card of cardList) {
            if(card.cardNo == cn) {
                setContent(card.content)
            }
        }

        if(isModalOpen) {
            setModalOpen(false);
        } else {
            setModalOpen(true)
        }
    }

    
	const closeModal = () => {
		setModalOpen(false);
	}
	const closeWriteModal = () => {
		setWriteModalOpen(false);
	}

  
    const changeSearch = async (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
  
        await axios.post(
            "/cardgram/searchList",
            { searchWord : e.target.value },
            { withCredentials: true },
          ).then((res)=>{
            console.log(res);
            setCardList(res.data);
          })
    }
  
  
    const getCardList = async () => {
     await axios.get(
        "/cardgram/selectAllCardList",
         { withCredentials: true }
      ).then((res)=>{
        console.log(res);
        setCardList(res.data);
      })
    }
    
  
    useEffect(() => {
      getCardList();
    }, [])
  
  
    const getFeelingIcon = (feeling) => {
        if(feeling == '맑음') {
            return faSun;
        } else if(feeling == '흐림') {
            return faCloud;
        } else if(feeling == '비') {
            return faDroplet;
        } else {
            return faCloudBolt;
        }
    }


    const increaseLike = async(cardNo) => {
        await axios.post(
            "/cardgram/like",
            { cardNo: cardNo},
            { withCredentials: true }
          ).then((res)=>{
            getCardList();
          })
    }

    const increaseReadCount = async(cardNo) => {
        await axios.post(
            "/cardgram/readCount",
            { cardNo: cardNo},
            { withCredentials: true }
          ).then((res)=>{
            getCardList();
          })
    }

    const handleSubmit = async() => {
        if(writeContent.feeling == '')  {
            alert("기분을 선택해주세요");
        } else if(writeContent.content == '') {
            alert("내용을 입력해주세요");
        } else {
            await axios.post(
                "/cardgram/insertCard",
                { data: writeContent},
                { withCredentials: true }
              ).then((res)=>{
                getCardList();
            })
            setWriteModalOpen(false);
        }
    }

    return (
        <div className='listContainer'>
  
            <SearchBar changeSearch={changeSearch} search={search} handleLogout={handleLogout} handleWrite={handleWrite}/>
            
            <div className='marginTop'/>

        
            {cardList?.map((card, index) => (
                <div className="cardBox">
                    <div className="infoSection">
                        <div>
                            <div>{card.userName}</div>
                            <div>{card.user}{card.feeling} <FontAwesomeIcon icon={getFeelingIcon(card.feeling)} /></div>
                            <div>{card.userRegion}</div>
                        </div>
                        <div><FontAwesomeIcon icon={faEye} /><span className='readCount'>{card.readCount}</span></div>
                    </div>
                    <div className="contentSection" onClick={() => handleContentClick(card.cardNo, card.userNo)}>
                        {card.content}
                    </div>
                    <div className='likeBox' onClick={() => increaseLike(card.cardNo)}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className='readCount'>{card.like}</span>
                    </div>
                </div> 

            ))}

            <ModalFunc 
                isOpen={isModalOpen} 
                closeModal={closeModal}
                content={content}
            />

            <WriteModalFunc 
                isOpen={isWriteModalOpen} 
                closeModal={closeWriteModal}
                changeFeeling={changeFeeling}
                changeContent={changeContent}
                handleSubmit={handleSubmit}
            />

        </div>
    );
}

export default GramCard;

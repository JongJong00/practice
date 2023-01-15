import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from '../../Data';
import CreateList from '../../component/table/CreateList'

const PostList = props => {
  const [ dataList, setDataList ] = useState([]);
  const [nextId, setNextId] = useState(6);


  useEffect(() => {
    setDataList(postList);
  }, [ ])

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onCreate = () =>{
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user])
  setInputs({
    username: '',
    email: ''
  })

  const onClick = () => {
    console.log(nextId.current);
     setNextId(nextId + 1);
    }
  


  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (



              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                <input value= {item} />
                <CreateUser 
                item={item} 
                index={index} 
               onChange={onChange} 
                onCreate={onCreate}
                />
              </CommonTableRow>
              <button onClick={onClick}>추가</button>
             
            


            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList;
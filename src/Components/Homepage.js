import React, { useState, useContext } from 'react';
import Item from '../Components/Item';
import DropWrapper from '../Components/DropWrapper';
import Col from '../Components/Col';
import { data, statuses } from '../Data/Index';
import { InputContext } from '../Context/DataContext';
const Homepage = () => {
    const [items, setItems] = useState(data);
    const { userInputContext, setUserInputContext } = useContext(InputContext)
    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status)

        setUserInputContext(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon })
            localStorage.setItem('allData', JSON.stringify(newItems))
            return [...newItems]
        })
    }

    const moveItem = (dragIndex, hoverIndex) => {
        const item = userInputContext[dragIndex];
        setUserInputContext(prevState => {
            const newItems = prevState.filter((i, index) => index !== dragIndex);
            newItems.splice(hoverIndex, 0, item)
            localStorage.setItem('allData', JSON.stringify(newItems))
            return [...newItems];
        })
    };

    const dataFromStorage = JSON.parse(localStorage.getItem('allData'))
    return (
        <div className={'row'}
        >
            {statuses.map((s, index) => {
                return (
                    <div key={`${s}_${index}`} className={'col-wrapper'}>
                        <h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {dataFromStorage.filter((i, index) => i.status === s.status)
                                    .map((i, index) => <Item key={`${i}_${index}`} item={i} index={index} moveItem={moveItem} status={s} />)}
                            </Col>
                        </DropWrapper>
                    </div>
                )
            })}
        </div>
    )
};

export default Homepage;
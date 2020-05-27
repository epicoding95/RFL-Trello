import React, { useState } from 'react';
import Item from '../Components/Item';
import DropWrapper from '../Components/DropWrapper';
import Col from '../Components/Col';
import { data, statuses } from '../Data/Index';
const Homepage = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status)

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon })
            return [...newItems]
        })
    }

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, index) => index !== dragIndex);
            newItems.splice(hoverIndex, 0, item)
            return [...newItems];
        })
    };


    return (
        <div className={'row'}
        >
            {statuses.map(s => {
                return (
                    <div key={Math.random()} className={'col-wrapper'}>
                        <h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items.filter(i => i.status === s.status)
                                    .map((i, index) => <Item key={i.id} item={i} index={index} moveItem={moveItem} status={s} />)}
                            </Col>
                        </DropWrapper>
                    </div>
                )
            })}
        </div>
    )
};

export default Homepage;